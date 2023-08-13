"use client"
import Image from "next/image";
import  "./homescreen.css";
import { AiOutlineArrowRight,AiFillSafetyCertificate, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import pm from '../../../../public/pm.jpg'
import { useContext, useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Authenication from "@/app/useAuth";
import ad from '../../../../public/ad.png'
import {FaShuttleVan} from 'react-icons/fa'
import {FiHeadphones} from 'react-icons/fi'
import Link from "next/link";

const titles=[
  {
    id:1,
    title:"Electronics"
  },
  {
    id:2,
    title:"Home & Lifestyle"
  },
  {
    id:3,
    title:"Medicine"
  },
  {
    id:4,
    title:"Sports & Outdoor"
  },
  {
    id:5,
    title:"Baby's Toys"
  },
  {
    id:6,
    title:"Groceries & Pets"
  },
  {
    id:7,
    title:"Health & Beauty"
  },
]
const HomeScreen = () => {
  const [products,setProducts]=useState([]);
  const [time,setTime]=useState(0);
  
  const getData=async()=>{
    const data=await fetch("/api/products");
    const result=await data.json();
    // console.log(result)
    setProducts(result.productss);
  }

  const {whistlist,setWhistlist}=useContext(Authenication);

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
  useEffect(()=>{
    getData();
    
  })

  return (
    <div className="container">
      <div className="mainSide">
          {/* left side */}
          <div className="leftSide">

            <div className="sideBarContainer">
              <h3 className="sidebarTitle">Womens Fashion</h3>
              <AiOutlineArrowRight className="sidebarTitle" />
            </div>
            <div className="sideBarContainer">
              <h3 className="sidebarTitle">Mens Fashion</h3>
              <AiOutlineArrowRight className="sidebarTitle" />
            </div>

            {titles.map((item)=>(
              <div key={item.id} className="sideBarContainer">
                <h3 className="sidebarTitle">{item.title}</h3>
              </div>
            ))}

          </div>
          {/* right side */}
          <div className="rightSide">
            <Image className="rightSideIImg" src="https://i.ytimg.com/vi/Vf8DeNkJztU/maxresdefault.jpg" alt="image" style={{
              objectFit:'cover'
            }} height={375} width={999} />
          </div>
      </div>

        {/* flash sales */}
        <div className="flashMain">
          <div className="flash">
              <div style={{backgroundColor:'red',height:40,width:15,borderRadius:5,marginRight:10}}></div>
            <h4 style={{fontWeight:400}}>Todays</h4>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
            <div>
              <h2>Flash Sales</h2>
            </div>
            
          </div>
        </div>

        {/* listing products */}
        <div className="productsAll">
          {products?.map((item)=>{
            let finalPppp=actualPrice(item.discountPercentage,item.price)
            const id=item._id;
            return (
              <div key={item._id}  className="products">
                <Link href={`/dashboard/home/${id}`}>
            <div className="pimage">
              <Image id='thumb' src={item.thumbnail}  height={220} width={350} alt="productimage" style={{objectFit:'fill',borderRadius:10,}}/>
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

        {/* displaying the ad */}
        <div className="ad">
          <Image src={ad}  height={400} width={1000} alt="productimage" style={{objectFit:'fill',borderRadius:10,width:'90%'}}/>
        </div>

          {/* benifits of our website */}
          <div className="allServices">
            <div className="ser">
              <div id="services">
                <FaShuttleVan color="white" size={50}/>
              </div>
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="ser">
              <div id="services">
                <FiHeadphones color="white" size={50}/>
              </div>
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="ser">
              <div id="services">
                <AiFillSafetyCertificate color="white" size={50}/>
              </div>
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We return money within 30 days</p>
            </div>
          </div>

          {/* footer parts */}
          <footer className="footer">
            <div className="footerItems">

              <div>
                <h3>ABHANCUU</h3>
                <br/>
                <h4>Subscribe</h4>
                <br/>
                <p>Get 10% off your first order</p>
                <br/>
                <div id='subscribe'>
                  <input style={{
                    border:'none',
                    outline:"none",
                    backgroundColor:'black',
                    color:'white'
                  }} type='email' placeholder='Enter your email'/>
                  <AiOutlineSend size={20} />
                </div>
              </div>

              <div>
                <h3>Support</h3><br/>
                <p>Law Gate Maheru,Punjab<br/>144411,Punjab,India</p><br/>
                <p>abhaytechhub@gmail.com</p><br/>
                <p>+919876543210</p><br/>
              </div>

              <div>
                <h3>Account</h3><br/>
                <p>My Account</p><br/>
                <p>Login/Register</p><br/>
                <p>Cart</p><br/>
                <p>Whistlist</p><br/>
                <p>Shop</p><br/>
              </div>

              <div>
                <h3>Quick Link</h3><br/>
                <p>Privacy Policy</p><br/>
                <p>Terms of use</p><br/>
                <p>FAQ</p><br/>
                <p>Contact</p><br/>
              </div>

            </div>
            <p style={{textAlign:'center',color:'gray',marginTop:15}}>&copy; Copyright ABHANCUU 2023 All right reserverd.</p>
          </footer>
    </div>
  )
}

export default HomeScreen