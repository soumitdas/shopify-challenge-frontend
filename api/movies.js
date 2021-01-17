const http = require("http");

function fetch(url) {
  return new Promise((resolve, rejects) => {
    http
      .get(url, (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => resolve(data));
      })
      .on("error", (err) => rejects(err));
  });
}

module.exports = async (req, res) => {
  const { search, page = 1 } = req.query;
  try {
    const resp = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${search}&page=${page}`
    );
    res.status(200).send(resp);
  } catch (e) {
    console.log(e);
    res.status(400).send("Something went wrong...");
  }
};
