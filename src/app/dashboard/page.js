"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import style from "../all.module.css";
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
import HomeScreen from './home/page';
import Authenication from '../useAuth';
import Contact from './contact/page';
import SignUp from './signup/page';
import About from './about/page';

const Dashboard = () => {
    const [isActive,setIsActive]=useState("Home")
    const {userState,setUserState,whistlist,setWhistlist}=useContext(Authenication);
    
  return (
    <div className={style.container}>
        <div className={style.header}>
            {/* logo and titlee */}
            <div>
                <h1 className={style.logo}>EXCLUSIVE</h1>
            </div>
            
            {/* navigation bars */}
            <div className={style.navMain}>
                <nav className={style.nav}>
                    <li onClick={()=>{
                        setIsActive("Home")
                    }} className={style.allNav} style={{
                        color:isActive=="Home"?"red":'black',
                        textDecoration:isActive=="Home"?"underline":""
                    }}>Home</li>
                    <li onClick={()=>{
                        setIsActive("Contact")
                    }} className={style.allNav} style={{
                        color:isActive=="Contact"?"red":'black',
                        textDecoration:isActive=="Contact"?"underline":""
                    }}>Contact</li>
                    <li onClick={()=>{
                        setIsActive("About")
                    }} className={style.allNav} style={{
                        color:isActive=="About"?"red":'black',
                        textDecoration:isActive=="About"?"underline":""
                    }}>About</li>
                    <li onClick={()=>{
                        setIsActive("Signup")
                    }} className={style.allNav} style={{
                        color:isActive=="Signup"?"red":'black',
                        textDecoration:isActive=="Signup"?"underline":""
                    }}>Signup</li>
                </nav>
            </div>

            {/* right side */}
            <div className={style.rightSide}>
                <div className={style.searchDiv}>
                    <input className={style.searchBar} placeholder='What are you looking for?'/>
                    <BsSearch style={{
                        color:'black'
                    }}/>
                </div>
                <AiOutlineHeart size={30} style={{
                    marginLeft:10,cursor:'pointer'
                }}/>
                <p style={{backgroundColor:'red',padding:2,borderRadius:100,color:'wheat',marginTop:-15,marginLeft:-10}}>0</p>
                <AiOutlineShoppingCart size={30} style={{
                    marginLeft:10,cursor:'pointer'
                }}/>
                {userState?(<div className={style.user}><AiOutlineUser  size={20} style={{
                    cursor:'pointer'
                }}/></div>):(null)}
            </div>
        </div>
        <div>
            { isActive === "Home"?<HomeScreen /> : null  }
            { isActive === "Contact"?<Contact /> : null  }
            { isActive === "About"?<About /> : null  }
            { isActive === "Signup"?<SignUp /> : null  }
        </div>
    </div>
  )
}

export default Dashboard