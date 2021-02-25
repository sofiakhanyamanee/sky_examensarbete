import React, { useState, useContext } from 'react';
import * as GoIcons from 'react-icons/go';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components'
import { Context } from '../../store/Store'
import useAuth from "../../store/actions/auth";
import * as AiIcons from 'react-icons/ai';
import { SignOutBtn } from "../StylingComponents";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [state] = useContext(Context);
  const { signout } = useAuth();

  const showSidebar = () => setSidebar(!sidebar);

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
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FiIcons.FiArrowLeft />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <SignOutBtn onClick={handleLogOut}><AiIcons.AiOutlineLogout/></SignOutBtn>
          <CurrentUser>{state.currentUser.name}</CurrentUser>
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