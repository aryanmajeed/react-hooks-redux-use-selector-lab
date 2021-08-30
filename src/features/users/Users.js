import React from "react";
import {useSelector} from 'react-redux'
// add any needed imports here

function Users() {
  const users = useSelector(state => state.users)
  console.log(users)
  return (
    <div>
      <ul>
        Users!
        {users.map((user)=><p key={user}>{user.username}-{user.hometown}</p>)}
      </ul>
      <div>Total Users: {" "+users.length}</div>

    </div>
  );
}

export default Users;
