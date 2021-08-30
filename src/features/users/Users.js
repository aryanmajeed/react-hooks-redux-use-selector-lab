import React from "react";
import {useSelector} from 'react-redux'
// add any needed imports here

function Users() {
  const users = useSelector(state => state.users)
  return (
    <div>
      <ul>
        Users!
        {users.map((user)=><p>{user}</p>)}
        {users.length}
      </ul>
    </div>
  );
}

export default Users;
