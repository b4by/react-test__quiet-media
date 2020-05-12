import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ previewReady }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <NavLink 
              className="sidebar__link" 
              to="/settings" 
              activeClassName="sidebar__link--active"
            >Параметры
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink 
              className={ previewReady ? 'sidebar__link' : 'sidebar__link sidebar__link--disabled'} 
              to="/preview" 
              activeClassName="sidebar__link--active"
            >Предпросмотр
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;