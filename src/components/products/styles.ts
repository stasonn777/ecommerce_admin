import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  background-color: transparent;
  padding: 20px 25px;
  position: relative;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr 1fr 2fr 1fr 2fr 3fr;
  border-top: 1px solid #e2e5e8;
  border-right: 1px solid #e2e5e8;
  & > span {
    padding: 1.05rem 0.75rem;
    border-bottom: 1px solid #e2e5e8;
    display: flex;
    align-items: center;
  }
`
export const Img = styled.img`
  width: 50px;
`
export const SLink = styled(NavLink)`
  text-decoration: none;
  color: #686c71;
  font-size: 16px;
`
