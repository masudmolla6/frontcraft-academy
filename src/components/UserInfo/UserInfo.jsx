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
      <div className="w-full h-screen flex justify-center items-center">
        <div className="">
          <h1 className='text-2xl'>{user.displayName}</h1>
          <img src={user?.photoUrl} alt="" />
          <p className='text-xl'>Email-{user.email}</p>
          <p className='text-xl'>providerId-{user?.providerId}</p>
        </div>
      </div>
    );
};

export default UserInfo;