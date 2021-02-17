import React, { useContext, useEffect, useState } from "react";
import { database } from '../../firebase'
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import MemberList from "../Admin/MemberList";
import Members from "../Admin/Members";
import { WrapperDashboard, SignOutBtn, UserInfo, ProfilePicture, AdminHeading } from "../StylingComponents";
  
  export default function AdminDashboard() {
  const [state] = useContext(Context);
  const { signout, getAllNewUserFromDB_users  } = useAuth();
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    getAllNewUserFromDB_users(state.currentUser.brf)
    .then(users => {
      setUserList(users);      
    });
  }, [])


  useEffect(() => {

    const unsubscribe = database.collection('new_users')
    .where("brf", "==", state.currentUser.brf)
    .onSnapshot((snap) => {
      const data = snap.docs.map(doc => doc.data());
      console.log(data)
          setUserList(data);
    });

    return () => unsubscribe();
  }, [])

  
  function handleLogOut() {
    signout();
  }
  
  return (
    <WrapperDashboard>
      <UserInfo>
        <ProfilePicture></ProfilePicture>
        <h3>{state.currentUser.name}'s dashboard</h3>
      </UserInfo>
       {state.currentUser.role === 'admin' ? (<AdminHeading>Admin</AdminHeading>) : (<h1>Ingen träff</h1>)}
        {userList && userList.map((user, index) => {
         return (
          <div key={index}>
            <Members user={user} />
        </div>
        )})}
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
        <MemberList/>
    </WrapperDashboard>
  )
}
