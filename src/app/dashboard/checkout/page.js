import style from '../../all.module.css'

const Checkout = () => {
  return (
    <div className={style.checkout}>
        <div className={style.mainCheck}>
            <div className={style.leftCheck}>
                <h1>Billing Details</h1>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>First Name</label>
                    <input id={style.checkName}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>Last Name</label>
                    <input id={style.checkName}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>Street Address</label>
                    <input id={style.checkName}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>Apartment, floor, etc (Optional)</label>
                    <input id={style.checkName}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>Town/City</label>
                    <input id={style.checkName}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>Phone Number</label>
                    <input type='number' id={style.checkName}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
                    <label>Email Address</label>
                    <input type='email' id={style.checkName}/>
                </div>
            </div>
            <div className={style.rightCheck}></div>
        </div>
    </div>
  )
}

export default Checkout