/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import '../css/feed.css'
import Quorabox from './Quorabox'
import Post from './Post'
import db from '../firebase'

function feed() {
   const [posts ,setPosts] = useState([])

   useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);
    return (
    <div className='Feed'>
         <Quorabox />
         {posts.map(({id, questions}) =>(
           <Post 
            key={id}
            Id={id}
            question={questions.question}
            imageUrl={questions.imageUrl}
            timestamp={questions.timestamp}
            users={questions.user}
           />
         ))}
      
        </div>
    );  
}

export default feed