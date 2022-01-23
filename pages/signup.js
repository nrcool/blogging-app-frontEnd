import React from 'react'
import Head from "next/head"
import {useRouter} from "next/router"
import toast ,{Toaster}from "react-hot-toast";
export default function Signup() {

const router = useRouter()
    const registerUser=(e)=>{
        e.preventDefault()
       const formdata=new FormData(e.target)

        fetch("https://blogs-app-server-r8ko24yka-nrcool.vercel.app/users", {
            method:"POST",
            body:formdata
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                localStorage.setItem("isRegistered","true")
                toast.success("Registered successfully ! ")
                setTimeout(()=>{
                  router.push("/login")
                },1000)
               /*  setUser(result.data) */
            }else{
              toast.error(result.message)
            }
        })

    }

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
      <form onSubmit={registerUser}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="firstname" placeholder="Firstname" />
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
          <input className="input" type="text" name="lastname" placeholder="Lastname" />
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
          <input className="input" type="email" name="email" placeholder="Email" />
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
          <input className="input" type="password" name="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
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
          <button className="button is-success">Signup</button>
        </p>
      </div>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>

    )
}
