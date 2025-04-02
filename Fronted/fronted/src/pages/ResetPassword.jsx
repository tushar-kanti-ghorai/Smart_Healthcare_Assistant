// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { backendUrl } = React.useContext(AppContext);
    const { token } = useParams();
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/reset-password/${encodeURIComponent(token)}`, 
                { newPassword: password }
            );

            if (data.success) {
                toast.success('Password reset successful');
                navigate('/login');
            } else {
                toast.error(data.message || 'Password reset failed');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error resetting password';
            toast.error(errorMessage);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] border rounded-xl shadow-lg'>
                <p className='text-2xl font-semibold'>Reset Password</p>
                <p>Enter your new password.</p>
                <input
                    type='password'
                    placeholder='New Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border border-[#DADADA] rounded w-full p-2 mt-1'
                    required
                />
                <button className='bg-primary text-white w-full py-2 my-2 rounded-md cursor-pointer'>Reset Password</button>
            </div>
        </form>
    );
};

export default ResetPassword;
