import styled from "styled-components";
import { Link } from 'react-router-dom';

export const div = styled.div``;

export const menuHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 150px;
  color: #fff;
  top: 0;
  background: url(https://3.bp.blogspot.com/-dXxdKFkVrdw/VKLa3bMmv2I/AAAAAAAAVjI/Lp0vf22tynE/s1600/sandiegodusk.png) no-repeat center center/cover;
  position: relative;
  text-align: center;
`;

menuHeader.Title = styled.h1`
  font-size: var(--font-size-medium);
  font-weight: bold;
`;

export const ButtonMenu = styled.span`
  display: flex;
  align-items: center;

  width: 40px;
  height: 40px;

  cursor: pointer;

  z-index: 1000;

  div {
    position: relative;

    display: block;

    background-color: var(--color-white);
    width: 100%;
    height: 4px;

    top: -4px;

    &::before,
    &::after {
      width: 100%;
      height: 4px;
    }

    &::before {
      content: "";
      position: absolute;

      background-color: var(--color-error);
      top: -10px;
      left: 0;
    }

    &::after {
      content: "";
      position: absolute;

      background: var(--color-error);
      top: 10px;
      left: 0;
    }
  }
`;

export const ContainerMenuOffCanvas = styled.div`
  position: fixed;

  display: block;
  text-align: center;
  height: 100vh;
  width: 17.5rem;

  background-color: #363636;
  color: #fcfcfc;

  right: 0;
  top: 0;

  transform: translateX(200%);
  transition: all 235ms cubic-bezier(0.95, 0.05, 0.795, 0.035);

  .menu-section.active > & {
    transform: none;
    transition: all 205ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const Menu = styled.ul`
  display: block;  
  text-align: start;

`;
Menu.Item = styled.li`
  display: block;
  padding: 16px 8px;
 

  border-bottom: 1px solid #f5f5f5;

  &:first-child {
    margin-top: 10px;
  } 
`;

Menu.Link = styled(Link)`

  &:hover {
    font-weight: bold;
    color: var(--color-gray-medium);
  }
`;


export const ButtonClose = styled.button`
  width: 45px;
  height: 45px;

  background: #aaa;
  border: 0;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: -15px;
  outline: none;
  right: 2em;
  z-index: 99999;

  
`;



