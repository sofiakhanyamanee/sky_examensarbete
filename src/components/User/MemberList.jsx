import React, { useState, useEffect, useContext } from 'react'
import useAuth from '../../store/actions/auth'
import { database } from '../../firebase'
import { Context } from '../../store/Store'
// import { Box } from ".././StylingComponents";
import {  WrapperMembersComp, Heading, FlexRow, MemberListBox } from "../Styles/UserMemberView";
import UserAvatar from 'react-user-avatar'

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
    <WrapperMembersComp>
      <Heading>Medlemmar</Heading>
      {console.log(members)}
      {members && members.map((member, index) => {
         return (
           <MemberListBox key={index}>
             <FlexRow>
             <UserAvatar className="avatar-initials-memberlist" size="35" name={member.firstname+" "+member.lastname} maxInitials={2} color={member.avatarColor}/>
              <p>{member.firstname} {member.lastname}</p>
              </FlexRow>
           </MemberListBox>
        )}
      )}
    </WrapperMembersComp>
  )
}
