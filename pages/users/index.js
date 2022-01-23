import React from "react";
import useSWR from "swr";
export default function index() {
  const { data,error } = useSWR("https://blogs-app-server-r8ko24yka-nrcool.vercel.app/users", async (url) => {
    const res = await fetch(url, {
    method:"GET",
      headers: { "token": localStorage.getItem("token") },
    });
    const result = await res.json();
    console.log(result.data)
    return result.data;
  });

 
  if(!data){
    return (<h2>Loading .........</h2>)
}
if(error){
    return (<h2>something is going wrong</h2>)
}

  return (
    <div>
      <h1>Users Component</h1>
      {data && data.map(user=>{
          return (<div  key={user._id} className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{user.fullname}</p>
                <p className="subtitle is-6">{user.email}</p>
              </div>
            </div>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div> )
      })}
    </div>
  );
}
