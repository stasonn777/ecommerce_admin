import React, { ChangeEvent } from 'react'
import { useActions } from '../../hooks/useActions'
import { GridBox, Add, Input, Section, TextArea, Select, FormWrapper, H3 } from '../../styles'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {v4 as uuidv4} from 'uuid'

const Main = () => {
  const { title, description, color, size, options } = useTypedSelector(state => state.singleProduct)
  const { setProductFields, setProductOptions, setOptionsFields } = useActions()

  const onChangeData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const data = { [e.target.name]: e.target.value }
    setProductFields(data)
  }
  
  const addOption = () => {
    const result = prompt('Enter field name')
    result !== '' && result !== null? setProductOptions({id: uuidv4(), name: result, value: '', type: 'text'}) 
    :
    alert('Please enter name')
  }

  const onChangeOptions = (e: any, item: any) => {
     setOptionsFields({ ...item, value: e.target.value })
  }  

  return (
    <Section width="75%">
      <FormWrapper>
        <Input onChange={onChangeData} type="text" name="title" placeholder="Title" value={title} />
        <TextArea onChange={onChangeData} rows={10} name="description" placeholder="Description" value={description} />
        <H3>Options</H3>
        <GridBox grid="auto auto auto" margin="20px">
          <div>
            <label htmlFor="color">Color</label>
            <Select onChange={onChangeData} name="color" value={color}>
              <option disabled>Choose Color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Grey">Grey</option>
            </Select>
          </div>
          <div>
            <label htmlFor="size">Size</label>
            <Input onChange={onChangeData} type="text" name="size" placeholder="Size" value={size} />
          </div>
          {options.map((item) => <div key={item.id}>
            <label htmlFor={item.name}>{item.name}</label>
            <Input onChange={e => onChangeOptions(e, item)} type="text" name={item.name} placeholder={item.name} value={item.value} />
          </div>)}
          <Add onClick={addOption} style={{ marginBottom: "20px", marginTop: '25px' }}>Add Option</Add>
        </GridBox>
      </FormWrapper>
    </Section>
  )
}

export default Main
