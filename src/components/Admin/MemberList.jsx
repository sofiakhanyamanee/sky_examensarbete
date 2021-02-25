import React, { useState, useEffect, useContext } from 'react'
import useAuth from '../../store/actions/auth'
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import { WrapperMembersComp, Box, DeleteBtn, MemberListBox } from "../Styles/AdminMemberView";

export default function MemberList() {
  const { getAllUserFromDB_users, removeUser } = useAuth();
  const [members, setMemberList] = useState([]);
  const [state] = useContext(Context);
  const currentBrf = state.currentUser.brf;
  
  useEffect(() => {
    getAllUserFromDB_users(currentBrf)
    .then(users => {
      setMemberList(users);    
    });
  }, [])
  
  
  useEffect(() => {
    const unsubscribe = database.collection('users')
    .where("brf", "==", currentBrf)
    .onSnapshot((snap) => {
      const data = snap.docs.map(doc => doc.data());
      setMemberList(data);
    });
    
    return () => unsubscribe();
  }, [])
  
  
  function handleRemove(member) {
    removeUser(member);
  }


  return (
    <WrapperMembersComp>
      <hr/>
    <Box>
      {members && members.map((member, index) => {
         return (
           <MemberListBox key={index}>
             <p>{member.name}</p>
             <DeleteBtn onClick={() => handleRemove(member)}>Ta bort</DeleteBtn>
           </MemberListBox>
        )}
      )}
    </Box>
    </WrapperMembersComp>
  )
}
