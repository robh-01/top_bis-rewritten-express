import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  //   res.send("Hello, world!");
  const filename = path.join(import.meta.dirname, "public", "index.html");
  fs.readFile(filename, "utf-8")
    .then((content) => {
      res.send(content);
    })
    .catch((err) => {});
});

app.get("/about", (req, res) => {
  const filename = path.join(import.meta.dirname, "public", "about.html");
  fs.readFile(filename, "utf-8")
    .then((content) => {
      res.send(content);
    })
    .catch((err) => {});
});

app.get("/contact-me", (req, res) => {
  const filename = path.join(import.meta.dirname, "public", "contact-me.html");
  fs.readFile(filename, "utf-8")
    .then((content) => {
      res.send(content);
    })
    .catch((err) => {});
});

app.use((req, res) => {
  const filename = path.join(import.meta.dirname, "public", "404.html");
  fs.readFile(filename, "utf-8")
    .then((content) => {
      res.send(content);
    })
    .catch((err) => {});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});
