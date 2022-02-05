import useSWR from "swr"

export default function Records(props) {

    const {data,error} = useSWR("https://blogs-app-server.vercel.app/users", async (url)=>{
        const res = await fetch(url,{method:"GET", headers:{"token":localStorage.getItem("token")}})
        const result = await res.json()
        return result.data
    })   
    console.log(data,"data")
    console.log(error, "error") 
if(!data){
    return (<h2>Loading .........</h2>)
}
if(error){
    return (<h2>something is going wrong</h2>)
}

const deleteUser=(id)=>{
  fetch(`https://blogs-app-server.vercel.app/  users/${id}`,{method:"DELETE",headers:{"token":localStorage.getItem("token")}})
  .then(res=>res.json())
  .then(result=>console.log(result))
}

    return (
        <div className="container">
             <h1 className="title has-text-centered">users</h1>
            <section className="columns has-text-centered is-centered is-multiline">
            {data && data.map(user=>{
                return(
                  <div key={user._id} className="card section column is-3">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={user.image} alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={user.image} alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{user.fullname}</p>
                        <p className="subtitle is-6">@{user.lastname}</p>
                      </div>
                    </div>
                
                    <div className="content">
                      {user.description} 
                      <br/>
                      <time>{new Date(user.createAt).toUTCString
                      ()}</time>
                    </div>
                    <button className="button is-danger" onClick={()=>deleteUser(user._id)}>delete</button>
                  </div>
                </div>
                )
            })}
            </section>
           
           

    
        </div>
    )
}
 