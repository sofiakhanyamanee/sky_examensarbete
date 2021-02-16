import React, { useContext, useEffect, useState } from "react";
import { database } from '../../firebase'
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import MemberList from "../Admin/MemberList";
import Members from "../Admin/Members";
import { WrapperDashboard, SignOutBtn} from "../StylingComponents";
  
  export default function AdminDashboard() {
  const [state] = useContext(Context);
  const { signout, getAllUserFromDB  } = useAuth();
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    getAllUserFromDB()
    .then(users => {
      setUserList(users);      
    });
  }, [])


  useEffect(() => {

    const unsubscribe = database.collection('new_users')
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
       {state.currentUser.role === 'admin' ? (<h1>Adminsida</h1>) : (<h1>Ingen träff</h1>)}
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
