import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useState } from 'react';
import { async } from '@firebase/util';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        createUserWithEmailAndPassword(email, password);
        // update User-name
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleFormSubmit} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>
                <p className='my-2'>Already have an account? <Link className='text-primary text-decoration-none' to="/login" onClick={navigateLogin}>Please Login </Link></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;