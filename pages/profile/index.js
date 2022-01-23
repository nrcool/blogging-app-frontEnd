import Link from "next/link";
import React, { useContext } from "react";
import { MyContext } from "../../components/context/Context";

export default function Profile() {
  const { user } = useContext(MyContext);
  return (
    <div className="container columns is-centered">
        {user &&<div className="card section column is-5">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={user.image}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={user.image}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.fullname}</p>
              <p className="subtitle is-6">{user.email }</p>
            </div>
          </div>

          <div className="content">
             <a>@{user.lastname}</a>
            <br />
            <time dateTime="2016-1-1">{new Date(user.createAt).toUTCString()}</time>
          </div>
          <Link href="/profile/editprofile" className="button is-info">Edit</Link>
        </div>
      </div> }
      
    </div>
  );
}
