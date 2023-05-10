import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosEcommerce } from '../utils/configAxios'

export const Product = () => {

  const [product, setProduct] = useState()
  const {id} = useParams()



  useEffect(()=> {
      axiosEcommerce.get(`products/${id}`)
      .then(res => setProduct(res.data))
  }, [])

  return (
    <div>
      

    </div>
  )
}
