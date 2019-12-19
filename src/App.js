import React, { useState } from 'react';
import Members from "./components/Members";
import './App.css';
import Form from "./components/Form";

function App() {
    const [teamMember, setTeamMember] = useState([{
      name:"Chad Snyder",
      email:"Chad.Snyder2019@gmail.com",
      role:"Member"
    }]);

    const addNewMember = member => {
      setTeamMember([...teamMember, member])
}
  return (
    <div className="App">
      <h1 className="Title">Enter a new team-member</h1>      
      <Form addNewMember={addNewMember}/>
      <h1 className="Subtitle">My Team</h1>
      <Members memberList={teamMember}/>
    </div>
  );
}

export default App;
