import React, { ChangeEvent } from 'react'
import { useActions } from '../../hooks/useActions'
import { GridBox, Add, Edit, Section, Input } from '../../styles'
import { FormWrapper, H3 } from './styles'

interface Props {
  featuredImg: string
  brand: string
  price: string
  newPrice: string
  countInStock: 0
  categories: string[]
}

const Aside = ({countInStock, categories, brand, price, newPrice, featuredImg} : Props) => {

  const { createProduct } = useActions()

  const setData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const data = { [e.target.name]: e.target.value }
    createProduct(data)
  }

  return (
    <Section width='25%'>
      <FormWrapper>
        <GridBox grid="auto auto" margin="20px">
          <Add>Save</Add>
          <Edit>Publish</Edit>
          <a href="">Remove</a>
        </GridBox>
        <label htmlFor="brand">Brand</label>
        <Input onChange={setData} type="text" name="brand" placeholder="Brand" value={brand} />
        <GridBox grid="auto auto" margin="20px">
          <div><label htmlFor="price">Standart Price</label>
            <Input onChange={setData} type="text" name="price" placeholder="Standart Price" value={price} /></div>
          <div><label htmlFor="new_price">New Price</label>
            <Input onChange={setData} type="text" name="newPrice" placeholder="New Price" value={newPrice}/></div>
        </GridBox>
        <label htmlFor="stock">In stock</label>
        <Input onChange={setData} type="number" name="stock" placeholder="In stock" value={countInStock} />
        <H3>Featured image</H3>
        <img src={featuredImg} alt="" />
        <Add>Set image</Add>
      </FormWrapper>
    </Section>
  )
}

export default Aside
