import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Blogs = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>blog ______{user?.email}</h1>
        </div>
    );
};

export default Blogs;