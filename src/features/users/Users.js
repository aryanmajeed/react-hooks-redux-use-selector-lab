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
        {users.map((user,index)=><p key={index}>{user.username}-{user.hometown}</p>)}      <div>Total Users: {" "+users.length}</div>

      </ul>

    </div>
  );
}

export default Users;
