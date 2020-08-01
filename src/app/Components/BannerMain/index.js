import React from "react";
import VideoIframeResponsive from "./components/VideoIframeResponsive";

import * as Styled from "./styles.js";
import TitleMovie from "../../assets/img/homem-aranha.png";

function BannerMain() {
  return (
    <Styled.BannerMainContainer>
      <Styled.ContentAreaContainer>
        <Styled.ContentAreaContainer.Item>
          
          <div>
            <Styled.ContentAreaContainer.Title src={TitleMovie} />
          </div>

          <div>
            <Styled.ContentAreaContainer.Description>
              Peter Parker está tentando voltar à sua rotina de estudante, mas a chegada do vilão Abutre põe o herói à prova.
            </Styled.ContentAreaContainer.Description>
          </div>
        </Styled.ContentAreaContainer.Item>

        <Styled.ContentAreaContainer.Item>
          <VideoIframeResponsive></VideoIframeResponsive>
        </Styled.ContentAreaContainer.Item>
      </Styled.ContentAreaContainer>
    </Styled.BannerMainContainer>
  );
}

export default BannerMain;
