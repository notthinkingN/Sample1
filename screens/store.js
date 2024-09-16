import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./screens";
import ProductReducer from "./ProductReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
})