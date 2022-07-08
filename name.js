import fs from "fs";
const students = JSON.parse(fs.readFileSync("./data.json"));

(() => {
  const group = students.reduce((acc, student) => {
    const surname = student.name.split(" ")[0];

    if (!acc[surname]) {
      acc[surname] = 0;
    }
    acc[surname]++;

    return acc;
  }, {});

  const sorted = Object.fromEntries(
    Object.entries(group)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
  );

  console.log("Những họ được sử dụng nhiều nhất");
  console.log(sorted);
})();

(() => {
  const group = students.reduce((acc, student) => {
    const name = student.name.split(" ").slice(-1)[0];

    if (!acc[name]) {
      acc[name] = 0;
    }
    acc[name]++;

    return acc;
  }, {});

  const sorted = Object.fromEntries(
    Object.entries(group)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
  );

  console.log("Những tên được sử dụng nhiều nhất");
  console.log(sorted);
})();
