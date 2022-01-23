import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { MyContext } from "./context/Context";

export default function nav() {
  const {isRegister,user,setUser,cart}= useContext(MyContext)
  const router =useRouter()
const ham= useRef()
  const logoutUser=()=>{
    setUser(null)
    localStorage.removeItem("token")
    router.push("/")
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item hero is-warning is-centered" href="/">
          Blog-App
        </span>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={()=>ham.current.classList.toggle("is-active")}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div ref={ham} id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>

         
          {user && <> <Link href="/createblog" >
            <a className="navbar-item">Create-Blog</a>
          </Link><Link href="/profile" >
            <a className="navbar-item">Profile</a>
          </Link></>}
  
          {user &&user.role==="admin" &&  <Link href="/users">
            <a className="navbar-item">Users</a>
          </Link>}
         
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ?
                <a className="button is-light" onClick={logoutUser}>Log Out</a>
              :<> {!isRegister &&  <Link href="/signup">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </Link>}
             
              <Link href="/login">
                <a className="button is-light">Log in</a>
              </Link></>  }
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    /*   <nav>
        <ul>
          <li><Link href="/">Home</Link>  </li>
          <li><Link href="/orders">Orders</Link> </li>
          <li><Link href="/records">Records</Link> </li>
          <li><Link href="/cart">Cart</Link> </li>
        </ul>
      </nav> */
  );
}
