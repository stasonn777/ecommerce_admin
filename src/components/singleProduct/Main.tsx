import React, { ChangeEvent } from 'react'
import { useActions } from '../../hooks/useActions'
import { GridBox, Add, Input, Section, Select, TextArea } from '../../styles'
import { SingleProductTypes } from '../../types/singleProduct'
import { FormWrapper, H3 } from './styles'

interface Props {
  title: string
  description: string
  options: {
    color: string
    size: string
    others: { key: string; value: string }[]
  }[]
}

const Main = ({ title, description, options }: Props) => {
  const { createProduct } = useActions()

  const setData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const data = { [e.target.name]: e.target.value }
    createProduct(data)
  }

  return (
    <Section width="75%">
      <FormWrapper>
        <Input onChange={setData} type="text" name="title" placeholder="Title" value={title} />
        <TextArea onChange={setData} rows={10} name="description" placeholder="Description" value={description} />
        <H3>Options</H3>
        <GridBox grid="auto auto auto" margin="20px">
          <Select onChange={setData} name="color">
            <option value="balack">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </Select>
          <Input onChange={setData} type="text" name="size" placeholder="Size" />
          <Add style={{ marginBottom: "20px" }}>Add Option</Add>
        </GridBox>
      </FormWrapper>
    </Section>
  )
}

export default Main
