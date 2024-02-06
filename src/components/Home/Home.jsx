import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
        .then(error=>console.error(error))
    }
    
    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
            <span className="loading loading-ring loading-lg w-64"></span>
          </div>
        );
    }

    return (
        <div>
            <h1>Home page.</h1>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default Home;