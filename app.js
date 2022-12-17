import express from "express";


const app = express();






// Base route to check server running
app.get("/", (req, res) => {
    res.sendStatus(200);
  });


app.get("*", (req, res) =>
  res.status(404).send({
    message: "Welcome to the beginning of nothingness.",
  })
);

app.use( (error, req, res, next) => {
  if (error.code) {
    res.status(error.code).send(error.message);
  } else {
    res.status(500).send(error.message);
  }
})

export default app;