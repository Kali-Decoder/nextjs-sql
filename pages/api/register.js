const bycrypt = require("bcrypt");
const pool = require("../../database/db");
const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, password, cpassword, email, number } = req.body;
    if (
      !name ||
      !email ||
      !number ||
      !password ||
      !cpassword ||
      password !== cpassword
    ) {
      res
        .status(400)
        .json({ isError: true, message: "Please Filled Iputs Properly" });
      return;
    }
    const newObject = new Object();

    const hashPassword = await bycrypt.hash(password, 10);
    newObject.name = name;
    newObject.email = email;
    newObject.password = hashPassword;
    newObject.number = number;
    console.log(newObject);

    // let guess = "nikku";
    // let isCorrect = await bycrypt.compare(guess, newObject.password);
    // console.log(isCorrect);

    res
      .status(200)
      .json({ isError: false, message: "User Added Successfully ..." });
  }
};

export default handler;
