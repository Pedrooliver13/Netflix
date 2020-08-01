import styled from "styled-components";
import container from "../../../tools/container";

export const ContentAreaContainer = styled.section`
  ${container};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  color: var(--color-white);

  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  @media(max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.img`
  height: 80px;
  object-fit: contain;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
  };
`;

ContentAreaContainer.Description = styled.p`
  margin-top: 25px;
  padding-right: 30px;

  line-height: 1.5em;

  @media (max-width: 800px) {
    display: none;
  }
`;


export const BannerMainContainer = styled.section`
  position: relative;
  height: 100vh;

  background: url("https://images4.alphacoders.com/840/840731.jpg") center
    center/ cover;

  &:after,
  &:before {
    content: "";
    position: absolute;
    display: block;
    margin: 0 auto;
    left: 0;
    right: 0;

    height: 20%;
  }

  &:before {
    background: var(--color-black-opacity);
    top: 0;
    height: 100vh;
  }
  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;
