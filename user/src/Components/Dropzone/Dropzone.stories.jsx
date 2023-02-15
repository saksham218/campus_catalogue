import Dropzone from "./Dropzone";

export default {
    title: 'Dropzone',
    component: Dropzone,
    parameters: {
        layout: 'centered',
    },
}

export const drop = () => <Dropzone/>