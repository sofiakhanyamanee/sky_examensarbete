import React, { useState, useContext } from 'react';
import * as GoIcons from 'react-icons/go';
import * as FiIcons from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components'
import { Context } from '../../store/Store'
import useAuth from "../../store/actions/auth";
import * as AiIcons from 'react-icons/ai';
import { SignOutBtn } from "../StylingComponents";
import UserAvatar from 'react-user-avatar'

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [state] = useContext(Context);
  const { signout } = useAuth();

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
            <GoIcons.GoThreeBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle' onClick={showSidebar}>
              <Link to='#' className='menu-bars'>
                <FiIcons.FiArrowLeft />
              </Link>
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
          <p>{state.currentUser.avatarColor}</p>
          <SignOutBtn onClick={handleLogOut}><AiIcons.AiOutlineLogout/></SignOutBtn>
          {state.currentUser.role === 'admin' ? 
          <CurrentUser>{state.currentUser.name} ({state.currentUser.role})</CurrentUser>
          :
          <CurrentUser>{state.currentUser.name}</CurrentUser>
        }
        <UserAvatar className="avatar-initials" size="48" name={state.currentUser.name} color={state.currentUser.avatarColor}/>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export const CurrentUser = styled.p`
position: absolute;
bottom: 2rem;
left: 0;
font-size: 12px;
width: 250px;
padding-left: 45px;
text-align: left;
`

export default Navbar;