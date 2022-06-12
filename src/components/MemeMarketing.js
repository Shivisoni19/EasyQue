import React from "react";
import speaker from "../img/speacker.png";
import sticker1 from "../img/memestc.png";
import MemeMarket from "../img/Meme Marketing.png";

const MemeMarketing = () => {
  return (
    <div className="row py-5">
      <div className="col-lg-6 col-sm-12 ">
      
          <img className="memeimg" src={MemeMarket} alt="" />
      
      </div>
      <div className="col-lg-6 col-sm-12 ">
        <div>
          <h1
            className="my-2 White "
            style={{ fontFamily: "Playfair_Extrabold", textAlign: "right" }}
          >
            <span style={{ color: "#ffc100" }}>Meme</span> Marketing
          </h1>
          <p className="parameme">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis nunc
            congue quam sociis libero eu. Dui commodo Id nibh odio arcu lectus.
            Eget auctor suspendisse sem vel vestibulum. Ipsum <br />
            vulputate diam duis tincidunt. Mauris eu blandit viverra vitae sit
            velit sit ut aliquet. Sit suspendisse. Id nibh odio arcu lectus.
            Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate diam
            duis tincidunt.
          </p>
          <img className="speak_icon" src={speaker} alt="" />
          <h2 className="head2meme" style={{ color: "white" }}>
            <span className="head2memesec" style={{ color: "#62C9FA" }}>
              Meme
            </span>{" "}
            /’meme/
          </h2>
        </div>
        <p className="parameme2">
          Also known as <span className="memebtn">meem</span>{" "}
          <span className="memebtn">meem</span>
          <span className="memebtn">
            <img src={sticker1} alt="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default MemeMarketing;
