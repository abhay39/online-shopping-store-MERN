"use client"
import React, { useContext, useEffect, useState } from 'react'
import Dashboard from '../../page'
import style from '../../../all.module.css';
import Authenication from '@/app/useAuth';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSync, AiOutlineUser} from 'react-icons/ai';
import {FaShuttleVan} from 'react-icons/fa';
import Image from 'next/image';
import pp from "../../../../../public/a.png";
import StarRatings from 'react-star-ratings';
import Link from 'next/link';

const page = (params) => {
    const data=params;
    const id=data.params.id;
    const [isActive,setIsActive]=useState("Home")
    const [products,setProducts]=useState('')
    const [relatedproducts,setRelatedProducts]=useState([])
    const {userState}=useContext(Authenication);
    const [quantity,setQuantity]=useState(0);

    const getProduct=async()=>{
        try{
            let res=await fetch(`/api/products/${id}`)
            res=await res.json();
            setProducts(res.productss);
        }catch(err){
            console.log(err.message)
        }
    }
    const category=products?.category;
    const getRelatedProducts=async()=>{
        try{    
            let res=await fetch(`/api/products/category`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({category:category})
            })
            res=await res.json();
            setRelatedProducts(res.result);
        }catch(err){
            console.log(err.message)
        }
    }

    const addQuantity=()=>{
        setQuantity(quantity+1);
    }
    const removeQuantity=()=>{
        setQuantity(quantity-1);
    }

    useEffect(()=>{
        getProduct()
        getRelatedProducts()
    },[products])

    const actualPrice=(discount,price)=>{
        let a=(discount/100)*price;
        return a+price;
    }
  
    const addingWhistlist=(item)=>{
      const rawData={
        id:item.id,
        price:item.price,
        title:item.title,
        brand:item.brand,
        category:item.category
      }
      whistlist.push(rawData)
      localStorage.setItem("whistlists",JSON.stringify(whistlist))
      window.location.reload();
    }
    const ratinggg=products[0]?.rating;

  return (
    <div className={style.container2}>
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

        {/* products details */}
        <div className={style.imageLists}>
                {/* images */}
                <div style={{display:'flex',flexDirection:'column',marginRight:50}}>
                    {products?.images?.map((item)=>{
                        return(
                            <Image src={item} className={style.listOfImg} alt='products' height={150} width={150}/>
                        )
                    })}
                    
                </div>
                {/* main image */}
                <div>
                    <Image className={style.listOfImg1} src={products?.thumbnail} alt='products' height={475} width={600}/>
                </div>
                {/* descrtiption */}
                <div className={style.desc}>
                    
                    <h1>{products?.title}</h1>
                    
                    <div style={{display:'flex',flexDirection:'row',}}>
                        <StarRatings
                        rating={products.rating}
                        starDimension="20px"
                        starSpacing="6px"
                        starRatedColor="red"
                        />
                        <p style={{marginLeft:10}}>({products?.rating})</p>
                    </div>
                    <p>{products?.description}</p>
                    <h3>&#8377;. {products?.price*82.75 || 0}</h3>
                    <hr style={{marginTop:20,marginBottom:20}}/>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button onClick={removeQuantity} id={style.qBtn}>-</button>
                        <input id={style.quantity} value={quantity}/>
                        <button onClick={addQuantity} id={style.qBtn}>+</button>
                    </div>
                    <div style={{marginTop:30,justifyContent:'space-between'}}>
                        <button onClick={addQuantity} id={style.qBtn1}>Buy Now</button>
                        <button onClick={addQuantity} id={style.qBtn1}>Add To Cart</button>
                    </div>
                    <div style={{alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20,borderWidth:3,borderColor:'red'}}>
                        <FaShuttleVan size={30}/>
                        <div>
                            <h4>Free Delivery</h4>
                            <p>Enter your postal code for Delivery Available</p>
                        </div>
                    </div>
                    <div style={{alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20,borderWidth:3,borderColor:'red'}}>
                        <AiOutlineSync size={30}/>
                        <div>
                            <h4>Return Delivery</h4>
                            <p>Free 30 days delivery returns. Details Available</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className="productsAll">
          {relatedproducts?.map((item)=>{
            let finalPppp=actualPrice(item.discountPercentage,item.price)
            const id=item._id;
            return (
              <div key={item._id}  className="products">
                <Link href={`/dashboard/home/${id}`}>
            <div className="pimage">
              <Image src={item.thumbnail}  height={220} width={350} alt="productimage" style={{objectFit:'fill',borderRadius:10}}/>
              <div style={{marginTop:-220,marginLeft:10,display:'flex',flexDirection:'row',justifyContent:'space-between',marginRight:10,alignItems:'center'}}>
                  <p style={{backgroundColor:item.stock?'green':"red",padding:2,borderRadius:4,color:'white'}}>{item.stock>0?("In stock"):("No stock")}</p>
                <AiOutlineHeart color="red" size={30} onClick={()=>addingWhistlist(item)}/>
              </div>
            </div>
            <div style={{marginLeft:10,marginTop:10}}>
              <h3 style={{fontWeight:500}}>{item.title.slice(0,20)}</h3>
              <div style={{display:'flex',marginTop:5}}>
                <h4 style={{color:'red'}}>${item.price} </h4>
               
                <strike style={{marginLeft:20}}>${finalPppp.toFixed(2)}</strike>
              </div>
              <div style={{display:'flex',flexDirection:'row',}}>
                <StarRatings
                  rating={item.rating}
                  starDimension="20px"
                  starSpacing="6px"
                  starRatedColor="red"
                />
                <p style={{marginLeft:10}}>({item.rating})</p>
              </div>
            </div>
            </Link>
          </div>
          )})
          }
        </div>
    </div>
  )
}

export default page