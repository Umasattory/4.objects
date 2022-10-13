
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.mark === undefined) {
    this.mark = [mark];
  } else {
    this.mark.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.mark === undefined) {
    this.mark = mark;
  } else {
    let existArr = this.mark.slice(); //клон старого массива
    this.mark = mark; // создание нового массива
    let unificArrs = [].concat(existArr, mark); // соединение массивов
    this.mark = unificArrs;
  }
}

/* student.prototype.getAverage = function() {
  let sum = 0;
  for (let i = 0; i < this.mark.length; i++){
    sum += this.mark[i];
  }
  avg = sum / this.mark.length;
  return this.average = avg;
} */

Student.prototype.getAverage = function (avg) {
  let sum = 0;
  for (let i = 0; i < this.mark.length; i++){
    sum += this.mark[i];
  }
  avg = sum / this.mark.length;
  this.average = avg;
}

Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.mark;
  this.exclude = "reason";
}

/* let student5 = new Student("Сатторов Умед", "male", 22);
student2.setSubject("Algebra");
student2.addMark(4);
student2.addMark(3)
student2.addMark(2)
student2.exclude()


let student3 = new Student("Иванов Петр", "male", 21);
student3.setSubject("Geometry");
student3.addMarks(3, 5, 7, 8);
student3.addMarks(5,2);

let student4 = new Student("Сидорова Наталья", "famale", 23);
student4.setSubject("Trigonometry");
student4.addMarks(2, 1, 5, 2);
console.log(student4.getAverage());

console.log(student2);
console.log(student3);
console.log(student4); */

// ваш код для остальных методов