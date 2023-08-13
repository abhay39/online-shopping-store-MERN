import Image from 'next/image';
import './about.css';
import a from '../../../../public/a.png'
import owner from '../../../../public/owner.jpg'
import both from '../../../../public/both.jpg'
import bimlash from '../../../../public/bim.jpg'
import { FaShuttleVan } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi';
import { AiFillGithub, AiFillSafetyCertificate, AiOutlineTwitter, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsCurrencyRupee, BsFacebook, BsFillBagCheckFill, BsFillHouseDoorFill, BsInstagram } from 'react-icons/bs';
import { TbWorldCancel } from 'react-icons/tb';

const About = () => {
    return (
      <div className='mainCont'>
            <div className='topBar'>
                <div className='story'>
                    <h3 style={{letterSpacing:1.5}}>Our Story</h3><br/>
                    <p style={{textAlign:'justify'}}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p><br/>
                    <p style={{textAlign:'justify'}}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div id="aimage">
                    <Image src={a} alt='promo' height={400} width={400} id='a'/>
                </div>
            </div>

            {/* promotions */}
            <div className="allServices">
            <div className="ser">
              <div id="services">
                <BsFillHouseDoorFill color="white" size={50}/>
              </div>
              <h3>10.5k</h3>
              <p>Saler active in our site</p>
            </div>
            <div className="ser">
              <div id="services">
                <BsCurrencyRupee color="white" size={50}/>
              </div>
              <h3>33k</h3>
              <p>Monthly Production Sale</p>
            </div>
            <div className="ser">
              <div id="services">
                <AiOutlineUsergroupAdd color="white" size={50}/>
              </div>
              <h3>45.5k</h3>
              <p>Customer active in our site</p>
            </div>
            <div className="ser">
              <div id="services">
                <BsFillBagCheckFill color="white" size={50}/>
              </div>
              <h3>25k</h3>
              <p>Annual gross sale in our site</p>
            </div>
          </div>

          {/* creators name */}
            <div class="creatName">
                <div className='authors'>
                    <Image src={owner} style={{
                        objectFit:"cover",borderRadius:10
                    }} alt='Owner' height={300} width={350}/>
                    <h3 style={{marginLeft:5,letterSpacing:1.3,fontWeight:500}}>Abhay Kumar Gupta</h3>
                    <p style={{marginLeft:5,fontWeight:400}}>Founder & Chairman</p>
                    <div style={{display:'flex',justifyContent:'space-between',marginLeft:10,marginRight:10,marginTop:10,marginBottom:2}}>
                        <div>
                            <a href='https://twitter.com/abhay07781' target='_blank'><AiOutlineTwitter size={30} color='blue'/></a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/abhaygupta07788' target='_blank'><BsFacebook size={30} color='blue'/></a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/abhay_gupta07788/' target='_blank'><BsInstagram size={30} color='red'/></a>
                        </div>
                        <div>
                            <a href='https://github.com/abhay39' target='_blank'><AiFillGithub size={30} color='black'/></a>
                        </div>
                        <div>
                            <a href='https://abhaygupta.netlify.app/' target='_blank'><TbWorldCancel size={30} color='gray'/></a>
                        </div>
                        
                    </div>
                </div>
                <div className='authors'>
                    <Image src={bimlash} style={{
                        objectFit:"fill",borderRadius:10
                    }} alt='Owner' height={300} width={350}/>
                    <h3 style={{marginLeft:5,letterSpacing:1.3,fontWeight:500}}>Bimalesh Kumar Yadav</h3>
                    <p style={{marginLeft:5,fontWeight:400}}>CEO</p>
                    <div style={{display:'flex',justifyContent:'space-between',marginLeft:10,marginRight:10,marginTop:10,marginBottom:2}}>
                        <div>
                            <a href='https://twitter.com/abhay07781' target='_blank'><AiOutlineTwitter size={30} color='blue'/></a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/abhaygupta07788' target='_blank'><BsFacebook size={30} color='blue'/></a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/abhay_gupta07788/' target='_blank'><BsInstagram size={30} color='red'/></a>
                        </div>
                        <div>
                            <a href='https://github.com/abhay39' target='_blank'><AiFillGithub size={30} color='black'/></a>
                        </div>
                        <div>
                            <a href='https://abhaygupta.netlify.app/' target='_blank'><TbWorldCancel size={30} color='gray'/></a>
                        </div>
                        
                    </div>
                </div>
                <div className='authors'>
                    <Image src={both} style={{
                        objectFit:"cover",borderRadius:10
                    }} alt='Owner' height={300} width={350}/>
                    <h3 style={{marginLeft:5,letterSpacing:1.3,fontWeight:500}}>Abhay Kumar Gupta</h3>
                    <p style={{marginLeft:5,fontWeight:400}}>Founder & Chairman</p>
                    <div style={{display:'flex',justifyContent:'space-between',marginLeft:10,marginRight:10,marginTop:10,marginBottom:2}}>
                        <div>
                            <a href='https://twitter.com/abhay07781' target='_blank'><AiOutlineTwitter size={30} color='blue'/></a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/abhaygupta07788' target='_blank'><BsFacebook size={30} color='blue'/></a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/abhay_gupta07788/' target='_blank'><BsInstagram size={30} color='red'/></a>
                        </div>
                        <div>
                            <a href='https://github.com/abhay39' target='_blank'><AiFillGithub size={30} color='black'/></a>
                        </div>
                        <div>
                            <a href='https://abhaygupta.netlify.app/' target='_blank'><TbWorldCancel size={30} color='gray'/></a>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Service */}
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
          
      </div>
    )
  }
  export default About
  