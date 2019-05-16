// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  report(student) {
    return `${student.gradeYo - Math.random() * 100}`;
  }
}

class Student extends Instructor {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.gradeYo = studentAttrs.gradeYo;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduateMethod() {
    if (`${this.gradeYo}` >= 70) {
      return `you graduated yo!`;
    } else {
      return "you failed bro!";
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(slack) {
    return `${this.name} announces to ${slack}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const Dan = new Instructor({
  name: "Dan",
  location: "Utah",
  age: 30,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Time for break`
});

const George = new Student({
  name: "George",
  location: "chi city",
  age: 26,
  previousBackground: "Finance",
  className: "Web20",
  favSubjects: ["Coding", "Math", "History", "Finance", "English"],
  gradeYo: 100
});

const Josh = new ProjectManager({
  name: "Josh",
  location: "Arizona",
  age: 28,
  favLanguage: "JavaScript and CSS",
  specialty: "Front-end and HTML",
  catchPhrase: `That's awesome`,
  gradClassName: "CS1",
  favInstructor: "Dan"
});

console.log(Dan.speak());
console.log(Dan.demo("Arrays"));
console.log(Dan.grade(George, "HTML"));
console.log(George.listsSubjects());
console.log(George.PRAssignment("CSS"));
console.log(George.sprintChallenge("Classes"));
console.log(Josh.standUp("Web20"));
console.log(Josh.debugsCode(George, "Map and Filter"));
console.log(Josh.grade(George, "CSS"));

console.log(Dan.report(George));

console.log(George.graduateMethod());
