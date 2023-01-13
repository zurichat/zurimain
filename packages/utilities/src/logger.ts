import chalk, { type ChalkInstance } from "chalk";
import log from "loglevel";
import prefix from "loglevel-plugin-prefix";

type COLORTYPES = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";

const colors: { [key in COLORTYPES]: ChalkInstance } = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red
};

if (process.env.NODE_ENV == "development") {
  log.setLevel("debug");
}

prefix.reg(log);

prefix.apply(log, {
  format(level, name, timestamp) {
    return `${chalk.gray(`[${timestamp}]`)} ${colors[
      level.toUpperCase() as COLORTYPES
    ](level)} ${chalk.green(`${name}:`)}`;
  }
});

export { log as logger };
export default log;
