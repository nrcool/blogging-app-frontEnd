import React, { useContext } from "react";
import Head from "next/head";
import { MyContext } from "../../components/context/Context";
import toast, { Toaster } from "react-hot-toast";
import {useRouter} from "next/router";

export default function EditProfile() {
  const { user, setUser } = useContext(MyContext);
const router=useRouter()

  const updateUser = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);

    fetch(`https://blogs-app-server.vercel.app/users/${user._id}`, {
      method: "PATCH",
      headers: { token: localStorage.getItem("token") },
      body: formdata,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Profile updated! ");
          setUser(result.data)
         router.push("/profile")
        }else{
          toast.error(result.message)
        }
      });
  };

  return (
    <div>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="user registeration page" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <form onSubmit={updateUser}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="firstname"
              placeholder="Firstname"
              defaultValue={user && user.firstname} 
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
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
              name="lastname"
               defaultValue={user && user.lastname}
              placeholder="Lastname"
            /> 
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span> 
          </p>
        </div>
        <figure className="image is-128x128">
          <img src={user&&user.image} alt="Placeholder image" />
        </figure>
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
            <button className="button is-success">Signup</button>
          </p>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
