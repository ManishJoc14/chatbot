import React from "react"
import ChatBot from "react-simple-chatbot"

function App() {

  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to our shop",        
      trigger: "AskName", //Trigger AskName  
    },        
    {       
      id: "AskName",        
      message: "Please enter your name!",        
      trigger: "TakingName",        
    },      
    {      
      id: "TakingName",      
      user: true,      
      trigger: "GreetUser",      
    },      
    {       
      id: "GreetUser",     
      message: "Hi {previousValue}, Please select your issue",     
      trigger: "AskForIssue",     
    },      
    {      
      id: "AskForIssue",   
      options: [   
        {    
          value: "React", label: "React", trigger: "React",  },       
        { value: "Angular", label: "Angular", trigger: "Angular" },       
      ],       
    },       
    {       
      id: "React",       
      message:"Thanks for letting your React issue, Our team will resolve your issue ASAP",        
      end: true,       
    },       
    {       
      id: "Angular",       
      message:"Thanks for letting your Angular issue, Our team will resolve your issue ASAP",       
      end: true, //End Conversation    
    },       
  ]; 

  return (
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <ChatBot steps={steps}/>
      </div>
    </>
  );
}

export default App;
