import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import ShopCard from '../components/ShopCard';
import { Backend_URL, client } from '../utilities/config';

const Home = () => {
    const [admin, setAdmin] = useState({ name: '', email: '' });
    const [pending, setPending] = useState([]);
    const [approved, setApproved] = useState([]);
    const [index, setIndex] = useState(0);
    const [shopVisible, setShopVisible] = useState(false);
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const demo_Shop = {
        _id: 'Demo ID',
        basic_info: {
            name: 'Demo Shop',
            owner_name: 'Demo owner',
            email: 'demo@demo.com',
            phone: '0123456789',
            map_coordinates: {
                lat: '11.11',
                lon: '22.22'
            },
            default_timings: {
                open: 12345,
                close: 54321
            },
            image: null, //TODO: check encoding
            category: 'Canteen'
        }
    };
    const [shop, setShop] = useState(demo_Shop);
    const create = async (e) => {
        e.preventDefault();
        axios
            .post(`${Backend_URL}/admin/register`, { name, email, password })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    alert('Admin Created');
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('admin_token');
        history.push('/login');
    };
    useEffect(() => {
        client
            .get(`${Backend_URL}/admin`)
            .then((res) => {
                setAdmin(res.data.admin);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.status === 401) {
                    localStorage.removeItem('admin_token');
                    history.push('/login');
                }
            });

        client
            .get(`${Backend_URL}/admin/pending-shops`)
            .then((res) => {
                setPending(res.data.shops);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.status === 401) {
                    localStorage.removeItem('admin_token');
                    history.push('/login');
                }
            });

        client
            .get(`${Backend_URL}/admin/approved-shops`)
            .then((res) => {
                setApproved(res.data.shops);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.status === 401) {
                    localStorage.removeItem('admin_token');
                    history.push('/login');
                }
            });
    }, []);

    return (
        <div>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <div class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AdminPanel</span>
                    </div>
                    <div class="flex items-center">
                        <div class="mr-6 text-sm font-medium text-gray-500 dark:text-white">{`Welcome ${admin.name}`}</div>
                        <div onClick={logout} class="cursor-pointer text-sm font-medium text-blue-600 dark:text-blue-500">
                            Logout
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li onClick={() => setIndex(0)}>
                                <div class={`text-gray-900 dark:text-white cursor-pointer ${index === 0 ? 'bg-gray-900' : ''} p-2 rounded-full`}>Pending Shops</div>
                            </li>
                            <li onClick={() => setIndex(1)}>
                                <div class={`text-gray-900 dark:text-white cursor-pointer ${index === 1 ? 'bg-gray-900' : ''} p-2 rounded-full`}>Approved Shops</div>
                            </li>
                            <li onClick={() => setIndex(2)}>
                                <div class={`text-gray-900 dark:text-white cursor-pointer ${index === 2 ? 'bg-gray-900' : ''} p-2 rounded-full`}>Profile</div>
                            </li>
                            <li onClick={() => setIndex(3)}>
                                <div class={`text-gray-900 dark:text-white cursor-pointer ${index === 3 ? 'bg-gray-900' : ''} p-2 rounded-full`}>Add Admin</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {index === 0 && !shopVisible && (
                <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    {pending.map((shop) => (
                        <ShopCard shop={shop} key={shop._id} toogleView={setShopVisible} />
                    ))}
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                </div>
            )}
            {index === 1 && !shopVisible && (
                <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    {approved.map((shop) => (
                        <ShopCard shop={shop} key={shop._id} toogleView={setShopVisible} />
                    ))}
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                    <ShopCard shop={demo_Shop} toogleView={setShopVisible} />
                </div>
            )}
            {index === 2 && !shopVisible && <div>Profile</div>}
            {index === 3 && !shopVisible && (
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-purple-600 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">Create Admin</h1>
                        <form className="mt-6">
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={create}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {shopVisible && (
                <div class="flex flex-col justify-center items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <div>{shop.basic_info.name}</div>
                    <div>{shop.basic_info.owner_name}</div>
                    <div>{shop.basic_info.email}</div>
                    <div>{shop.basic_info.phone}</div>
                    <div>{shop.basic_info.category}</div>
                    <div>{shop.basic_info.map_coordinates.lat}</div>
                    <div>{shop.basic_info.map_coordinates.lon}</div>
                    <div>{shop.basic_info.default_timings.open}</div>
                    <div>{shop.basic_info.default_timings.close}</div>
                </div>
            )}
        </div>
    );
};

export default Home;
