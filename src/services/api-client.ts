import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c2c4ee7056c24182896fe0fd71055121'
    }
});