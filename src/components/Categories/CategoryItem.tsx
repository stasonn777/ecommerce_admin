import React from 'react'
import { Edit, GridBox, Img, Remove } from '../../styles'

const CategoryItem = () => {
  return (
    <>
      <span><input type="checkbox" name="" id=""/></span>
      <span><Img src={`http://localhost:5000${featuredImg}`} alt=""/></span>
      <span>{title}</span>
      <span>{slug}</span>
      <span>{count}</span>
      <span><GridBox grid="auto auto" margin="0"><Remove onClick={onRemove}>Remove</Remove><Edit>Edit</Edit></GridBox></span>
    </>
  )
}

export default CategoryItem
