import React, { useContext } from "react";
import Head from "next/head";
import { MyContext } from "../components/context/Context";
import { useRouter } from "next/router";
import toast ,{Toaster}from "react-hot-toast";
export default function Login() {

  const {setToken,setUser} =useContext(MyContext)

  const router= useRouter()
  console.log(router)

  const loginUser = (e) => {
    e.preventDefault();
    let user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("https://blogs-app-server-r8ko24yka-nrcool.vercel.app/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(res=>{
      console.log(res.headers.get("token"))
      let token = res.headers.get("token")
      localStorage.setItem("token",token)
      setToken(token)
      return res.json()})
    .then(result=>{
      if(result.success){
        setUser(result.data)
        e.target.reset()
        toast.success("Logged in successful ! ")
        setTimeout(()=>{
          router.push("/")
        },1000)
      }else{
        toast.error(result.message)
      }
    })
  };
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="user login page" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <form onSubmit={loginUser}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}
