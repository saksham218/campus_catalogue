import Checkout from './checkout';


export default{

    title: 'Checkout',
    component: Checkout,
    parameters: {
        layout: 'centered',
    },
}

export const Pay = () => <Checkout />