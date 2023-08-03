import React, { useEffect, useState } from 'react'
import '../Style/SignInStyle.css'
import { TextField, Button } from '@mui/material'
import PasswordTextField from '../Components/PasswordTextField'
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import signUpImg from '../Assets/signUp.png'

const SignUp = () => {
    const [data, setData] = useState()
    const onhandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const setPassword = (pValue) => {
        setData({ ...data, ['password']: pValue })
    }
    useEffect(() => { console.log(data) }, [data])
    return (
        <div className='AuthPage flexRow'>
            <div className='ImageContainer flexCol justify-content-center align-Items-center'>
                <img src={signUpImg} alt='Image' width={'60%'} height={'80%'}></img>
            </div>
            <div className='Auth flexCol justify-content-center'>
                <div style={{ marginBottom: '10px' }}>
                    <h1>Adventure starts here 🚀</h1>
                    <p>Make your app management easy and fun!</p>
                </div>
                <TextField id="outlined-basic" value={data && data["name"]} onChange={onhandleChange} name='name' label="Name" variant="outlined" style={{ marginBottom: '20px' }} />
                <TextField id="outlined-basic" value={data && data["email"]} onChange={onhandleChange} name='email' label="Email" variant="outlined" style={{ marginBottom: '20px' }} />
                <PasswordTextField setPassword={setPassword} />
                <div className="flexRow" style={{marginTop:'10px'}}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="Transgender"
                        style={{marginRight:'10px'}}
                    />
                    <span class="me-1"> I agree to <a href="#">privacy policy &amp; terms</a></span>
                </div>

                <div className="or-divider">
                    <div className="line" />
                    <div className="or-text" style={{ margin: "2px 1rem" }}>or</div>
                    <div className="line" />
                </div>
                <div className='flexRow justify-content-center' style={{ marginTop: '1rem' }}>
                    <Button variant="contained"  style={{ width: '100%',backgroundColor:'#7367f0' }}>Sign Up</Button>
                </div>
                <div style={{ textAlign: 'center', margin: "2rem 0rem" }}>
                    <span style={{ marginRight: '10px' }}>Already have an account? </span> <a href='#'>Sign in instead</a>
                </div>
                <div className='flexRow justify-content-center' style={{ gap: '1rem' }}>
                    <div style={{ background: "#e1e6f2", padding: "1rem" }}>
                        <FacebookIcon color="primary" />
                    </div>
                    <div style={{ background: "#f9e2df", padding: "1rem" }}>
                        <GoogleIcon sx={{ color: 'red' }} />
                    </div>
                    <div style={{ background: "#e1e6f2", padding: "1rem" }}>
                        <TwitterIcon sx={{ color: 'blue' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
