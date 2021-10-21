import fs from "fs";
import path from "path";
import { URL } from "url";
import { execSync } from "child_process";

import dotenv from "dotenv";

const DOTENV_FILE = path.join(
  new URL(".", import.meta.url).pathname,
  "../app/.env",
);

let args;

if (fs.existsSync(DOTENV_FILE)) {
  args = dotenv.parse(fs.readFileSync(DOTENV_FILE));
}

const argString = Object.entries(args)
  .map(([key, value]) => `${key}="${value}"`)
  .join(",");

exec("heroku container:login");
exec(
  `DOCKER_DEFAULT_PLATFORM=linux/amd64 heroku container:push web --arg ${argString}`,
);
exec("heroku container:release web");

function exec(cmd) {
  console.info(cmd);
  execSync(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
