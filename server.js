const express = require("express");
const history = require("connect-history-api-fallback");
const app = express();
const path = require("path");

const staticFileMiddleware = express.static(path.join(__dirname, "dist"));
app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);

const port = 3000;
app.listen(port, () => {
  console.log(`Server starting simulating rails for a VueJS app on port ${port}!`);
});
