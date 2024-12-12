import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fireDB } from '../../firebase/FirebaseConfig';

function OrderDetailing() {
    const{id}=useParams();
    const[order,setOrder]=useState();
    

    const getOrder=async()=>{
        try {
            console.log( getDoc(doc(fireDB,"order",id)))
            const orderTemp=await getDoc(doc(fireDB,"order",id));
            console.log({...orderTemp.data(),id:orderTemp.id});
            setOrder({...orderTemp.data(),id:orderTemp.id})
        } catch (error) {
            console.log(error)
        }
    }
    console.log(order)
    useEffect(() => {
        getOrder()

    }, [])
  return (
    <div>
      <div>{id}</div>
    </div>
  )
}

export default OrderDetailing
