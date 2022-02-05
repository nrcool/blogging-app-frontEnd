import React, { useContext, useState } from 'react';
import { MyContext } from './context/Context';
import toast, { Toaster } from "react-hot-toast";

export default function DisplayComments({comments}){
    const {user} =useContext(MyContext)

    const [reply,setReply]=useState("")
    const replyOnComment = (id,blogid) => {
        fetch(`https://blogs-app-server.vercel.app/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            commentText: reply,
            userid: user._id,
            blogid: blogid,
            replyCommentId: id,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              toast.success("Message Posted!");
              setReply("");
            } else {
              toast.error(result.message);
            }
          });
      };

  return( <ul> { 
    comments && comments.map((com) => {
  return (
    <li key={com._id} className="notification mediam ">
      <div className="box columns is-centered my-2">
        <figure className="media-left image column is-2-desktop is-2-tablet is-3-mobile ">
          <img className="is-rounded" src={com.userid.image} />
          <p className="has-text-centered">
            <strong>{com.userid.lastname}</strong>
          </p>
        </figure>
        <div className="media-right column is-10-desktop is-10-tablet is-3-mobile">
          <p>{com.commentText}</p>
        </div>
      </div>
      <details className="icons">
             <summary>reply</summary>
             <textarea
               className="textarea is-primary"
               placeholder="Primary textarea"
               rows="2"
               disabled={user ? false : true}
               onChange={(e)=>setReply(e.target.value)}
             ></textarea>
             <button
               disabled={user ? false : true}
               className="button"
               onClick={() => replyOnComment(com._id,com.blogid)}
             >
               &#x1F680;{" "}
             </button>
           </details>
        <DisplayComments comments= {comments.replyComments} />
        <Toaster position="top-center" reverseOrder={false} />
    </li>
  );
})} </ul>) }

