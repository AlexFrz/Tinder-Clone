import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mia",
      image:
        "https://i2.wp.com/www.starmag.com/wp-content/uploads/2018/06/miakhalifa-326c25fd0ed4921505665ba723ce5804-1200x600.jpg?resize=1200%2C675&ssl=1",
      message:
        "écoutes, j'ai craqué sur toi, faut qu'on fasse un plan séquence dans lequel tu me détruis",
    },
    {
      message: "Yo, vasy, dis moi une heure, un lieu, une date, je viens armé",
    },
    {
      name: "Mia",
      image:
        "https://i2.wp.com/www.starmag.com/wp-content/uploads/2018/06/miakhalifa-326c25fd0ed4921505665ba723ce5804-1200x600.jpg?resize=1200%2C675&ssl=1",
      message: "ok, tournage à 20h ce soir, arrives droit",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MIA ON 10/09/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
