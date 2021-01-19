import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {MenuContext} from '../context/navState';
import arrow from '../assets/svg/arrow.svg';
import '../assets/css/Links.css'

const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 200;
  display: block;
  width: 100%;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #19181A;
  transform: translateX(-100%);
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
          props.open &&
          css`
            transform: translateX(0);
          `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: center;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  //padding-left: 16%;
  // background-image: url(${arrow});
  //background-position: 88% 50%;
  //background-size: 36px;
  //background-repeat: no-repeat;
  //transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 70px;
  line-height: 120%;
  font-weight: 800;

  :hover {
    //background-position: 90% 50%;
    color: blue;
  }
`;

export const SideMenu = ({children}) => {
    const {isMenuOpen} = useContext(MenuContext);

    return <Menu open={isMenuOpen}><span>{children}</span></Menu>;
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <div className="links-wrapper">
           <a className="links-effect" href="/">Home</a>
           <a className="links-effect" href="/">About</a>
           <a className="links-effect" href="/">Works</a>
           <a className="links-effect" href="/">Contacts</a>
        </div>
    ),
};