import React, { useEffect, useState, useContext} from 'react'
import useAuth from '../../store/actions/auth'
import { WrapperNewMembersComp, NewMembersBox, AcceptBtn, RejectBtn } from "../Styles/AdminMemberView";
import { database } from '../../firebase'
import { Context } from '../../store/Store';

export default function NewMembers() {
  const [userList, setUserList] = useState([]);
  const { acceptUserToDB, removeNewUser, getAllNewUserFromDB_users } = useAuth();
  const [state] = useContext(Context);
  
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
          setUserList(data);
    });

    return () => unsubscribe();
  }, [])

  

  function handleAccept(user) {
    acceptUserToDB(user.id);
  }

  function handleReject(user) {
    removeNewUser(user);
  }

  
  return (
    <WrapperNewMembersComp>
        {userList && userList.map((user, index) => {
         return (
          <NewMembersBox key={index}>
            <p>{user.firstname} {user.lastname}</p>    
            <div>
              <AcceptBtn onClick={() => handleAccept(user)}>Godkänn</AcceptBtn>
              <RejectBtn onClick={() => handleReject(user)}>Neka</RejectBtn>
            </div>    
          
        </NewMembersBox>
        )})}
    </WrapperNewMembersComp>
  )
}
