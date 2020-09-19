import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Cecile"
        message="bonsoir"
        timestamp="now"
        profilePic="https://p16-sg.tiktokcdn.com/img/tos-maliva-avt-0068/52b863e65234e2de98fc73db7bcfa006~c5_1080x1080.jpeg"
      />
      <Chat
        name="Kim"
        message="t'es très joli, tu sens très bon"
        timestamp="2 hour ago"
        profilePic="https://static1.purepeople.com/articles/4/33/02/24/@/4685978-kim-kardashian-au-photocall-de-la-21e-ed-950x0-2.jpg"
      />
      <Chat
        name="Mia"
        message="ok, tournage à 20h ce soir, arrives droit"
        timestamp="2 hour ago"
        profilePic="https://i2.wp.com/www.starmag.com/wp-content/uploads/2018/06/miakhalifa-326c25fd0ed4921505665ba723ce5804-1200x600.jpg?resize=1200%2C675&ssl=1"
      />
      <Chat
        name="Shakira"
        message="j'suis bien chaude de faire un wakawaka avec toi, beaugoss"
        timestamp="yesterday"
        profilePic="https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_22_juin_2016.2Fshakira.2F3594042-1-fre-FR.2Fshakira.2Ejpg/480x480/quality/80/shakira-en-bicyclette-sur-l-ile-de-re.jpg"
      />

      <Chat
        name="Mark"
        message="pk tu repond pas"
        timestamp="2 days ago"
        profilePic="https://tra.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FBIN.2F2020.2F03.2F04.2Ffea8624c-1118-45f9-9b95-9a5609fe6f17.2Ejpeg/960x722/quality/80/thumbnail.jpeg"
      />
      <Chat
        name="Jeff"
        message="je t'attends impatiemment"
        timestamp="1 week ago"
        profilePic="https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale"
      />
    </div>
  );
}

export default Chats;
