"use client"
import React, { useState } from 'react'
import style from '../../all.module.css';
import Image from 'next/image';
import ad from '../../../../public/ad.png'
import Link from 'next/link';

const Cart = () => {
    const [isActive,setIsActive]=useState("Home")
    const [itemQuantity,setItemQuantity]=useState(1)

  return (
    <div className={style.container2}>
        <div className={style.header}>
            {/* logo and titlee */}
            <div>
                <Link href={"/"}><h1 className={style.logo}>EXCLUSIVE</h1></Link>
            </div>
            
            {/* navigation bars */}
            <div className={style.navMain}>
                <nav className={style.nav}>
                    <ul style={{display:'flex',justifyContent:'space-between',listStyle:'none'}}>
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
                    </ul>
                </nav>
            </div>
        </div>

        <div className={style.cartSection}>
            <h2 style={{marginTop:20}}>Cart</h2>
            
            <div className={style.tables}>
                <div style={{display:'flex'}}>
                    <h4>Image & </h4>
                    <h4> Product</h4>
                </div>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Subtotal</h4>
            </div>
            <div className={style.tables1}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <Image src={ad} alt='item' height={100} style={{
                        objectFit:'fill',borderRadius:10
                    }} width={100}/>
                    <h4 style={{marginLeft:5}}>Product</h4>
                </div>
                <h4>&#8377;. {50}/-</h4>
                <input value={itemQuantity}  type='number' style={{
                    width:80,borderRadius:10,border:'none',outline:'none',height:40,fontSize:20,textAlign:'center',fontWeight:800
                }} onChange={(text)=>setItemQuantity(text.target.value)}/>
                <h4>&#8377;.{50*itemQuantity}</h4>
            </div>
            <div className={style.tables2}>
                <Link id={style.shop} href={"/dashboard"}><button id={style.shop1}>Return to Shop</button></Link>
                <Link id={style.shop} href={"/dashboard"}><button id={style.shop1}>Update Cart</button></Link>
            </div>
            <div className={style.tables3}>
                <h3>Cart Total</h3>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:10,marginTop:15}}>
                    <p>Subtotal</p>
                    <p>&#8377;.{50*itemQuantity}</p>
                </div>
                <hr/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:10,marginTop:15}}>
                    <p>Shipping</p>
                    <p>&#8377;.{100}</p>
                </div>
                <hr/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:10,marginTop:15}}>
                    <p>Total</p>
                    <p>&#8377;.{50*itemQuantity +100}</p>
                </div>
                <Link id={style.shop2} href={"/dashboard/checkout"}><button id={style.shop1}>Procced to checkout</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cart