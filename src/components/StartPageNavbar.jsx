import React from 'react'
import { Pages } from '../pages/Pages';
import { NavLink } from 'react-router-dom';
import { FormUl, FormLi, NavigationBar } from "./StylingComponents";

export default function StartPageNavbar() {
  return (
    <NavigationBar>
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
  </NavigationBar>
  )
}
