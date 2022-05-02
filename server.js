const config = require("./config");
const https = require("https");
const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/angular-app'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/angular-app/index.html'));
});

app.get("/search", (req, res) => {
  const apiKey = `api_key=${config.apiKey}`;
  const query = `query=${encodeURI(req.query.query || "")}`;
  const language = `language=${encodeURI(/[а-яА-ЯЁё]/.test(req.query.query) ? "ru" : "en-us")}`;

  const options = {
    hostname: "api.themoviedb.org",
    path: `/3/search/person?${apiKey}&${query}&${language}`,
    method: "GET"
  };

  const request = https.request(options, response => {
    const chunks = [];

    response
      .on("data", data => chunks.push(data))
      .on("end", () => {
        const data = Buffer.concat(chunks);
        res.status(200).send(JSON.parse(data));
      });
  });

  request.on("error", error => res.sendStatus(400));

  request.end();
});

app.listen(config.port || 8080);
