'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/app/utils/config';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/app/redux/Slice/authSlice';

export default function LoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const router = useRouter();
const dispatch = useDispatch();


const handleLogin = async (e: React.FormEvent) => {
   e.preventDefault();
   setLoading(true);
   setError(''); 

  try{
     const res = await axios.post(`${API_BASE_URL}/api/login`, {
      email,
      password,
   });

   const {token, user} = res.data;
   dispatch(loginSuccess({token, user}));
    console.log('User Login:', res.data);
    router.push('/pages/dashboard');
    } catch (err: any) {
    setError(err?.response.data?.message || 'Login failed');
    } finally {
        setLoading(false);
   }
};

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4">
            <form 
            onSubmit={handleLogin} 
            className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
            >
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6"> Login </h1>

<div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
   <input 
   type="email" 
   value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
   placeholder="Enter your email"
   />
   
</div>

<div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-1">password</label>
   <input 
   type="password" 
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   required
   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
   placeholder="Enter your password"
   />
   </div>

{error && <p className='text-red-600 text-sm mb-4 text-center'>{error}</p>}

 <button
 type="submit"
 className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-700 transition duration-200 "
 >
{loading ? 'Login...' : 'Login'}
 </button>

<p className="text-sm text-center text-gray-600 mt-4">
    Don't have an account?{' '}
    <a href="/pages/signup" className="text-blue-600 hover:underline">
    SignUp
    </a>
</p>
 
     </form>
        </div>
        </>
    )
}