import React from 'react';
import shop_img from '../assets/shop.jpg';
import { client } from '../utilities/config';
import { useHistory } from 'react-router';
const ShopCard = (props) => {
    const { shop, setP, toogleView } = props;
    const history = useHistory();
    const approve = () => {
        client
            .post('/admin/approve-shop', { shopId: shop._id })
            .then((res) => {
                console.log(res.data);
                setP((prev) => prev.filter((s) => s._id !== shop._id));
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.status === 401) {
                    localStorage.removeItem('admin_token');
                    history.push('/login');
                }
            });
    };
    const reject = () => {
        client
            .post('/admin/reject-shop', { shopId: shop._id })
            .then((res) => {
                console.log(res.data);
                setP((prev) => prev.filter((s) => s._id !== shop._id));
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.status === 401) {
                    localStorage.removeItem('admin_token');
                    history.push('/login');
                }
            });
    };
    return (
        <div className="w-2/3 h-40 bg-slate-100 rounded m-2">
            <div className="flex flex-row">
                <img src={shop_img} alt="" className="h-40 rounded-l aspect-square" />
                <div className="flex flex-col p-2 align-middle">
                    <div onClick={() => toogleView(true)} className="text-ellipsis text-lg font-semibold hover:text-blue-500 cursor-pointer">
                        {shop.basic_info.name}
                    </div>
                    <div>Owner Name: {shop.basic_info.owner_name}</div>
                    <div>Category: {shop.basic_info.category}</div>
                    <div className="flex flex-row p-2 justify-between">
                        <div onClick={approve} className="w-20 h-8 rounded pt-0.5 bg-blue-600 text-white text-center cursor-pointer hover:bg-blue-700">
                            Approve
                        </div>
                        <div onClick={reject} className="w-20 h-8 rounded pt-0.5 bg-red-600 text-white text-center cursor-pointer hover:bg-red-700">
                            Reject
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
