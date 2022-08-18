import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import '../EmailRow.css';
import { auth, provider } from '../firebase';

const Login = () => {
    const signIn =()=>{
        signInWithPopup(auth,provider)
    }
    return (
        <div className='Login'>
            <div className='inContainer'>
                <img src='https://www.shareicon.net/download/2016/08/01/639817_email.svg' height={200}/>
            </div>
            <Button onClick={signIn}>
                Sign in with google
            </Button>
        </div>
    )
}

export default Login