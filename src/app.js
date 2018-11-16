// NOTE:  This isn't the 'app.js' you think it is. Don't try and write stuff in it or it'll break!
const Server = require("./server.js");

const port = (process.env.PORT || 8080);
const app = Server.app();

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const config = require("../webpack.config.js");
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
