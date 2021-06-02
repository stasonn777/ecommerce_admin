import React from 'react'
import { NavLink } from 'react-router-dom'
import { Create, Grid, Header, Section, Wrapper } from '../../styles'

const Categories = () => {
  return (
    <Wrapper>
      <Section width="60%">
        <Grid columns="1fr 1fr 4fr 2fr 1fr">
          <span><input type="checkbox" name="" id="" /></span>
          <span>Img</span>
          <span>Title</span>
          <span>Slug</span>
          <span>Count</span>
          <span></span>
          {/* {showProducts} */}
        </Grid>
      </Section>
      <Section width='40%'>
        <Header>
          <NavLink onClick={() => { }} to="/new-product"><Create>Create New Category</Create></NavLink>
          
        </Header>
      </Section>
    </Wrapper>
  )
}

export default Categories
