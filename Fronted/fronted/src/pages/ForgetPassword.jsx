// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const { backendUrl } = React.useContext(AppContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(`${backendUrl}/api/user/forgot-password`, { email });
            if (data.success) {
                toast.success('Password reset link sent to your email');
                navigate('/login');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Error sending reset link');
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] border rounded-xl shadow-lg'>
                <p className='text-2xl font-semibold'>Forgot Password</p>
                <p>Enter your registered email to reset your password.</p>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-[#DADADA] rounded w-full p-2 mt-1'
                    required
                />
                <button className='bg-primary text-white w-full py-2 my-2 rounded-md cursor-pointer'>Send Reset Link</button>
            </div>
        </form>
    );
};

export default ForgotPassword;