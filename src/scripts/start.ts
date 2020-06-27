// specifying devlopement enviorement
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

import chalk from "chalk";
import webpack from "webpack";
import server from "webpack-dev-server";

console.log(chalk.blue("Hello world"));
