import useSwr from 'swr';
import api from '../service/api';

export default function useFetch(url) {
  const { data, error } = useSwr(url, async (URL) => {
    const response = await api.get(URL);
    return response.data;
  }, { revalidateOnFocus: true });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
