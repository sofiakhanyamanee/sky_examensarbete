import React, { useState, useEffect, useContext } from 'react'
import useAuth from '../../store/actions/auth'
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import { Box, RejectBtn } from ".././StylingComponents";

export default function MemberList() {
  const { getAllUserFromDB_users, removeUser } = useAuth();
  const [members, setMemberList] = useState([]);
  const [state] = useContext(Context);
  

  const currentBrf = state.currentUser.brf;

  
  
  useEffect(() => {
    getAllUserFromDB_users(currentBrf)
    .then(users => {
      // console.log("users", users)
      setMemberList(users);    
    });
  }, [])
  
  
  useEffect(() => {
    
    const unsubscribe = database.collection('users') //raden nedan
    .where("brf", "==", currentBrf)
    .onSnapshot((snap) => {
      const data = snap.docs.map(doc => doc.data());
      // console.log("snapshot", data)
      setMemberList(data);
    });
    
    return () => unsubscribe();
  }, [])
  
  
  function handleReject(member) {
    console.log("remove", member.id)
    removeUser(member);
  }


  return (
    <Box>
      <h4>Medlemmar</h4>
      {members && members.map((member, index) => {
         return (
           <div key={index}>
             <p>{member.name}</p>
             <p>{member.id}</p>
             <RejectBtn onClick={() => handleReject(member)}>Ta bort medlem</RejectBtn>
           </div>
        )}
      )}
    </Box>
  )
}
