import React, { useState, useContext } from 'react';
import * as GoIcons from 'react-icons/go';
import * as BsIcons from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components'
import { Context } from '../../store/Store'
import useAuth from "../../store/actions/auth";
import * as HiIcons from 'react-icons/hi';
import * as RiIcons from 'react-icons/ri'
import { SignOutBtn } from "../StylingComponents";
import UserAvatar from 'react-user-avatar'

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [state] = useContext(Context);
  const { signout } = useAuth();
  // const username = state.currentUser.firstname + state.currentUser.firstname

  const showSidebar = () => setSidebar(!sidebar);

  // if(sidebar === false){
  //   console.log("stänger")
  // }

  function handleLogOut() {
    signout();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#555b6e' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            {/* <GoIcons.GoThreeBars onClick={showSidebar} /> */}
            <HiIcons.HiOutlineMenuAlt2 onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle' onClick={showSidebar}>
              <Link to='#' className='menu-bars'>
                <BsIcons.BsArrowLeft />
              </Link>
            </li>
            <li className="nav-text nav-text-brf">
            <CurrentBrf>
                <p className="currentBrf"> <RiIcons.RiBuilding2Line className="currentBrf-icon" style={{color: '#8dc2bd'}}/> {state.currentUser.brf}</p>
              </CurrentBrf>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path} activeClassName="active-link">
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {state.currentUser.role === 'admin' ? 
          <CurrentUser>
            <UserAvatar className="avatar-initials" size="48" name={state.currentUser.firstname+" "+state.currentUser.lastname} maxInitials={2} color={state.currentUser.avatarColor}/>
           <FlexBoxColumn>
             {state.currentUser.firstname} {state.currentUser.lastname} ({state.currentUser.role})
             <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
             </FlexBoxColumn> 
            </CurrentUser>
          :
          <CurrentUser>
            <UserAvatar className="avatar-initials" size="48" name={state.currentUser.firstname+" "+state.currentUser.lastname} maxInitials={2} color={state.currentUser.avatarColor}/>
           <FlexBoxColumn>
             {state.currentUser.firstname} {state.currentUser.lastname}
             <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
             </FlexBoxColumn> 
            </CurrentUser>
        }
        </nav>
      </IconContext.Provider>
    </>
  );
}

export const CurrentUser = styled.div`
position: absolute;
bottom: 2rem;
left: 0;
font-size: 12px;
width: 100%;
padding-left: 25px;
text-align: left;
display: flex;
align-items: center;
justify-content: space-between;
`
export const FlexBoxColumn = styled.div`
// background: teal;
width: 100%;
padding-left: 15px;
display: flex; 
flex-direction: column;
`

export const FlexBoxRow = styled.div`
// background: teal;
width: 100%;
display: flex; 
`

export const CurrentBrf = styled.div`
display: flex;
align-content: center;
 p {
   color: #8dc2bd;
 }
`

export default Navbar;