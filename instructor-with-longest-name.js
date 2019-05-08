const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var element = null;
  var length = 0;
  instructors.forEach((instructor, index) => {
    if (instructor.name.length > length) {
      length = instructor.name.length;
      element = index;
    }
  });
  return instructors[element];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
