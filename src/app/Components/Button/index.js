import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  background: var(--color-black);
  color: var(--color-white);
  border-radius: 3.5px;
  border: 2px solid var(--color-white);

  cursor: pointer;
  padding: 8px 16px;


  &:hover {
    transform: translateY(3%);
    box-shadow: 2px 2px 2px var(--color-white);

    animation: transform 500ms linear;
  }

  @media (max-width: 800px) {
    display: none;
  }

`;

export default Button;

