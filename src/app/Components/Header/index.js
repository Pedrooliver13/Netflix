import React from "react";

import * as Styled from "./styles.js";
import { Link } from "react-router-dom";

// components;
import Logo from "../Logo";
import MenuToggle from '../MenuToggle';

// para amanha refazer todo o site do meu jeito;
// não precisa seguir tudo na risca do cara;

function Header() {
  return (
    <Styled.Menu>
      <Styled.Wrapper>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div class="menu-section">
          <MenuToggle>
          </MenuToggle>
        </div>
      </Styled.Wrapper>
    </Styled.Menu>
  );
}

export default Header;
// {/* <Button as={Link} to="/cadastrar/video">
// Novo Video
// </Button> */}