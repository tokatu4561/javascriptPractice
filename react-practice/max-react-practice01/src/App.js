import React from "react";

import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UserList users={[]}></UserList>
    </div>
  );
}

export default App;
