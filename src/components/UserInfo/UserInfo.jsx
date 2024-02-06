import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UserInfo = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
                return (
                  <div className="w-full h-screen flex justify-center items-center">
                    <span className="loading loading-ring loading-lg w-64"></span>
                  </div>
                );
    }

    return (
        <div>
            <h1>{user.displayName}</h1>
            <p>{ user.email}</p>
        </div>
    );
};

export default UserInfo;