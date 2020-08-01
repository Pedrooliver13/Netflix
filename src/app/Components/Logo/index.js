import styled from 'styled-components';
import LogoImage from '../../assets/img/netflix.png';

//attrs --> para enviar atributos dentro da tag;
const Logo = styled.img.attrs({ src: LogoImage, alt: "Logo Netflix" })`
 height: 40px;
`;

export default Logo;