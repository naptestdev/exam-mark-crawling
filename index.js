import { ids } from "./data.js";
import chalk from "chalk";
import { getMarkFromToken, getToken } from "./service.js";

const result = await Promise.all(
  ids.map(async (id) => {
    const token = await getToken(id);

    const info = await getMarkFromToken(token);

    return `${chalk.cyan(info.name)} - ${info.mark}`;
  })
);

console.log(result.join("\n"));
