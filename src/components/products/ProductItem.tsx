import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductTypes } from '../../types/products'
import { Remove, Edit, GridBox } from '../../styles'
import { Img, SLink } from './styles'

const ProductItem = (state: ProductTypes) => {
  const { _id, title, featuredImg, brand, price, countInStock, categories, createdAt } = state
  const [createDate, setCreateDate] = useState('')

  const date = (propsDate: string) => {
    let currentDate = new Date(propsDate)
    const fd = currentDate.toDateString()
    setCreateDate(fd)
  }

  useEffect(() => {
    date(createdAt)
  })

  return (
    <>
      <span><input type="checkbox" name="" id=""/></span>
      <span><NavLink to={`/products/${_id}`} exact><Img src={featuredImg} alt=""/></NavLink></span>
      <span><SLink to={`/products/${_id}`}>{title}</SLink></span>
      <span>{countInStock}</span>
      <span>$ {price}</span>
      <span>{categories}</span>
      <span>{brand}</span>
      <span>{createDate}</span>
      <span><GridBox grid="auto auto" margin="0"><Remove>Remove</Remove><NavLink to={`/products/${_id}`} exact><Edit>Edit</Edit></NavLink></GridBox></span>
    </>
  )
}

export default ProductItem