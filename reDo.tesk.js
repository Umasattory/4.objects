function student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

student.prototype.subject = function (subjectName) {
  this.subjectName = subjectName;
};

student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark]
  } else {
    this.marks.push(mark)
  }
};

student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks === [...marks]
  } else {
    this.marks.push(...marks)
  }
};

student.prototype.getAverage = function () {

  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  avg = sum / this.marks.length;
  return this.getAverage = avg;
}

student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}

const student1 = new student("Сатторов Умед", "male", 25);
student1.setSubject = "Geometry";
student1.addMark(5);
student1.addMarks(3, 5, 5, 8, 1);
student1.getAverage();
student1.exclude("marks is bad");

console.log(student1);