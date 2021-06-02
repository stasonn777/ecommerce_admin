import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Aside = styled.div`
  width: 264px;
  height: 100vh;
  top: 0;
  background: #242e3e;
  color: #b5bdca;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 30px;
`
const Nav = styled(NavLink)`
  text-align: left;
  padding: 20px 10px 20px 20px;
  margin: 5px 0 0;
  display: block;
  border-radius: 0;
  position: relative;
  color: #b5bdca;
  text-decoration: none;
  background-color: transparent;
  &.active {
    background: hsla(0,0%,100%,.05);
  }
`

const Sidebar = () => {
  return (
    <Aside>
      <Ul>
        <li><Nav to="/" exact>Home</Nav></li>
        <li><Nav to="/products" exact>Products</Nav></li>
        <li><Nav to="/categories" exact>Categories</Nav></li>
      </Ul>
    </Aside>
  )
}

export default Sidebar
