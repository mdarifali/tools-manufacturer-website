import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://radiant-plains-16562.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            });

    }, [products])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const url = `https://radiant-plains-16562.herokuapp.com/products/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            }
        })
    }


    return (
        <div className='p-10'>
            <h1 className='text-center text-4xl uppercase py-5'>Manage All Products</h1>
            <div className="overflow-x-auto w-full">

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>SL</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map((product, index) =>
                                    <tr key={product._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>${product.price}</span>
                                        </td>
                                        <td>
                                            <span>{product.stock}</span>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDelete(product._id)} className="btn btn-primary btn-xs">Delete</button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SL</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
            </div>
        </div>
    );
};

export default ManageProducts;