import React from "react";
import dadosIniciais from "../../../data/dados_iniciais.json";

// import { Container } from './styles';

import Header from "../../Components/Header";
import BannerMain from "../../Components/BannerMain";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";


function Home() {
  return (
    <>{/* <- assim ele não adiciona tag nenhuma; */}
      <Header />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Footer />
    </>
  );
}

export default Home;
