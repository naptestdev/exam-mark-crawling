import fs from "fs";
const students = JSON.parse(fs.readFileSync("./data.json"));

console.log(students.length);

const parseField = (str, field) =>
  Number(str.split(field)[1]?.split(";")[0].trim());

const parsed = students
  .map((student) => ({
    ...student,
    total: parseField(student.mark, "Tổng điểm XT:"),
  }))
  .filter((i) => i.total);

const marks = parsed.map((i) => i.total);

const max = Math.max(...marks);

console.log(parsed.filter((student) => student.total === max));
