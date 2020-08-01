import styled from 'styled-components';
import container from '../../../tools/container';

export const FooterBase = styled.footer`
  ${container};
  
  text-align: center;
  margin-top: 32px;
  padding: 16px;
  color: var(--color-gray-medium);

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
