import Head from 'next/head'
import Link from 'next/link'

import useSWR from "swr"

export default function Blogs(props) {

    const {data,error} = useSWR("https://blogs-app-server-r8ko24yka-nrcool.vercel.app/blogs", async (url)=>{
        const res = await fetch(url)
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


    return (
        <div className="container">
             <h1 className="title has-text-centered">Blogs</h1>
            <section className="columns has-text-centered is-centered is-multiline">
            {data && data.map(blog=>{
                return(
                  <div key={blog._id} className="card section column is-4-desktop is-6-tablet is-8-mobile">
                   <Link href={`/blog/${blog._id}`}>
                 <a>
                  <div className="card-image">
                
                
                    <figure className="image is-4by3">
                      <img src={blog.image} alt="Placeholder image"/>
                    </figure>
                   
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={blog.userid.image} alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{blog.userid.fullname}</p>
                        <p className="subtitle is-6">@{blog.userid.lastname}</p>
                      </div>
                    </div>
                
                    <div className="content">
                      {blog.description} 
                      <br/>
                      <time dateTime="2016-1-1">{new Date(blog.createAt).toUTCString
                      ()}</time>
                    </div> 
                     
                  </div>
           
                 </a>
                    </Link>
                </div>
                )
            })}
            </section>
           
           

    
        </div>
    )
}
 