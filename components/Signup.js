import React, { useState } from "react";
import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import styles from "./signup.module.css";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    number: undefined,
    email: "",
    password: "",
    cpassword: "",
  });
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const resp = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const message = await resp.json();
    setLoading(false);
    setMessage(message.message);
  };
  return (
    <div className={`${styles.container} container mt-5 `}>
      <div className="card p-3">
        <form action="">
          <Input
            placeholder="eg.Neeraj Choubisa"
            name="name"
            className="mt-2"
            value={formData.name}
            onChange={onChangeHandler}
          />
          <InputGroup className="mt-2">
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              placeholder="Phone Number"
              name="number"
              value={formData.number}
              onChange={onChangeHandler}
            />
          </InputGroup>
          <Input
            type="password"
            placeholder="Password ***"
            name="password"
            className="mt-2"
            value={formData.password}
            onChange={onChangeHandler}
          />
          <Input
            type="password"
            placeholder="Confirm Password ***"
            name="cpassword"
            className="mt-2"
            value={formData.cpassword}
            onChange={onChangeHandler}
          />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            className="mt-2"
            value={formData.email}
            onChange={onChangeHandler}
          />
          <Button
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onSubmit}
            isLoading={loading}
            spinnerPlacement="end"
            className="mt-3"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
