import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'0c90e592fcc147f4ab057f12ecaab136'
    }
})
