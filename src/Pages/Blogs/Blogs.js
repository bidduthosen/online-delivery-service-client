import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('blogs');
    return (
        <div className='my-12'>
            <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">Questions</div>
            <div className="card w-4/5 mx-auto bg-zinc-300	 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">1. Difference between SQL and NoSQL?</h2>
                    <p><strong>Answer:</strong> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto bg-zinc-300	 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">2. What is JWT, and how does it work?</h2>
                    <p><strong>Answer:</strong> What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto bg-zinc-300	 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">3. What is the difference between javascript and NodeJS?</h2>
                    <p><strong>Answer:</strong> avaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto bg-zinc-300	 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">4. How does NodeJS handle multiple requests at the same time?</h2>
                    <p><strong>Answer:</strong> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;