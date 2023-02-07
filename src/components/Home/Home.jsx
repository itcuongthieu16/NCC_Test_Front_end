import React from "react";
import "./home.css";
import logoImg from "../../assets/Image/logo.png";
import apiBoxHome from "../../apis/apiBoxHome";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="desciption">
        <h4>Lorem ipsum dolor sit asmet?</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>

      <div className="list-content">
        {apiBoxHome.map((item) => (
          <div className="list-content__item" key={item.id}>
            <h3>{item.content}</h3>
            <div className="main__content">
              <img src={item.logo} alt="icon" />
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
