const express = require("express");
// console.log(express);
const app = express();
const PORT = 8000;

// make sure these lines are above any app.get or app.post code blocks
// ***MIDDLEWRAE***
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====================================================
const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" },
];

// req is shorthand for request
// res is shorthand for response
// app.get("/api", (request, response) => {
//   console.log(request);
//   response.json({ message: "Hello Express" });
// });

//* GET ALL USER
app.get("/api/users", (req, res) => {
  res.json(users);
});

//! POST - CREATE A USER
app.post("/api/users", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(users);
});

//? GET USER BY ID
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users[id]);
});

// UPDATE
app.put("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const { id } = req.params;
  // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body;
  // we always need to respond with something
  res.json({ status: "ok" });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const { id } = req.params;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json({ status: "ok" });
});

// this needs to be below the other code blocks
app.listen(PORT, () => {
  console.log(`The server is up & running on PORT ${PORT}`);
});
