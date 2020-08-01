import styled from "styled-components";
import container from "../../../tools/container";

// scrool;
document.addEventListener("scroll", () => {
  let menuArea = document.querySelector("header");

  return window.pageYOffset > 0
    ? menuArea.classList.add("black")
    : menuArea.classList.remove("black");
});

export const Menu = styled.header`
  width: 100%;
  background-image: linear-gradient(
    to top,
    transparent,
    var(--color-black-opacity)
  );

  position: fixed;
  top: 0;
  z-index: 100;

  transition: all 200ms linear;

  
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 12px;

  ${container}

`;
