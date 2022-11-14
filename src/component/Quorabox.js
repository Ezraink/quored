import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import '../css/Quorabox.css'
import { selectUser } from "../features/UserSlice";
function Quorabox() {
  const user =useSelector(selectUser);

    return (
    <div className='QuoraBox'>
         <div className='quoraBox__info'>
            <Avatar 
            src={user.photo}   /> 
            <h5 >{user.displayName ? user.displayName : user.email}</h5>
            </div>
              <div className='quoraBox__quora'>
                <p>WHAT IS YOUR Question </p>
               </div>
    </div>
    );
}

export default Quorabox;
