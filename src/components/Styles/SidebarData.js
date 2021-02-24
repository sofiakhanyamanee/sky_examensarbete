import React from 'react';
import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Feed',
    path: '/dashboard',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Members',
    path: '/members',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Letters',
    path: '/letters',
    icon: <IoIcons.IoNewspaperOutline />,
    cName: 'nav-text'
  },
];