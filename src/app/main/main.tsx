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
    }
  const enter = () => {
      // audio2.play()
    }  

  const settings = {
    speed: 500,
    dots:false,
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
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  const Button = styled.button<{ $url?: string; }>`

  display:flex;
  margin-left: 0.6rem;
  width: 6.7rem;
  height: 6.7rem;
  background-size: cover;
  background-image: url("${props => (process.env.PUBLIC_URL || "")+props.$url }");
  border-radius: 14px;
  background-color:transparent;
  transition: 0.2s;
  border: none;
  outline: 0px auto -webkit-focus-ring-color;
  outline-offset: 0px;

p{
  visibility: hidden;
  
}
img{
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

:hover p{
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

const Main = styled.div<{ $url?: string; }>`
  max-width: 100vw;
  overflow-x: hidden;
  background-size: cover;
  background-image: url("${props => (process.env.PUBLIC_URL || "")+props.$url }");
  border:none;
  height:100vh;
    transition: background-image 0.2s;
    will-change: background-image;
`;

  return (
    <Main $url={hover==""?"/back.png":hover} >
      <div style={{height:"auto"}}>
      <div className={styles.header}>
        <div className={styles.headerCategory}>
          <div className={selected!=="Games"? styles.unselected:styles.selected} onClick={()=>{setSelected("Games")}}>Games</div>
          <div className={selected!=="Media"? styles.unselected:styles.selected} onClick={()=>{setSelected("Media")}}>Media</div>
        </div>

        <div className={styles.headerSettings}>
          <div className={styles.options}>
            <div>Search</div>
            <div>Config</div>
            <div>Prof</div>
          </div>
          <div className={styles.hour}>{time}</div>
        </div>
      </div>

      <div className={styles.list}>
      <Slider  className={styles.slider} {...settings} >
      <a href="https://moveitt-kirito2911.vercel.app/" >
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/moveit.png"} autoFocus>
                <p>Move It</p> 
            </Button>
            </div>
            </a>
            <a href="https://kirito2911.github.io/celol/">
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/celol.png"}>
                <p>Celol</p> 
            </Button>
            </div>
            </a>
            <a href="https://kiriflix.vercel.app/">
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/kiriflix.png"}>
                <p>Kiriflix</p> 
            </Button>
            </div >
            </a>
            <a href="https://kirito2911.github.io/pokedex/">
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/pokedex.png"}>
                <p>Pokédex</p> 
            </Button>
            </div>
            </a>
            <a href="https://podcastr-flame.vercel.app/">
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/podcastr.png"}>
                <p>Podcastr</p> 
            </Button>
            </div>
            </a>
            <a href="https://letmeask2911.web.app/">
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/let.png"}>
                <p>Letmeask</p> 
            </Button>
            </div>
            </a>
            <a href="https://drive.google.com/file/d/1Vul-zjrU8AbQLjMSdnpCJg_x5YcA5IvD/view?usp=sharing">
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/cv.png"}>
                <p>Currículo</p> 
            </Button>
            </div>
            </a>
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={()=>{setHover("/wallff7.jpg")}} onClick={enter} onMouseLeave={()=>{setHover("")}} $url={"/final.png"} >
                <p>Final Fantasy 7 Remake</p> 
            </Button>
            </div>
            <div className={styles.divop}>
            <Button className={styles.option} onMouseEnter={start} onClick={enter} $url={"/gow.png"}>
                <p>God of War</p> 
            </Button>
            </div>
            </Slider>
      </div>
      </div>
    </Main>
  );
}
