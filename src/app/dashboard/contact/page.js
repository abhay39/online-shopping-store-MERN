import {BiSolidPhoneCall} from 'react-icons/bi';
import "./contact.css";

const Contact = () => {
  return (
    <div className='containers'>

        <div className='boxes'>
            <div className='leftBar'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <BiSolidPhoneCall style={{
                        backgroundColor:'red',padding:5,borderRadius:20
                    }} color='white' size={25}/>
                    <h4 style={{marginLeft:10}}>Call To Us</h4>
                </div>
                <p>We are available 24/7, 7 days a week </p>
                <p>Phone: +919876543210 </p>
                <hr/>
                <div style={{display:'flex',alignItems:'center'}}>
                    <BiSolidPhoneCall style={{
                        backgroundColor:'red',padding:5,borderRadius:20
                    }} color='white' size={25}/>
                    <h4 style={{marginLeft:10}}>Call To Us</h4>
                </div>
                <p>We are available 24/7, 7 days a week </p>
                <p>Phone: +919876543210 </p>
            </div>

            <div className='rightSide'>
                    <div className='msgItem'>
                        <input type='text' placeholder='Your Name' id='msg'/>
                        <input type='email' placeholder='Your Email' id='msg'/>
                        <input type='number' placeholder='Your Number' id='msg'/>
                    </div>
                    <div style={{marginTop:10}}>
                        <textarea id='msg' name="message" placeholder='Your Message' cols="116" rows="9"></textarea><br/>
                        <button id='send'>Send Message</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact