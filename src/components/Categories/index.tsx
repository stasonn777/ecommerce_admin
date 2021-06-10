import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Create, Grid, Header, Section, Wrapper } from '../../styles'
import { CategoryTypes } from '../../types/singleCategory'
import Spinner from '../layout/Spinner'
import CategoryItem from './CategoryListItem'
import CategorySingle from './CategorySingle'

const Categories: React.FC = () => {

  const { categories, loading, error } = useTypedSelector(state => state.categories)
  const { ...category } = useTypedSelector(state => state.category)
  const { fetchCategories, fetchSingleCategory, deleteCategory, setCategoryFields, setCategoryFuturedImage, postNewCategory } = useActions()

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line
  }, [])

  const fetchForEdit = (id: string) => {
    fetchSingleCategory(id)
  }

  const removeCategory = (id: string) => {
    deleteCategory(id)
  }

  const postCategory = () => {
    postNewCategory(category)
  }

  const categoriesList = categories.map(item => <CategoryItem key={item._id} state={item} fetchForEdit={fetchForEdit} removeCategory={removeCategory} />)

  if (loading) { return <Spinner /> }
  if (error) { return <h1>{error}</h1> }

  return (
    <Wrapper>
      <Section width="60%">
        <Grid columns="1fr 1fr 4fr 2fr 1fr 1fr">
          <span><input type="checkbox" name="" id="" /></span>
          <span>Img</span>
          <span>Title</span>
          <span>Slug</span>
          <span>Count</span>
          <span></span>
          {categoriesList}
        </Grid>
      </Section>
      <Section width='40%'>
        <CategorySingle state={category} setCategoryFields={setCategoryFields} setCategoryFuturedImage={setCategoryFuturedImage} categories={categories}/>
        <Header>
          <Create onClick={postCategory}>Create New Category</Create>
        </Header>
      </Section>
    </Wrapper>
  )
}

export default Categories
