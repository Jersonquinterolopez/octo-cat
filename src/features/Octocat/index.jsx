import React from 'react';
import useOctoCatController from './controller/useOctoCatController.js';
import OctocatCard from './OctocatCard/index.jsx';
import OctoCatProfiler from './OctoCatProfiler/index.jsx';

const OctoCat = () => {
  const {
    fetchOctoCat,
    octocatUserName,
    setOctocatUserName,
    data,
    loading,
    error,
    repoStars,
    technologies,
  } = useOctoCatController();

  if (loading) return <p>Loading</p>;
  if (error) return <p>Could not fecth data</p>;

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <OctoCatProfiler
            octocat={octocatUserName}
            setOctocat={setOctocatUserName}
            fetchOctoCat={fetchOctoCat}
          />
          {data && (
            <OctocatCard
              octo={data}
              octoRepoStars={repoStars}
              technologies={technologies}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OctoCat;
