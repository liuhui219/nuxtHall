/** @format */

const Koa = require("koa");
const compress = require("koa-compress");
const mount = require("koa-mount");
const {join, extname} = require("path");
const {exec} = require("child_process");
const isDev = process.env.NODE_ENV === "development";
const app = new Koa();
const root = join(__dirname, "/dist");

app.use(mount("/", require("koa-static")(root)));

app.listen(7001);
exec("start http://localhost:7001");
console.log("http://localhost:7001");
