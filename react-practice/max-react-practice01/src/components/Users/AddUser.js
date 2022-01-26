import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enterdUserName, setEnteredUserName] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterdUserName.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "入力が無効です",
        message: "何か入力してください",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "入力が無効です",
        message: "0より大きい年齢を入力してください",
      });
      return;
    }

    props.onAddUser(enterdUserName, enterdAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterdUserName}
            onChange={usernameChangedHandler}
          ></input>
          <label htmlFor="age">Age </label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={ageChangedHandler}
          ></input>
          <Button type="submit">追加</Button>
        </form>
      </Card>
    </>
  );
};
