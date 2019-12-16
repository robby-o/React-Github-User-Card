import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default UserList;
