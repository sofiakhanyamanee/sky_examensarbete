import React, { useState, useEffect, useContext } from 'react'
import useAuth from '../../store/actions/auth'
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import { Box } from ".././StylingComponents";

export default function MemberList() {
  const { getAllUserFromDB_users } = useAuth();
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

    const unsubscribe = database.collection('users') //raden nedan
    .where("brf", "==", currentBrf)
    .onSnapshot((snap) => {
      const data = snap.docs.map(doc => doc.data());
      setMemberList(data);
    });

    return () => unsubscribe();
  }, [])

  return (
    <Box>
      <h4>Medlemmar</h4>
      {members && members.map((member, index) => {
         return (
           <div key={index}>
             <p>{member.firstname} {member.lastname}</p>
           </div>
        )}
      )}
    </Box>
  )
}
