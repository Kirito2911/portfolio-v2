"use client";
import Image from "next/image";
import styles from "./main.module.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main() {
  const [time, setTime] = useState("");
  const [selected, setSelected] = useState("Games");
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
    infinite: true,
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

  return (
    <>
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
            <button className={styles.option} onMouseEnter={start} onClick={enter} autoFocus>
                <p>Move It</p> 
            </button>
            </div>
            </a>
            <a href="https://moveitt-kirito2911.vercel.app/" >
            <div className={styles.divop}>
            <button className={styles.option} onMouseEnter={start} onClick={enter} autoFocus>
                <p>Move It</p> 
            </button>
            </div>
            </a>
            <a href="https://moveitt-kirito2911.vercel.app/" >
            <div className={styles.divop}>
            <button className={styles.option} onMouseEnter={start} onClick={enter} autoFocus>
                <p>Move It</p> 
            </button>
            </div>
            </a>
            <a href="https://moveitt-kirito2911.vercel.app/" >
            <div className={styles.divop}>
            <button className={styles.option} onMouseEnter={start} onClick={enter} autoFocus>
                <p>Move It</p> 
            </button>
            </div>
            </a>
            <a href="https://moveitt-kirito2911.vercel.app/" >
            <div className={styles.divop}>
            <button className={styles.option} onMouseEnter={start} onClick={enter} autoFocus>
                <p>Move It</p> 
            </button>
            </div>
            </a>
            
            </Slider>
      </div>
    </>
  );
}
