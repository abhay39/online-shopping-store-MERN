import Image from "next/image";
import './login.css'
import login from '../../../../public/login.png';
import Link from "next/link";

const Login = () => {
  return (
    <div className="mainLogin">
      <div className="mainBoxForLogin">
        <div>
          <Image id='p' src={login} alt="login" width={600} height={500}/>
        </div>
        <div className="signupform">
            <div>
              <h2>Log in to ABHANCUU</h2>
              <p style={{marginTop:20}}>Enter your details below</p>
              <div style={{display:'flex',flexDirection:'column',marginTop:20,}}>
                <input placeholder="Email or Phone Number" id='name'/>
                <input placeholder="Password" type="password" id='name'/>
              </div>
              <button id='signupBtn'>Login</button>
              <p>Dont have an account? <Link href={'/dashboard/signup'}>Signup</Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Login
