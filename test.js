import { getMarkFromToken, getToken } from "./service.js";
import fs from "fs";

let count = 100;

const result = [];

while (String(count).length <= 6) {
  const ids = new Array(10).fill("").map((_, index) => count * 10 + index);

  const data = await Promise.all(
    ids.map(async (id) => {
      let formatted = String(id).padStart(6, "0");

      const token = await getToken(formatted, "02");

      if (!token) {
        return null;
      }

      const info = await getMarkFromToken(token);

      return {
        id: formatted,
        ...info,
      };
    })
  );

  const filtered = data.filter((i) => i);
  result.push(...filtered);

  count++;

  fs.writeFileSync("./data.json", JSON.stringify(result, null, 2));

  console.log(
    `Done ${count * 10}-${count * 10 + 9}. Got: ${filtered.length}. Total: ${
      result.length
    }`
  );
}
