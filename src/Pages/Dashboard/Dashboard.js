import React from 'react';

const Dashboard = () => {
    return (
        <div className='bg-gray-200 mt-10'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content text-center">
                    {/* <!-- Page content here --> */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe molestias magni! Ut adipisci facilis esse sunt saepe architecto officia.</p>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;