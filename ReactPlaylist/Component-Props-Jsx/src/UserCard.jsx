import React from 'react'
import './UserCard.css';

const UserCard = (props) => {
  return (
    
    <div className='user-container' style={props.style}>
      <p id="user-name" >{props.name}</p>
      <img id="user-img" src={props.img} alt="mauu"></img>
      <p id="user-description">{props.desc}</p>
      <p id="user-skills">{props.Skills}</p>
      <p id="user-email">{props.Email}</p>   
      <p id="user-github">{props.GitHub}</p>   
     
    </div>
  )
}

export default UserCard
