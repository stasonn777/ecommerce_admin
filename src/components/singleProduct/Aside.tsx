import { ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GridBox, Add, Edit, Section, Input, Label, FormWrapper, FeaturedImg, H3 } from '../../styles'
import { CategoryTypes } from '../../types/singleCategory'

interface Props {
  postProduct: () => void
  updateCurrentProduct: () => void
  allCategories: CategoryTypes[]
}

const Aside = ({ postProduct, updateCurrentProduct, allCategories }: Props) => {
  const { countInStock, brand, price, newPrice, featuredImg, _id, categories } = useTypedSelector(state => state.singleProduct)
  const { setProductFields, removeProduct, setProductFuturedImage } = useActions()

  const setData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    let data = {}
    if (e.target.name !== 'categories') {
      data = { [e.target.name]: e.target.value }
    } else {
      const newCats = categories.filter(c => c === e.target.id)
      console.log(newCats)
      
      categories.push(e.target.id)
      data = { [e.target.name]: categories }
    }

    setProductFields(data)
  }

  const onRemove = () => {
    removeProduct(_id)
  }

  const onSetImage = (e: any) => {
    setProductFuturedImage(e.target.files[0])
  }

  const checkCategories = allCategories.map(c => 
  <div key={c._id}>
    <input onChange={setData} id={c._id} type="checkbox" name="categories" value={c.name} />
    <label htmlFor={c.name} checked>{c.name}</label>
  </div>)

  return (
    <Section width='25%'>
      <FormWrapper>
        <GridBox grid="auto auto" margin="20px">
          {_id ? <Add onClick={updateCurrentProduct}>Update</Add> : <Add onClick={postProduct}>Save</Add>}
          {/* <Add onClick={postProduct}>Save</Add>
          <Add onClick={updateCurrentProduct}>Update</Add> */}
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
        <label htmlFor="stock">Category</label>
        <div>
          {checkCategories}
        </div>
        <label htmlFor="stock">In stock</label>
        <Input onChange={setData} type="number" name="countInStock" placeholder="In stock" value={countInStock} />
        <H3>Featured image</H3>
        {featuredImg !== '' && <FeaturedImg src={`http://localhost:5000${featuredImg}`} alt="" />}
        Choose file
        <Label>
          <input type="file" onChange={onSetImage} />
          Upload Image
        </Label>
      </FormWrapper>
    </Section>
  )
}

export default Aside
