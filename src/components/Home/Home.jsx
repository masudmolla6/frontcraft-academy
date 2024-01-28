import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Home page.{ user}</h1>
        </div>
    );
};

export default Home;