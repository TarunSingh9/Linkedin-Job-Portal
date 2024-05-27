import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (password !== conpassword) {
      setError('Password and Confirm Password do not match');
      return;
    }

    setError(''); // Clear any previous errors
    axios.post('http://localhost:3001/logindata', { name, email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className='w-full h-screen bg-no-repeat bg-cover'>
      <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-Beige-900">
        <div className="flex flex-col items-left justify-center px-3 py-8 mx-auto md:h-screen lg:py-0">
          <div className='flex justify-center items-center h-screen'>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-Beige-200 dark:border-Beige-200">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="flex items-center gap-2 text-2xl text-black">
                  Create an account
                </h1>
                {error && <div className="text-red-500">{error}</div>}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-xl text-black"
                  >
                    User name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="xyz name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-xl text-black"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="flex items-center gap-2 text-xl text-black"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="conpassword"
                      className="flex items-center gap-2 text-xl text-black"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="conpassword"
                      id="conpassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-blue-500 dark:text-blue-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline text-blue">
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-blue bg-red-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <Link to="/" className="flex items-center gap-2 text-blue" type="button">
                  </Link>
                    Submit
                  </button>
                  <div className="items-center gap-2 text-black">
                    Don’t have an account yet?{" "}
                    <Link to="/sign-up" className="flex items-center gap-2 text-blue" type="button">
                      click here for signup
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/business-management-by-employees-4836631-4032962.png?f=webp' alt="site Image" className='flex object-cover' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
