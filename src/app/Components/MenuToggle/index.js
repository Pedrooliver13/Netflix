import React from "react";
import * as Styled from "./styles";

import { MdClose } from "react-icons/md";

function handleMenuToggle(e) {
  const menu = document.querySelector(".menu-section");

  menu.classList.toggle("active");
}

window.addEventListener("keydown", (e) => {
  const menu = document.querySelector(".menu-section");

  if (e.keyCode === 27) menu.classList.remove("active");
});

function MenuToggle() {
  return (
    <>
      <Styled.ButtonMenu
        id="Button-toggle"
        onClick={() => {
          handleMenuToggle(this);
        }}
      >
        <Styled.div></Styled.div>
      </Styled.ButtonMenu>

      <Styled.ContainerMenuOffCanvas id="menuOffCanvas">
        <Styled.menuHeader>
          <Styled.div>
            <Styled.menuHeader.Title>Seja Bem Vindo</Styled.menuHeader.Title>
          </Styled.div>

          <Styled.div>
            <Styled.ButtonClose
              className="close"
              onClick={() => {
                handleMenuToggle();
              }}
            >
              <MdClose size={24}></MdClose> {/* position absolute; */}
            </Styled.ButtonClose>
          </Styled.div>
        </Styled.menuHeader>

        <Styled.Menu>
          <Styled.Menu.Item>
            <Styled.Menu.Link>
              Home
            </Styled.Menu.Link>
          </Styled.Menu.Item>

          <Styled.Menu.Item>
            <Styled.Menu.Link to="/">
              Novo Título
            </Styled.Menu.Link>
          </Styled.Menu.Item>

          <Styled.Menu.Item>
            <Styled.Menu.Link to="/">
              Sobre Mim
            </Styled.Menu.Link>
          </Styled.Menu.Item>
        </Styled.Menu>
      </Styled.ContainerMenuOffCanvas>
    </>
  );
}

export default MenuToggle;
