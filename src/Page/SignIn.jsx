import React, { useEffect, useState } from 'react'
import '../Style/SignInStyle.css'
import { TextField, Button } from '@mui/material'
import PasswordTextField from '../Components/PasswordTextField'
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import signInImg from '../Assets/logIn.png'
import { signInWithGoogle,signInWithFacebook ,signInWithTwitter} from '../Firebase/FirebaseAuthHandler';


const SignIn = () => {
    const [data, setData] = useState()
    const onhandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const setPassword = (pValue) => {
        setData({ ...data, ['password']: pValue })
    }
    useEffect(()=>{console.log(data)},[data])
    
    const handleGoogleAuth=()=>{
        console.log(signInWithGoogle())
    }
    const handleFaceBookAuth=()=>{
        console.log(signInWithFacebook())
    }
    const handleTwitterAuth=()=>{
        console.log(signInWithTwitter())
    }
    return (
        <div className='AuthPage flexRow'>
            <div className='ImageContainer flexCol justify-content-center align-Items-center'>
                <img src={signInImg} alt='Image' width={'60%'} height={'80%'}></img>
            </div>
            <div className='Auth flexCol justify-content-center'>
                <div style={{ marginBottom: '10px' }}>
                    <h1>Welcome to Vuexy! 👋🏻</h1>
                    <p>Please sign-in to your account and start the adventure</p>
                </div>
                <TextField id="outlined-basic" value={data && data["email"]} onChange={onhandleChange} name='email' label="Email" variant="outlined" style={{ marginBottom: '20px' }} />
                <PasswordTextField setPassword={setPassword} />
                <div className='flexRow  w-full' style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
                    <div className="flexRow" >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="Transgender"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Remember Me
                        </label>
                    </div>
                    <a href="">Forget email or password ?</a>
                </div>
                <div className="or-divider">
                    <div className="line" />
                    <div className="or-text" style={{margin:"2px 1rem"}}>or</div>
                    <div className="line" /> 
                </div>
                <div className='flexRow justify-content-center' style={{ marginTop: '1rem' }}>
                    <Button variant="contained" style={{ width: '100%' }}>Login</Button>
                </div>
                <div style={{ textAlign: 'center', margin: "2rem 0rem" }}>
                    <span style={{ marginRight: '10px' }}>New on our platform?</span> <a href='#'>Create an account</a>
                </div>
                <div className='flexRow justify-content-center' style={{ gap: '1rem' }}>
                    <div onClick={handleFaceBookAuth} style={{ background: "#e1e6f2", padding: "1rem" }}>
                        <FacebookIcon color="primary" />
                    </div>
                    <div onClick={handleGoogleAuth} style={{ background: "#f9e2df", padding: "1rem" }}>
                        <GoogleIcon sx={{ color: 'red' }} />
                    </div>
                    <div onClick={handleTwitterAuth} style={{ background: "#e1e6f2", padding: "1rem" }}>
                        <TwitterIcon sx={{ color: 'blue' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
