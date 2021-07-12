import React, { useState } from "react";

const Contact = () => {
  const [val, setVal] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
    console.log(val);
  };

  const validateInfo = (valuu) => {
    let err = {};
    if (!valuu.username.trim()) {
      err.username = "tpe a user name";
      // return err;
    }

    if (!valuu.email) {
      err.email = "type a user email";
      // return err;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(valuu.email)
    ) {
      err.email = "type a user good email";
    }

    if (!valuu.password) {
      err.password = "type a user password";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateInfo(val));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                onChange={handleChange}
                value={val.username}
              />
              {error.username && (
                <div className={`text-danger form-text`}>{error.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
                value={val.email}
              />
              {error.email && (
                <div className={`text-danger form-text`}>{error.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
                value={val.password}
              />
              {error.password && (
                <div className={`text-danger form-text`}>{error.password}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
