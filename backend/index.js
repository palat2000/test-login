const { writeFile, readFile } = require("fs/promises");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const data = await readFile("./user/user.json", "utf8");
    const arrData = JSON.parse(data);
    const find = arrData.find(
      (item) => item.username == username && item.password == password
    );
    if (!find) {
      res.status(200).json({ notFound: true });
      return;
    }
    res.status(200).json(find);
  } catch (err) {
    console.log("err from catch", err);
  }
});

app.post("/register", async (req, res, next) => {
  try {
    const user = req.body;
    const data = await readFile("./user/user.json", "utf8");
    const arrData = JSON.parse(data);
    const index = arrData.findIndex((item) => item.username == user.username);
    if (index !== -1) {
      res.status(200).json({ used: true });
      return;
    }
    arrData.push(user);
    await writeFile("./user/user.json", JSON.stringify(arrData, null, 2));
    res.status(201).json({ msg: "Register success" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(8080, () => console.log("server running"));
