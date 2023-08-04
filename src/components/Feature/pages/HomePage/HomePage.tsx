import { Box } from "@mui/material";
import React, { useState } from "react";
//import RightPanel from "./RightPannel";
//import LeftPanel from "./LeftPannel";
//import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
import Chatboats from "../../../Chatboat/Chatboats";
 


export default function Homepage() {
  const localChats = [
    {
      name: "Balram",
      lastText: "Hey there testing whatsapp",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Dev Stack",
      lastText: "DevStack testing whatsapp",
      lastSeen: "8:51 PM",
      selected: false,
    },
    {
      name: "Test 1",
      lastText: "Testing okk how test test 123",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Test 2",
      lastText: "Testing Yes",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Test 3",
      lastText: "Ok Tested",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Test 4",
      lastText: "Yes",
      lastSeen: "8:51 PM",
      selected: false,
    },
    {
      name: "HDFC",
      lastText: "Take a lone",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Test 2",
      lastText: "Testing okk how test test 123",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Balram Rathore",
      lastText: "Hey there testing whatsapp",
      lastSeen: "4:21 PM",
      selected: true,
    },
    {
      name: "Dev Stack",
      lastText: "DevStack testing whatsapp",
      lastSeen: "8:51 PM",
      selected: false,
    },
    {
      name: "Test 1",
      lastText: "Testing okk how test test 123",
      lastSeen: "4:21 PM",
      selected: false,
    },
    {
      name: "Test 2",
      lastText: "Testing okk how test test 123",
      lastSeen: "4:21 PM",
      selected: false,
    },

  ];
  function ClipboardCopy({  }) {
    const [isCopied, setIsCopied] = useState(false);}
  
  return (
    <div className="container">
    <Box display="flex" flexDirection="row" height="100vh">
      <LeftPanel localChats={localChats} />
      {/* <div>
      <input type="text" value={copyText} readOnly />
      
    </div> */}
      <Box
        sx={{
          border: ".05px solid #2f3b44",
        }}
      />
      <Chatboats localChats={localChats.filter(item => item.selected === true)} />
    </Box>
    </div>
  );
}