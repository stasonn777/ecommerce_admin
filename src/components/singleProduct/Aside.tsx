import React, { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GridBox, Add, Edit, Section, Input, Label } from '../../styles'
import { FeaturedImg, FormWrapper, H3 } from './styles'

interface Props {
  postProduct: any
}

const Aside = ({ postProduct}: Props) => {
  const [filename, setFilename] = useState('Choose file')
  const { countInStock, brand, price, newPrice, featuredImg, _id } = useTypedSelector(state => state.singleProduct)
  const { setProductFields, removeProduct, setProductFuturedImage } = useActions()

  const setData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const data = { [e.target.name]: e.target.value }
    setProductFields(data)
  }

  const onRemove = () => {
    removeProduct(_id)
  }

  const onSetImage = (e: any) => {
    setProductFuturedImage(e.target.files[0])
  }

  return (
    <Section width='25%'>
      <FormWrapper>
        <GridBox grid="auto auto" margin="20px">
          <Add onClick={postProduct}>Save</Add>
          <Edit>Publish</Edit>
          <NavLink onClick={onRemove} to='/products'>Remove</NavLink>
        </GridBox>
        <label htmlFor="brand">Brand</label>
        <Input onChange={setData} type="text" name="brand" placeholder="Brand" value={brand} />
        <GridBox grid="auto auto" margin="20px">
          <div><label htmlFor="price">Standart Price</label>
            <Input onChange={setData} type="text" name="price" placeholder="Standart Price" value={price} /></div>
          <div><label htmlFor="new_price">New Price</label>
            <Input onChange={setData} type="text" name="newPrice" placeholder="New Price" value={newPrice} /></div>
        </GridBox>
        <label htmlFor="stock">In stock</label>
        <Input onChange={setData} type="number" name="countInStock" placeholder="In stock" value={countInStock} />
        <H3>Featured image</H3>
        {featuredImg !== '' && <FeaturedImg src={`http://localhost:5000${featuredImg}`} alt="" />}
        {filename}
        <Label>
          <input type="file" onChange={onSetImage}/>
          Upload Image
        </Label>
      </FormWrapper>
    </Section>
  )
}

export default Aside
