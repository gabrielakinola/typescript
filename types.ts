const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Gabriel",
  age: 16,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
//efme
person.role.push("admin");
person.role[0] = 10;
let favActivities: (number | string)[];
favActivities = ["sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
