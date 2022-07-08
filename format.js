import fs from "fs";
const students = JSON.parse(fs.readFileSync("./data.json"));

const parseField = (str, field) =>
  Number(str.split(field)[1]?.split(";")[0].trim());

const parsed = students
  .map((student) => ({
    ...student,
    total: parseField(student.mark, "Tổng điểm XT:"),
    literature: parseField(student.mark, "Ngữ văn:"),
    math: parseField(student.mark, "Toán:"),
    english: parseField(student.mark, "Ngoại ngữ:"),
    professional1: parseField(student.mark, "Chuyên 1:"),
    professional2: parseField(student.mark, "Chuyên 2:"),
  }))
  .filter((i) => i.total);

console.log("Tổng số học sinh", students.length);

console.log(
  "Số người thi chuyên",
  parsed.filter((i) => i.professional1 || i.professional2).length
);

console.log(
  "Số người điểm văn >= 9",
  parsed.filter((i) => i.literature >= 9).length
);
console.log(
  "Số người điểm văn = 9.5",
  parsed.filter((i) => i.literature === 9.5).length
);

console.log(
  "Số người điểm văn >= 8",
  parsed.filter((i) => i.literature >= 8).length
);

console.log(
  "Số người điểm toán = 10",
  parsed.filter((i) => i.math === 10).length
);

console.log(
  "Số người điểm tiếng anh = 10",
  parsed.filter((i) => i.english === 10).length
);

console.log(
  "Số người điểm chuyên 1 = 10",
  parsed.filter((i) => i.professional1 === 10).length
);

console.log(
  "Số người điểm chuyên 2 = 10",
  parsed.filter((i) => i.professional2 === 10).length
);
