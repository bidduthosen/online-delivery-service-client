import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Blogs = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>blog ______{user?.email}</h1>
            <img src={user?.photoURL} alt="" />
            <h1>blog ______{user?.displayName}</h1>
        </div>
    );
};

export default Blogs;