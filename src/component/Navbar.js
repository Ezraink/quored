import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Input} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import "../css/Navbar.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';
import { auth } from '../firebase';
import Modal from 'react-modal'
import People from '@mui/icons-material/People';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link'
import db from '../firebase';
import firebase from 'firebase/compat/app';
function Navbar() {
   const user = useSelector(selectUser);

   const [IsmodalOpen, setIsModalOpen] = useState(false);
   const [input, setInput] = useState("");
   const [inputUrl, setInputUrl] = useState("");
   const questionName = input;

   const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    
      });
    
      setInput("");
      setInputUrl("");
    }

  };


    return (
    <div className='qHeader'>
            <div className='qHeader__logo'>
                <img  
                src="https://upload.wikimedia.org/wikipedia/en/9/99/Elphinstone_College_crest.svg"
                 alt=''>
                </img>
            </div>
         <div className='qHeader__icons'>

                <div className='qHeader__icon'>
                <HomeIcon/>
                </div>
                <div className='qHeader__icon'>
                <FeaturedPlayListIcon />
                </div>
                <div className='qHeader__icon'>
                <AssignmentTurnedInIcon />
                </div>
                <div className='qHeader__icon'>
                < PeopleIcon />
                </div>
                <div className='qHeader__icon'>
                <NotificationsNoneIcon />
                </div>
                </div>
                   <div className='qHeader__input'>
                  < SearchIcon />
                   <input type= "text" placeholder='Search topics'/>
                   </div>
                 <div className='qHeader__Remaining'>
                        <div  className='qHeader__avatar'>
                         <Avatar onClick ={()=> auth.signOut()}
                         src={user.photo}/>
                        </div>
                        <div div className='qHeader__translate'>
                         <TranslateIcon />
                         </div>
                        <div className='qHeader__button'>
                        <Button onClick={() => setIsModalOpen(true)}> Add Question </Button>
                        <Modal isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
          >
               <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>

          <div className="modal__info">
              <Avatar className='avatar'
               src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
              />
               <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
         <div className='modal__scope'>
             <People/>
             <p>public</p>
             <ExpandMoreIcon />
         </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <LinkIcon />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
                            </Modal>  
                        </div>
 </div>
</div>
         
               
    
    );
}

export default Navbar

