let name = "Sandeep";
let course = "B.Sc. Physics";
let university = "Azim Premji University";

console.log(name);
console.log(course);
console.log(university);

document.getElementById("name").innerText = name;

document.getElementById("course").innerHTML = course;

document.getElementById("university").innerHTML = university;

function showDetails() {
  document.getElementById("introduction").innerHTML =
    "I am " + name + " and I am studying " + course + " at " + university + ".";

  document.getElementById("name").style.color = "blue";

  document.getElementById("myLink").href = "https://www.apu.edu.in";
}
