import React, { useEffect, useState, useContext} from 'react'
import useAuth from '../../store/actions/auth'
import { WrapperNewMembersComp, Heading,NewMembersBox, AcceptBtn, RejectBtn, FlexRow } from "../Styles/AdminMemberView";
import { database } from '../../firebase'
import { Context } from '../../store/Store';
import UserAvatar from 'react-user-avatar'

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
      {/* {console.log(userList)} */}
      {userList && <Heading>Nya medlemmar</Heading>}
        {userList && userList.map((user, index) => {
         return (
          <NewMembersBox key={index}>
            <FlexRow>              
           <UserAvatar className="avatar-initials-memberlist" size="35" name={user.firstname+" "+user.lastname} maxInitials={2} color={user.avatarColor}/>
            <p>{user.firstname} {user.lastname}</p>    
            </FlexRow>
            <div>
              <AcceptBtn onClick={() => handleAccept(user)}>Godkänn</AcceptBtn>
              <RejectBtn onClick={() => handleReject(user)}>Neka</RejectBtn>
            </div>    
          
        </NewMembersBox>
        )})}
    </WrapperNewMembersComp>
  )
}
