import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./FormData-slice";

const store=configureStore({
    reducer:{
        formkey:formreducer,
    }
})
export default store;
