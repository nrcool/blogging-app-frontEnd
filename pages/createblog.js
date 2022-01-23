import React, { useContext } from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import { MyContext } from "../components/context/Context";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const router = useRouter()
  const { user } = useContext(MyContext);
  const createBlog = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append("userid", user._id);


    fetch("https://blogs-app-server-r8ko24yka-nrcool.vercel.app/blogs", {
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
          crossorigin="anonymous"
        />
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
          <textarea
            name="content"
            class="textarea is-primary"
            placeholder="Primary textarea"
            rows="5"
          ></textarea>
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
