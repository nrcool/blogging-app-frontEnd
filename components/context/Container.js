import React, { useState,useEffect } from 'react'
import { MyContext } from './Context'


export default function Container({children}) {
    const [user,setUser]=useState(null)
    const [token,setToken]=useState(null)
    const [records,setRecords]=useState([])
    const [orders,setOrders]=useState([])
    const [cart,setCart]=useState([])
    const [isRegister,setIsRegister]=useState(false)

   

    useEffect(()=>{
        const localdata= localStorage.getItem("isRegistered")
        localdata && setIsRegister(true)
        const token = localStorage.getItem("token")
         if(token){
            fetch("https://blogs-app-server-r8ko24yka-nrcool.vercel.app/verifytoken",{method:"GET", headers:{"token":token}})
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                if(result.success){
                    setUser(result.data)
                }
            })

        } 
    },[])

    return (
      <MyContext.Provider value={{user,setUser,token,setToken, records,setRecords, orders,setOrders,cart,setCart,isRegister}}>
          {children}
      </MyContext.Provider>
    )
}
