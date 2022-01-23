import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import SWR from "swr";
import DisplayComments from "../../components/Comment";
import { MyContext } from "../../components/context/Context";
export default function Blog(props) {
  const { query } = useRouter();
  const commentRef = useRef();
  const { user } = useContext(MyContext);
  const { data, error } = SWR(
    {
      url: `https://blogs-app-server-r8ko24yka-nrcool.vercel.app/blogs/${query.id}`,
      url2: `https://blogs-app-server-r8ko24yka-nrcool.vercel.app/comments`,
    },
    async ({ url, url2 }) => {
      const res = await fetch(url);
      const result = await res.json();
      const response = await fetch(url2);
      const resultData = await response.json();
      const comments = resultData.data.filter((com) => com.blogid === query.id);
      console.log(comments);
      return { blog: result.data, comments };
    }
  );
  if (!data) {
    return <h2>Loading .........</h2>;
  }
  if (error) {
    return <h2>something is going wrong</h2>;
  }

  const commentOnBlog = () => {
    console.log(commentRef.current.value);
    const comment = JSON.stringify({
      commentText: commentRef.current.value,
      userid: user._id,
      blogid: data.blog._id,
    });
    fetch(`https://blogs-app-server-r8ko24yka-nrcool.vercel.app/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: comment,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Message Posted!");
          commentRef.current.value = "";
        } else {
          toast.error(result.message);
        }
      });
  };

  /* const replyOnComment = (id) => {
    console.log(replyTextRef);
    fetch(`https://blogs-app-server-r8ko24yka-nrcool.vercel.app//comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        commentText: replyTextRef.current.value,
        userid: user._id,
        blogid: data.blog._id,
        replyCommentId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Message Posted!");
          replyTextRef.current.value = "";
        } else {
          toast.error(result.message);
        }
      });
  }; */
  return (
    <div className="section columns is-centered">
      <div className="column is-8 ">
        <div className="hero has-text-centered is-primary ">
          <article className="media px-3 pt-5">
            <figure className="media-left image is-64x64">
              <img className="is-rounded" src={data.blog.userid.image} />
            </figure>
            <p>
              <strong>{data.blog.userid.fullname}</strong>{" "}
              <small>@j{data.blog.userid.lastname}</small> <small>31m</small>
            </p>
          </article>
          <h2 className="title">{data.blog.title}</h2>
          <h3 className="sub-title has-text-dark">{data.blog.description}</h3>
        </div>
        <figure className="image is-4by3">
          <img src={data.blog.image} alt="Placeholder image" />
        </figure>
        <div className="section has-text-weight-medium is-family-monospace">
          <p>{data.blog.content}</p>
        </div>
        <div className="section">
          <div className="notification">
            <h2>Comments</h2>
          </div>
          <div className="box">
            <textarea
              disabled={user ? false : true}
              className="textarea is-primary"
              placeholder={
                user ? "Write Comment ..." : "Registered Users Only !"
              }
              ref={commentRef}
            ></textarea>
            <button
              disabled={user ? false : true}
              className="button"
              onClick={commentOnBlog}
            >
              &#x1F680;{" "}
            </button>
            <DisplayComments comments={data.comments}/>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}



// function displayComments(comments,user,ref1,replyfunc)
// {  
//   return( comments && comments.map((com) => {
//   return (
//     <div className="notification mediam ">
//       <div className="box columns">
//         <figure className="media-left image is-64x64 column is-2">
//           <img className="is-rounded" src={com.userid.image} />
//           <p>
//             <strong>{com.userid.lastname}</strong>
//           </p>
//         </figure>
//         <div className="media-right column is-8">
//           <p>{com.commentText}</p>
//         </div>
//       </div>
//       <details className="icons">
//              <summary>reply</summary>
//              <textarea
//                className="textarea is-primary"
//                placeholder="Primary textarea"
//                rows="2"
//                disabled={user ? false : true}
//                ref={ref1}
//              ></textarea>
//              <button
//                disabled={user ? false : true}
//                className="button"
//                onClick={() => replyfunc(com._id)}
//              >
//                &#x1F680;{" "}
//              </button>
//            </details>
//            {displayComments(comments.replyComments,user,ref1,replyfunc)}
//     </div>
//   );
// }) )}



// {{<div className="box notification">
//                   <section className="media px-3 pt-5">
//                     <figure className="media-left image is-64x64">
//                       <img className="is-rounded" src={com.userid.image} />
//                     </figure>
//                     <p>
//                       <strong>{com.userid.fullname}</strong>
//                       <small> {com.commentText}</small>
//                     </p>
//                     {/*  nexted comments */}
//                     <div>
//                       <p>
//                         <strong>{com.userid && com.userid.fullname}</strong>
//                         <small> {com.commentText && com.commentText}</small>
//                       </p>
//                       <details className="icons">
//                         <summary>reply</summary>
//                         <textarea
//                           className="textarea is-primary"
//                           placeholder="Primary textarea"
//                           rows="2"
//                           disabled={user ? false : true}
//                           ref={replyTextRef}
//                         ></textarea>
//                         <button
//                           disabled={user ? false : true}
//                           className="button"
//                           onClick={() => replyOnComment(com._id)}
//                         >
//                           &#x1F680;{" "}
//                         </button>
//                       </details>
//                     </div>
//                     )
//                   </section>
//                 </div>}}
