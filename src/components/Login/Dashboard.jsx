import React, { useContext, useEffect, useState } from "react";
import { WrapperDashboard } from "../StylingComponents";
import { Container, Wrapper, Message, GoBackBtn } from '.././Styles/Loader';
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import AdminDashboard from './AdminDashboard'
import UserDashboard from "./UserDashboard";
import { DotLoader } from 'react-spinners'


export default function Dashboard() {
  const { signout, getUserFromDB } = useAuth();
  const [state] = useContext(Context);
  const [isVerified, setIsVerfied] = useState(false);

  function handleLogOut() {
    signout();
  }

  useEffect(() => {
    getUserFromDB(state.currentUser.id).then((user) => {
      if (user != null) {
        setIsVerfied(true)
      } else {
        console.log("notverfired")
        setIsVerfied(false)
      }
    })
  }, [])

  return (
    <WrapperDashboard>
      {state.currentUser.role === 'admin' ? <AdminDashboard/> : 
        (state.currentUser.role === 'user' && isVerified) ? <UserDashboard/> 
        : 
        <Wrapper>
           <DotLoader color="#CDE4E2"/>
           <Message>Innan du kan logga in behöver du vänta på att bli verifierad av admin</Message>
          <GoBackBtn onClick={handleLogOut}>Tillbaka till startsidan</GoBackBtn>
        </Wrapper>}
    </WrapperDashboard>
  );
}
