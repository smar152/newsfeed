const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);

export default function handler(req, res) {
  const { q, type, offset } = req.query;
  const params = {
    engine: "google",
    q,
    start: offset,
    google_domain: "google.com",
    gl: "us",
    hl: "en",
  };

  if (type === "news") {
    params.tbm = "nws";
  }

  const callback = function (data) {
    const result = type === "news" ? data.news_results : data.organic_results;
    res.json(result);
  };

  console.log("p", params);

  // Show result as JSON
  search.json(params, callback);
}
