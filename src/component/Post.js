
import  {Avatar, Button} from '@mui/material'
import React, { useEffect,useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../css/Post.css'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import {selectQuestionId, setQuestionInfo} from "../features/questionSlice"
import db from "../firebase"
import {selectUser} from "../features/UserSlice"
import firebase from 'firebase/compat/app'

Modal.setAppElement('#root')


function Post({Id, question, imageUrl, timestamp, users}) {


const user= useSelector(selectUser)
  const [IsmodalOpen , setIsModalOpen ]= useState(false);
  const dispatch = useDispatch()
  const questionId = useSelector(selectQuestionId)
  const [answer, setAnswer]=useState("");
  const [getAnswer , setGetAnswers]=useState([])

  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  }, [questionId]);
  
  
  const handleAnswer = (e) => {
      e.preventDefault();

        if(questionId){
           db.collection("questions").doc(questionId).collection("answer").add({
             user:user,
             answer:answer,
             questionId:questionId,
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             
           });
          }
           console.log(questionId);
          
            setAnswer("");
           setIsModalOpen(false);
          
  };

    return <div className='post' onClick={() => dispatch(setQuestionInfo({
        questionId:Id,
        questionName: question
    }))} 
>
        <div className='post__info'>
            <Avatar
             src={users.photo ? users.photo 
            : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"} />
            <h5>{users.displayName ? users.displayName : users.email}</h5>
            <small> {new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
                <div className='post__body'>
                    <div className='post__Question'>
                         <p>{question}</p>
                         <Button onClick={() => setIsModalOpen(true)}
                          className='post__btnAnswer'>
                            Answer</Button>
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
              <div className="modal__question">
                    <h1>{question}</h1>
                    <p>
                        asked by {""}
                        <span className='name'>
                            {users.displayName ? users.displayName : users.email}
                        </span>{""}
                        {""}
                        on{" "}
                        <span className='name'>
                            {new Date(timestamp.toDate()).toLocaleString()}
                        </span>
                    </p>
              </div>
               <div className="modal__answer">
          <textarea 
          required
          value={answer}
          onChange ={(e) => setAnswer(e.target.value)}
          placeholder="Enter Your Answer" type="text"
           /> 
          </div>

          <div className="modal__button">
            <Button className='cancle' onClick={()=> setIsModalOpen(false)}>
                Cancle
            </Button>
            <Button  onClick={handleAnswer} type='Sumbit' className='add'>
                Add Answer
            </Button>
           </div>
            </Modal>  
                         </div> 
                         <div className = 'post__Answer'>
                         {getAnswer.map(({ id, answers }) => (
                           <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
                             {Id === answers.questionId ? (
                               <span>
                                 {answers.answer}
                                 <br />
                                 <span
                                   style={{
                                     position: "absolute",
                                     color: "gray",
                                     fontSize: "small",
                                     display: "flex",
                                     right: "0px",
                                   }}
                                 >
                                   <span style={{ color: "#b92b27" }}>
                                     {answers.user.displayName
                                       ? answers.user.displayName
                                       : answers.user.email}{" "}
                                     on{" "}
                                     {new Date(answers.timestamp?.toDate()).toLocaleString()}
                                   </span>
                                 </span>
                               </span>
                             ) : (
                               ""
                             )}
                           </p>
                         ))}
                             </div>   
                             <img 
                             
                             src = {imageUrl} alt="" /> 
                             </div>
                             <div className = 'post__footer'>
                                 <div className ='post__footerAction'>
                                 <ArrowUpwardIcon />
                                 <ArrowDownwardIcon />
                                </div>
                                <RepeatIcon />
                                <ChatBubbleIcon />
                                
                                     <div className='post__footerLeft'>
                                        <ShareIcon />
                                        <MoreHorizIcon />
                                     </div>
                                     </div>
                                  </div>;
                        
        
}

export default Post;
