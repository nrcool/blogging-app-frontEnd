import React, { useContext, useEffect, useRef } from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import { MyContext } from "../components/context/Context";
import toast, { Toaster } from "react-hot-toast";
import { Editor } from '@tinymce/tinymce-react';



export default function Signup() {
  const router = useRouter()
  const { user } = useContext(MyContext);
  const editorRef = useRef(null);

  const createBlog = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append("userid", user._id);
    form.append("content",editorRef.current.getContent() )
    /* console.log(editorRef.current.getContent()); */

     fetch("https://blogs-app-server.vercel.app/blogs", {
      method: "POST",
      headers: { token: localStorage.getItem("token") },
      body: form,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Published Successfully!");
          router.push("/")

        }else{
          console.log(result);
          toast.error(result.message)
        }
      });
  };

 

  return (
    <div>
      <Head>
        <title>create new blog</title>
        <meta name="description" content="user registeration page" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
          <script src={`https://cdn.tiny.cloud/1/${process.env.NEXT_APP_TINY_KEY}/tinymce/5/tinymce.min.js`} referrerpolicy="origin"></script>
      </Head>
      <form onSubmit={createBlog} encType="multipart/form-data">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="title"
              placeholder="title"
            />
            {/*           <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span> */}
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="description"
              placeholder="description"
            />
            {/*     <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span> */}
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
        <Editor
        name="content"
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="Blog Content here ... "
         init={{
           height: 300,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
         {/*  <textarea
            name="content"
            class="textarea is-primary"
            placeholder="Primary textarea"
            rows="5"
          ></textarea> */}
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="file"
              name="image"
              placeholder="image"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Publish Blog</button>
          </p>
        </div>
      </form>
    
     

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
