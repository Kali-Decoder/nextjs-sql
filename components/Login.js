import React from "react";

const Login = () => {
  return (
    <>
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
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
