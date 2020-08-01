import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    background-color: rgba(0, 0, 0, 0.4);

    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;

    width: 30px;
    height: 130px;

    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;

    &::before {
      content: "❮";
    }
  }
  .slick-next {
    top: 0;
    right: 0px;

    &::before {
      content: "❯";
    }
  }
`;

export const SliderItem = styled.li`
  position: relative;
  margin-right: 16px;



  &:hover > a,
  &:focus > a {
    transform: translateX(2%) translateY(-2%);
    box-shadow: -6px 6px 0 red;

    transition:all  150ms ease-in-out 80ms;

  }

  &::before,
  &::after {
    content: "";
    width: 8px;
    height: 5px;
    position: absolute;
    background-color: red;

    transition: all 150ms ease-in 80ms;

    transform: rotate(45deg) scale(0);
    z-index: -1;
  }

  &::before {
    top: 0px;
    left: 2px;
  }

  &::after {
    bottom: 0px;
    right: 12px;
  }

  &:hover::before,
  &:hover::after {

    width: 8px;
    height: 8px;
    transform: rotate(45deg) scale(1);

    transition: all 150ms ease-out 80ms;    
  }

  img {
    margin: 16px;
    width: 180px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
