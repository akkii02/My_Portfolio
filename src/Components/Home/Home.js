import React from "react";
import classes from "./Home.module.css";
import akimg from "../assets/profile-pic (2).png"
const Home = () => {
      return (
            <div className={classes.main}>
                  <div className={classes.intro}>
                        <div className={classes.heading}>
                        <h1 data-text=">Hello, I'm Akshay,">Hello, I'm Akshay,</h1>
                        <h2>frontend developer😎</h2>
                        </div>
                        <p className={classes.p}>
                              Lorem Ipsum is simply dummy text of the printing and \n
                               typesetting industry. 
                        </p>
                        <div className={classes.btn}>
                              <button className={classes.mybtn}>Download CV</button>
                        </div>
                  </div>
                  <div className={classes.photo}>
                        <div className={classes.subphoto}>
                                    <img src={akimg} className={classes.img}  />
                        </div>   
                  </div>
            </div>
      );
};

export default Home;