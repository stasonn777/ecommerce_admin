import React, { ChangeEvent } from 'react'
import { Input, FormWrapper, Select, TextArea, Label, FeaturedImg, H3 } from '../../styles'
import { CategoryTypes } from '../../types/singleCategory'

interface Props {
  state: CategoryTypes
  categories: CategoryTypes[]
  setCategoryFields: (data: {} ) => void
  setCategoryFuturedImage: any
}

const CategorySingle = ({state, setCategoryFields, setCategoryFuturedImage, categories}: Props) => {

  const {name, description, image, slug, parent} = state

  const onChangeData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const data = { [e.target.name]: e.target.value }
    setCategoryFields(data)
  }

  const setImage = (e: any) => {
    setCategoryFuturedImage(e.target.files[0])
  }

  const selectOptions = categories.map(c => <option value={c.name}>{c.name}</option>)

  return (
    <FormWrapper>
      <label htmlFor="name">Category Name</label>
      <Input onChange={onChangeData} type="text" name="name" value={name} />
      <label htmlFor="slug">Category Slug</label>
      <Input onChange={onChangeData} type="text" name="slug" value={slug} />
      <label htmlFor="parent">Parent Category</label>
      <Select onChange={onChangeData} name="parent" id="" value={parent}>
        <option value="">None</option>
        {selectOptions}
      </Select>
      <label htmlFor="description">Description</label>
      <TextArea onChange={onChangeData} rows={5} name="description" value={description} />
      <H3>Featured image</H3>
        {image !== '' && <FeaturedImg src={`http://localhost:5000${image}`} alt="" />}
        <Label>
          <input type="file" onChange={setImage}/>
          Upload Image
        </Label>
    </FormWrapper>
  )
}

export default CategorySingle
