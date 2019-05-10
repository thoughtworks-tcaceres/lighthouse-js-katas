const organizeInstructors = function(instructors) {
  // Put your solution here
  var instructorsArr = instructors;
  var coursesObj = {};
  var courses = [];

  instructorsArr.forEach(instructor => {
    courses.push(instructor.course);
  });
  courses = [...new Set(courses)];

  courses.forEach(course => {
    coursesObj[course] = [];
  });

  instructorsArr.forEach(instructor => {
    if (coursesObj.hasOwnProperty(instructor.course)) {
      coursesObj[instructor.course].push(instructor.name);
    }
  });

  return coursesObj;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);
