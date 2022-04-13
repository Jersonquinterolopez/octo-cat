import { useState, useEffect } from 'react';
import axios from 'axios';

function useOctoCatController() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [octocatUserName, setOctocatUserName] = useState('');
  const [repos, setRepos] = useState(null);
  const [repoStars, setRepoStars] = useState(null);
  const [technologies, setTechnologies] = useState(null);

  const fetchOctoCat = async () => {
    setLoading(true);
    try {
      const config = {
        url: `https://api.github.com/users/${octocatUserName}`,
        method: 'get',
      };
      const response = await axios(config);
      const { data } = response;
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    const fetchRepos = async (repos_url) => {
      try {
        const config = {
          url: repos_url,
          method: 'get',
        };
        const response = await axios(config);
        const { data } = response;
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    };

    data && fetchRepos(data.repos_url);
  }, [data]);

  useEffect(() => {
    const countStars = () => {
      const stars = repos.map((repo) => {
        return {
          star: repo.stargazers_count,
        };
      });
      const initValue = 0;
      const totalStars = stars.reduce(
        (previous, current) => previous + current.star,
        initValue
      );
      setRepoStars(totalStars);
    };

    const mapTecnologies = () => {
      const technologiesArray = repos.map((repo) => {
        return {
          language: repo.language,
        };
      });

      const deleteDuplicateTechnologies = technologiesArray.reduce(
        (previus, current) => {
          const duplicate = previus.find(
            (item) => item.language === current.language
          );
          if (!duplicate) {
            return previus.concat([current]);
          } else {
            return previus;
          }
        },
        []
      );

      const filteredTechnologies = deleteDuplicateTechnologies.filter(
        (item) => item.language !== null
      );

      setTechnologies(filteredTechnologies);
    };

    if (repos) {
      countStars();
      mapTecnologies();
    }
  }, [repos]);

  return {
    fetchOctoCat,
    octocatUserName,
    setOctocatUserName,
    data,
    loading,
    error,
    repoStars,
    technologies,
  };
}

export default useOctoCatController;
