import React, { useState } from "react";
import Chats from "../Chats/Chats";
import { analyzeNextSteps } from "../HelperFunctions/AnalyzeNestSteps";
import "./Chatboats.scss";


interface ResponseBotObject {
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

//const Chatboats: React.FC = (localChats:any) => {

  export default function Chatboats(localChats:any) {

  const [userResponse, setUserResponse] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    purpose: "",
    message: "",
    sender: "bot"
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  const [contact, setContact] = useState<any>(localChats);

  // setting next step when there's response and option click
  const setNextStep = (response: string) => {
    setStep(prevState => prevState + 1);
    setSendUserResponse(response);
    let res = analyzeNextSteps(step, response);
    setBotResponse({ ...res, sender: "bot" });
    setUserResponse("");
  };

  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    let option = e.currentTarget.dataset.id;
    if (option) {
      setNextStep(option);
    }
  };

  // event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(userResponse);
  };

  return (
    <div className="container" style={{height:"100%"}}>
    <div className="chat-container">
      <h4 style={{backgroundColor:"rgb(31, 44, 51)" ,  height:"4.5rem" ,marginTop: "-1rem",marginLeft:"-0.2rem",
      color:"white" ,textAlign:"left",fontSize:"20px",paddingTop:"1rem"}}>{localChats.localChats[0].name} <p style={{fontSize:"15px"}}> Online</p></h4>
      <Chats
        userResponse={userResponse}
        botResponse={botResponse}
        sendUserResponse={sendUserResponse}
        optionClick={optionClick}
      />
      <form onSubmit={e => handleSubmit(e)} className="form-container">
        <input style={{width:"97%"}}
          onChange={e => handleInputChange(e)}
          value={userResponse}
        ></input>
        <button>
          <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </div>
    </div>
  );
};

//export default Chatboats;