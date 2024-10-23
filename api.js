
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

let db = [
  {},
  {
    id: 1,
    name: "Abhinish",
  },
  {
    id: 2,
  },
];

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

//wrong way
//Once a response is sent with any of these methods (e.g., res.json() or res.send()), the HTTP connection is considered complete, and Express will not allow another response to be sent. This is why you cannot call both res.json() and res.send() in the same request handler—the first call will send the response and close the connection.
// app.get("/", (req, res) => {
//   res.json(db);
//   res.send("Done");
// });

//one route should  make one request only

app.get("/", (req, res) => {
  const response = {
    data: db, // Your database data
    message: "Done",
  };
  res.json(response); // Send everything as a single JSON object
});

// Route to add data (POST request)
app.post("/", (req, res) => {
  const body = req.body; // Get the request body
  db.push(body); // Add the new data to the 'db' array
  console.log(body); // Log the incoming data to the console
  res.json({
    updatedDb: db, // Optionally send back the updated db
  }); // Respond with a success message and the new data
});

//update to new version
app.put("/", (req, res) => {
  let user = db.findIndex((obj) => obj.id == req.body.id);
  console.log(user);
  if (user) {
    db[user] = req.body;
    res.json({
      message: "User updated successfully",
      updatedDb: db,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
  console.log(user);
});

//patch update

app.patch("/", (req, res) => {
  let userId = req.body.id;
  let userData = req.body;
  //index of that object
  let user = db.findIndex((obj) => obj.id == userId);
  db[user] = { ...db[user], ...userData };
  res.send(db);
});

app.delete("/", (req, res) => {
  let userId = req.body.id;

  // Find the index of the object with the specified id
  let userIndex = db.findIndex((obj) => obj.id == userId);

  // Check if the user was found
  if (userIndex !== -1) {
    // Remove 1 element at the found index
    db.splice(userIndex, 1);
    res.send(db);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.listen(3300);
