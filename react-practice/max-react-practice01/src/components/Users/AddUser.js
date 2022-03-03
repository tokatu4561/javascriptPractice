import React, { useState, useRef } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enterdUserName, setEnteredUserName] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enterdName = nameInputRef.current.value;
    const enterdUserAge = ageInputRef.current.value;

    if (enterdName.trim().length === 0 || enterdUserAge.trim().length === 0) {
      setError({
        title: "入力が無効です",
        message: "何か入力してください",
      });
      return;
    }
    if (+enterdUserAge < 1) {
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

  //   const usernameChangedHandler = (event) => {
  //     setEnteredUserName(event.target.value);
  //   };
  //   const ageChangedHandler = (event) => {
  //     setEnteredAge(event.target.value);
  //   };
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
            ref={nameInputRef}
            value={enterdUserName}
            onChange={usernameChangedHandler}
          ></input>
          <label htmlFor="age">Age </label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={ageChangedHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">追加</Button>
        </form>
      </Card>
    </>
  );
};
