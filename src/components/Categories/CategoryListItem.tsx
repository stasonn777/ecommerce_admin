import React from 'react'
import { Edit, GridBox, Img, Remove } from '../../styles'
import { CategoryTypes } from '../../types/singleCategory'

interface Props {
  state: CategoryTypes
  fetchForEdit: (_id: string) => void
  removeCategory: (_id: string) => void
}

const CategoryItem = ({state, fetchForEdit, removeCategory}: Props) => {
  const {_id, name, image, products, slug} = state

  const onEdit = () => {
    fetchForEdit(_id)
  }
  const onRemove = () => {
    removeCategory(_id)
  }
  
  return (
    <>
      <span><input type="checkbox" name="" id=""/></span>
      <span><Img src={`http://localhost:5000${image}`} alt=""/></span>
      <span>{name}</span>
      <span>{slug}</span>
      <span>{products.length}</span>
      <span><GridBox grid="auto auto" margin="0"><Remove onClick={onRemove}>Remove</Remove><Edit onClick={onEdit}>Edit</Edit></GridBox></span>
    </>
  )
}

export default CategoryItem
