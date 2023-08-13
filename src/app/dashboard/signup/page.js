import Image from "next/image";
import "./signup.css";
import login from '../../../../public/login.png';
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="view">
      <div className="mainBoxForLogin">
        <div id='imgBox'>
          <Image id="p" src={login} alt="login" width={600} height={500}/>
        </div>
        <div className="signupform">
            <div>
              <h2>Create an account</h2>
              <p style={{marginTop:20}}>Enter your details below</p>
              <div style={{display:'flex',flexDirection:'column',marginTop:20,}}>
                <input placeholder="Name" id='name'/>
                <input placeholder="Email or Phone Number" id='name'/>
                <input placeholder="Password" type="password" id='name'/>
              </div>
              <button id='signupBtn'>Create Account</button>
              <p>Already have an account? <Link style={{textDecoration:'underline',color:'red'}} href={'/dashboard/login'}>Login</Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
