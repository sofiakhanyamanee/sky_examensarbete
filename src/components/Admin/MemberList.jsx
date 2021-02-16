import React, { useState, useEffect } from 'react'
import useAuth from '../../store/actions/auth'
import { database } from '../../firebase'

export default function MemberList() {
  const { getAllUserFromDB_users } = useAuth();
  const [members, setMemberList] = useState([]);

  useEffect(() => {
    getAllUserFromDB_users()
    .then(users => {
      // console.log("users", users)
      setMemberList(users);    
    });
  }, [])
  

  useEffect(() => {

    const unsubscribe = database.collection('users')
    .onSnapshot((snap) => {
      const data = snap.docs.map(doc => doc.data());
      // console.log(data)
      setMemberList(data);
    });

    return () => unsubscribe();
  }, [])

  return (
    <div>
      <h1>Godkända boenden</h1>
      {members && members.map((member, index) => {
        // console.log("members", members)
         return (
           <div key={index}>
             <p>{member.name}</p>
           </div>
        )}
      )}
    </div>
  )
}
