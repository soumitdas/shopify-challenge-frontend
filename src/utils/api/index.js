export const searchMovies = async (search, pageNo = 1) => {
  const url = `/api/movies?search=${search}&page=${pageNo}`;
  return fetch(url)
    .then((r) => r.json())
    .then((resp) => {
      if ("Error" in resp) {
        throw new Error(resp.Error);
      }
      return resp;
    });
};
