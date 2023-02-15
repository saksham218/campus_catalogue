import Cards from "./Cards";

export default {
    title: 'cards',
    component: Cards,
    parameters: {
        layout: 'centered',
    },
}

export const card = () => <Cards shopname="ajanta" shoptype="footwear" />