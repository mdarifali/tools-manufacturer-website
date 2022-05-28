import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20 bg-slate-300'>
           <div className='card-body'>
                <div className='my-2'>
                    <h1 className='text-2xl my-2'>How will you improve the performance of a React Application?</h1>
                    <p>1. Keeping component state local where necessary</p>
                    <p>2. Memoizing React components to prevent unnecessary re-renders</p>
                    <p>3. Code-splitting in React using dynamic</p>
                    <p>4. Windowing or list virtualization in React applications</p>
                    <p>5. Lazy loading images in React</p>
                </div>
                <div className='my-2'>
                    <h1 className='text-2xl my-2'>What are the different ways to manage a state in a React application?</h1>
                    <p>Local (UI) state – Local state is data we manage in one or another component.</p>
                    <p>Server state – Data that comes from an external server that must be integrated with our UI state.</p>
                    <p>URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
                <div className='my-2'>
                    <h1 className='text-2xl my-2'>What are the different ways to manage a state in a React application?</h1>
                    <p> 
                        JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, <br />
                         meaning that objects and methods can be shared, extended, and copied.
                        Sharing amid objects makes for easy inheritance <br />
                         of structure (data fields), behavior (functions / methods), and state (data values).
                    </p>
                </div>
                <div className='my-2'>
                    <h1 className='text-2xl my-2'>What is a unit test? Why should write unit tests?</h1>
                    <p>
                        A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. <br /> The next step is for the test cases and scripts to be made, then the code is tested.
                    </p>
                </div>
                <div className='my-2'>
                    <h1 className='text-2xl my-2'>You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p>
                    The array of Objects the name itself suggests that it stores an array of objects. Unlike the traditional array stores values like String, integer, Boolean, etc an Array of Objects stores objects that mean objects are stored as elements of an array. Note that when we say Array of Objects it is not the object itself that is stored in the array but the reference of the object.
                    </p>
                </div>
                <div className='my-2'>
                    <h1 className='text-2xl my-2'>Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h1>
                    <span>
                        products = [...] this use  only for use, when any data array of object or array copy and set for state.
                    </span>
                    
                </div>
           </div>
        </div>
    );
};

export default Blogs;