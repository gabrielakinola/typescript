var person = {
  name: "Gabriel",
  age: 16,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
person.role.push("admin");
person.role[0] = 10;
var favActivities;
favActivities = ["sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
  var hobby = _a[_i];
  console.log(hobby);
}
