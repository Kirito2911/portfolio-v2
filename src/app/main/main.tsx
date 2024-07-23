"use client";
import Image from "next/image";
import styles from "./main.module.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

export default function Main() {
  const [time, setTime] = useState("");
  const [selected, setSelected] = useState("Games");
  const [hover, setHover] = useState("");
  const [text, setText] = useState("");
  const [comment, setComment] = useState("");

  // eslint-disable-next-line
  const createClock = setInterval(function changeHour() {
    let now = new Date();
    let hour = "";
    if (now.getHours().toString().length === 1) {
      hour = "0" + now.getHours().toString();
    } else {
      hour = now.getHours().toString();
    }
    let minutes = "";
    if (now.getMinutes().toString().length === 1) {
      minutes = "0" + now.getMinutes().toString();
    } else {
      minutes = now.getMinutes().toString();
    }
    let time = hour + " : " + minutes;
    setTime(time);
  }, 1000);

  const start = () => {
    // audio.play()
  };
  const enter = () => {
    // audio2.play()
  };

  const settings = {
    speed: 500,
    dots: false,
    focusOnSelect: true,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Button = styled.button<{ $url?: string }>`
    display: flex;
    margin-left: 0.6rem;
    width: 6.7rem;
    height: 6.7rem;
    background-size: cover;
    background-image: url("${(props) =>
      (process.env.PUBLIC_URL || "") + props.$url}");
    border-radius: 14px;
    background-color: transparent;
    transition: 0.2s;
    border: none;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;

    p {
      visibility: hidden;
    }
    img {
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }
    :hover {
      margin-top: 0;
      opacity: 1;
      width: 10rem;
      height: 10rem;
      border-color: white;
      border-style: solid;
    }

    :hover p {
      position: relative;
      top: 7rem;
      left: 10.5rem;
      font-size: 2rem;
      visibility: visible;
      color: honeydew;
      transition: 0.3s;
      white-space: nowrap;
    }
  `;

  const Main = styled.div<{ $url?: string }>`
    max-width: 100vw;
    overflow-x: hidden;
    background-size: cover;
    background-image: url("${(props) =>
      (process.env.PUBLIC_URL || "") + props.$url}");
    border: none;
    height: 100vh;
    transition: background-image 0.5s;
    will-change: background-image;
  `;

  const IconButton = styled.div<{ $url?: string }>`
    width: 33px;
    height: 33px;
    cursor: pointer;
    background-size: cover;
    background-image: url("${(props) =>
      (process.env.PUBLIC_URL || "") + props.$url}");
    border-radius: 50px;
  `;

  const SocialButton = styled.a<{ $url?: string }>`
    width: 280px;
    height: 120px;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-image: url("${(props) =>
      (process.env.PUBLIC_URL || "") + props.$url}");

    .subtitle {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: end;
      padding: 6px 6px;
      font-size: 13px;
      background: linear-gradient(5deg, black 1%, transparent 50%);
      align-itens: center;
    }
  `;

  return (
    <Main $url={hover == "" ? "/1068673.gif" : hover}>
      <div className={styles.filter}></div>
      <div style={{ height: "auto" }}>
        <div className={styles.header}>
          <link
            rel="preload"
            href={(process.env.PUBLIC_URL || "") + "//1068673.gif"}
            as="image"
          ></link>
          <link
            rel="preload"
            href={(process.env.PUBLIC_URL || "") + "/moveback.png"}
            as="image"
          ></link>
          <link
            rel="preload"
            href={(process.env.PUBLIC_URL || "") + "/celolback.png"}
            as="image"
          ></link>
          <link
            rel="preload"
            href={(process.env.PUBLIC_URL || "") + "/cvback.png"}
            as="image"
          ></link>
          <link
            rel="preload"
            href={(process.env.PUBLIC_URL || "") + "/podback.png"}
            as="image"
          ></link>
          <link
            rel="preload"
            href={(process.env.PUBLIC_URL || "") + "/letback.png"}
            as="image"
          ></link>
          <div className={styles.headerCategory}>
            <div
              className={
                selected !== "Games" ? styles.unselected : styles.selected
              }
              onClick={() => {
                setSelected("Games");
              }}
            >
              Projetos
            </div>
            {/* <div
              className={
                selected !== "Media" ? styles.unselected : styles.selected
              }
              onClick={() => {
                setSelected("Media");
              }}
            >
              Media
            </div> */}
          </div>

          <div className={styles.headerSettings}>
            <div className={styles.options}>
              <IconButton $url={"search.png"}></IconButton>
              <IconButton $url={"settings.png"}></IconButton>
              <IconButton
                $url={"https://github.com/kirito2911.png"}
              ></IconButton>
            </div>
            <div className={styles.hour}>{time}</div>
          </div>
        </div>

        <div className={styles.list}>
          <Slider className={styles.slider} {...settings}>
            <a href="https://kirito2911.itch.io/azombie">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/azombiehover.png");
                    setComment("Descrição");
                    setText(
                      'Jogo desenvolvido no curso "Unity parte 1: criação de um jogo de sobrevivência à zumbis para Web" da alura usando a ferramenta Unity. Consiste em um jogo 3D de tiro na temática de Zumbi com visão Top-Down e mecânicas simples, visando exercitar os princípios básicos do desenvolvimento de jogos.',
                    );
                  }}
                  onClick={enter}
                  $url={"/azombie.png"}
                >
                  <p>Azombie</p>
                </Button>
              </div>
            </a>
            <a href="https://letmeask2911.web.app/">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/letback.png");
                    setComment("Descrição");
                    setText(
                      "Projeto Front-End desenvolvido na NLW#6 da Rocketseat, na trilha de ReactJS e consiste em uma aplicação para criação de salas de perguntas e respostas. ",
                    );
                  }}
                  onClick={enter}
                  $url={"/let.png"}
                >
                  <p>Letmeask</p>
                </Button>
              </div>
            </a>
            <a href="https://podcastr-flame.vercel.app/">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/podback.png");
                    setComment("Descrição");
                    setText(
                      "Projeto Front-End desenvolvido na NLW#5 da Rocketseat, na trilha de ReactJS e consiste em uma aplicação de reprodução de episódios em áudio de podcast.",
                    );
                  }}
                  onClick={enter}
                  $url={"/podcastr.png"}
                >
                  <p>Podcastr</p>
                </Button>
              </div>
            </a>
            <a href="https://kiriflix.vercel.app/">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/kiriflixback.png");
                    setComment("Descrição");
                    setText(
                      "Projeto Front-End desenvolvido durante a Imersão React da Alura e consiste em um clone da interface da Netflix, só que agregando links de videos do YouTube.",
                    );
                  }}
                  onClick={enter}
                  $url={"/kiriflix.png"}
                >
                  <p>Kiriflix</p>
                </Button>
              </div>
            </a>
            <a href="https://moveitt-kirito2911.vercel.app/">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/moveback.png");
                    setComment("Descrição");
                    setText(
                      "Projeto Front-End desenvolvido na NLW#4 da Rocketseat, na trilha de ReactJS e consiste em uma aplicação que tem como objetivo aplicar a técnica de Pomodoro para estimular a realização de exercícios físicos para pessoas que passam muito tempo na frente do computador.",
                    );
                  }}
                  onClick={enter}
                  $url={"/moveit.png"}
                  autoFocus
                >
                  <p>Move It</p>
                </Button>
              </div>
            </a>
            <a href="https://kirito2911.github.io/celol/">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/celolback.png");
                    setComment("Descrição");
                    setText(
                      "Projeto Front-End desenvolvido no meu ensino médio com o objetivo de promover e fornecer atualizações sobre um campeonato de E-sports realizado em 2019.",
                    );
                  }}
                  onClick={enter}
                  $url={"/celol.png"}
                >
                  <p>Celol</p>
                </Button>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1Vul-zjrU8AbQLjMSdnpCJg_x5YcA5IvD/view?usp=sharing">
              <div className={styles.divop}>
                <Button
                  className={styles.option}
                  onMouseLeave={() => {
                    setHover("");
                    setComment("");
                    setText("");
                  }}
                  onMouseEnter={() => {
                    setHover("/cvback.png");
                    setComment("Descrição");
                    setText("Meu currículo 100% atualizado. ");
                  }}
                  onClick={enter}
                  $url={"/cv.png"}
                >
                  <p>Currículo</p>
                </Button>
              </div>
            </a>
            {/* <div className={styles.divop}>
              <Button
                className={styles.option}
                onMouseLeave={() => {
                  setHover("");
                  setComment("");
                  setText("");
                }}
                onMouseEnter={() => {
                  setHover("/wallff7.jpg");
                }}
                onClick={enter}
                $url={"/final.png"}
              >
                <p>Final Fantasy 7 Remake</p>
              </Button>
            </div> */}
            {/* <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/gow.png"}>
                <p>God of War</p> 
            </Button>
            </div> */}
          </Slider>
        </div>
      </div>

      {hover == "" ? (
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.title}>Sobre mim</p>

            <h1 className={styles.text}>
              Meu nome é Jean, tenho 21 anos e atualmente estou cursando Análise
              e Desenvolvimento de Sistemas. No tempo livre eu gosto de assistir
              animes, jogar e ultimamente comecei um hobby novo que é cosplay.
              Tenho conhecimento nas linguagens C, Java, Python e Javascript.
              Também possuo conhecimento nos frameworks React, Angular, Flask e
              Django. Aqui estão alguns projetos que desevolvi ao longo dos anos
              durante meus estudos.
            </h1>
          </div>
          <div className={styles.social}>
            <SocialButton
              href="https://www.facebook.com/profile.php?id=100006825931566"
              $url={"/facebook.png"}
              target="_blank"
            >
              <div className="subtitle">Visitar meu Facebook</div>
            </SocialButton>
            <SocialButton
              href="https://github.com/Kirito2911"
              $url={"/github.png"}
              target="_blank"
            >
              {" "}
              <div className="subtitle">Visitar meu Github</div>
            </SocialButton>
            <SocialButton
              href="mailto:jean_carlo291@hotmail.com"
              $url={"/mail.png"}
              target="_blank"
            >
              <div className="subtitle">Enviar e-mail</div>
            </SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/jean-brito-930419195/"
              $url={"/linkedin.png"}
              target="_blank"
            >
              <div className="subtitle">Visitar meu Linkedin</div>
            </SocialButton>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.title}>{comment}</p>

            <h1 className={styles.text}>{text}</h1>
          </div>
          {/* <div className={styles.social}>
                <SocialButton href="https://www.facebook.com/profile.php?id=100006825931566" $url={"/facebook.png"} target="_blank"><div className="subtitle">Visitar meu Facebook</div></SocialButton>
                <SocialButton href="https://github.com/Kirito2911" $url={"/github.png"} target="_blank"> <div className="subtitle">Visitar meu Github</div></SocialButton>
                <SocialButton href="mailto:jean_carlo291@hotmail.com" $url={"/mail.png"} target="_blank"><div className="subtitle">Enviar e-mail</div></SocialButton>
                <SocialButton href="https://www.linkedin.com/in/jean-brito-930419195/" $url={"/linkedin.png"} target="_blank"><div className="subtitle">Visitar meu Linkedin</div></SocialButton>
        </div> */}
        </div>
      )}
    </Main>
  );
}
