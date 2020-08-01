import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  position: relative;
  display: flex;

  width: 220px;
  min-height: 110px;
  
  padding: 8px;

  overflow: hidden;
  cursor: pointer;

  color: white;
  border-radius: 1.5px;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  transition:all  200ms ease-in-out 80ms;


  &:not(:first-child) {
    margin-left: 20px;
  }
`;
