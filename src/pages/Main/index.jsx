// import Header from "../../componets/Header/index";
import { Carousel } from "react-bootstrap";
import React from "react";
import missao from "../../assets/misao.png";
import visao from "../../assets/visao.png";
import valor from "../../assets/valor.png";
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import "./styles.css";
const Main = () => {
  return (
    <>
      <br />
      <img src={banner} alt="banner" className="banner" />
      <div>
        <p className="texto">
          Após a pandemia de COVID-19 o uso de casas com internet aumentou em
          mais de 70% pois todos os estudantes foram forçados a ter aula por
          EAD, sendo assim o aplicativo book prime tem a missão de estimular o
          trabalho em equipe com a ferramenta de grupos de estudo e o
          compartilhamento de documentos e fotos pelo chat de bate papo
          vinculando o conteúdo escolar com a tecnologia.
        </p>
      </div>
      <div>
        <Carousel className="carousel">
          <Carousel.Item inteval={1500}>
            <img src={banner1} alt="EM TESTE" className="imagem" />
          </Carousel.Item>
          <Carousel.Item inteval={1500}>
            <img src={banner2} alt="EM TESTE" className="imagem" />
          </Carousel.Item>
          <Carousel.Item inteval={1500}>
            <img src={banner3} alt="EM TESTE" className="imagem" />
          </Carousel.Item>
        </Carousel>
        <p className="texto">
          A pandemia do covid-19 trouxe reflexos negativos em diversos setores
          inclusive na educação deixando impactos preocupantes com a quantidade
          de jovens que abandonaram a escola, no ano de 2020 os estudantes
          brasileiros com idades entre 6 e 34 anos abandonaram os estudos. A
          seguir pode se ver os dados que provam o abandono escolar.{" "}
        </p>
        <p className="texto">
          • Ensino superior com taxa de 16,3% de abandono ao ensino superior;
        </p>
        <p className="texto">
          •Ensino médio com taxa de 10,8% de abandono ao ensino médio;
        </p>
        <p className="texto">
          • Ensino fundamental com taxa de 4,6% de abandono ao ensino
          fundamental;
        </p>
        <p className="texto">
          Durante o período pandêmico a maioria das escolas recorreram as aulas
          online, deixando diversas crianças sem aulas por conta da falta de
          acesso à internet e palataformas que auxiliassem os aulonos no
          desenvolvimento das atividades. Desse modo surgiu a ideia facilitar
          compartilhamento de informação entre estudante estando aberto ao
          público de maneira geral.
        </p>
      </div>
      <br />
      <br />
      <div className="TBox">
        <img src={missao} alt="" className="box-in" />
        <img src={visao} alt="" className="box-in" />
        <img src={valor} alt="" className="box-in" />
      </div>
      <br />
      <br />
    </>
  );
};
export default Main;
