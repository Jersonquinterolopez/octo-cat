import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetchData(url) {
  const [data, dataSet] = useState(null);
  const [loading, loadingSet] = useState(false);
  const [error, errorSet] = useState(false);
  const [success, successSet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      loadingSet(true);
      try {
        const response = await axios.get(url);
        const data = await response.data;
        dataSet(data);
        loadingSet(false);
        successSet(true);
      } catch (error) {
        loadingSet(false);
        errorSet(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, success };
}

export default useFetchData;
