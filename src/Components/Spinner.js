import React from 'react'
import Loader from '../Asessts/loader.gif';
const Spinner = ()=>{
  
        return (
            <div className = 'contianer text-center my-3'>

             <img src={Loader} alt="Loading" />
            </div>
        )
}
export default  Spinner;
