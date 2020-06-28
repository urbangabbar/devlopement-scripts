#!/usr/bin/env node
const chalk = require("chalk");
const args = process.argv.slice(2);
const availableScripts = ["start", "test"];
const additionalArgs = args.slice(1);
const { fork } = require("child_process");
const moveToscripts = "node ./scripts/";

if (availableScripts.includes(args[0])) {
  const result = fork("./scripts/start.js");
  result.on("exit", (outpuy) => {
    console.log("process completed");
  });
  result.on("error", (err) => console.log(err));
} else {
  console.log(chalk.red("Unkwon scripts"));
}
