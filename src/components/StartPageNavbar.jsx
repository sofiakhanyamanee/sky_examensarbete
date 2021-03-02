import React from 'react'
import { Pages } from '../pages/Pages';
import { NavLink } from 'react-router-dom';
import { FormUl, FormLi, Logo,  NavigationBar } from "./StylingComponents";
import * as MdIcons from 'react-icons/md';

// SiDelicious
export default function StartPageNavbar() {
  return (
    <NavigationBar>
      <Logo className="startpage-nav-text-logo">
        <NavLink to="/">
          <span><MdIcons.MdPieChart/></span>
        </NavLink>
      </Logo>
    <FormUl>
      {Pages.map((item, index) => {
        return (
          <FormLi key={index} className={item.cName}>
            <NavLink to={item.path} activeClassName="startpage-active-link">
              <span>{item.title}</span>
            </NavLink>
          </FormLi>
        );
      })}
    </FormUl>
    <Logo/>
  </NavigationBar>
  )
}
