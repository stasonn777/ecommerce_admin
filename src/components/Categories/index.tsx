import React from 'react'
import { NavLink } from 'react-router-dom'
import { Create, Grid, Header, Section, Wrapper } from '../../styles'

const Categories = () => {
  return (
    <Wrapper>
      <Section width="60%">

        <Grid>
          <span><input type="checkbox" name="" id="" /></span>
          <span>Img</span>
          <span>Title</span>
          <span>In stock</span>
          <span>Price</span>
          <span>Category</span>
          <span>Brand</span>
          <span>Date</span>
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
