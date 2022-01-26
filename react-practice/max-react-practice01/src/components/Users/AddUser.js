import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enterdUserName, setEnteredUserName] = useState("");
  const [enterdAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterdUserName.trim().length === 0 || enterdAge.trim().length === 0) {
      return;
    }
    if (+enterdAge < 1) return;

    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enterdUserName}
          onChange={usernameChangedHandler}
        ></input>
        <label htmlFor="username">Age </label>
        <input
          id="age"
          type="number"
          value={enterdAge}
          onChange={ageChangedHandler}
        ></input>
        <Button type="submit">追加</Button>
      </form>
    </Card>
  );
};
