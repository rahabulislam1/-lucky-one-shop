import React from 'react';
import google from '../../../Images/Logo/google.png'
import gitHub from '../../../Images/Logo/GitHub-Mark.png'
import facebook from '../../../Images/Logo/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialMedia = () => {
    // using react-firebase-hook for authentication
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (loading || loading2) {
        <Loading></Loading>
    }
    if (error || error2) {
        errorMessage = <p>Error: {error?.message} || {error2?.message}</p>
    }
    if (user || user2) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{errorMessage}</p>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='w-50 btn btn-info mb-2'><img className='pe-2' src={google} alt="" /> Google Login</button><br />
                <button onClick={() => signInWithGithub()} className='w-50 btn btn-info mb-2'><img className='pe-2' src={gitHub} alt="" /> Github Login</button><br />
                <button className='w-50 btn btn-info'><img className='pe-1' src={facebook} alt="" /> Facebook Login</button>
            </div>

        </div>
    );
};

export default SocialMedia;