import styled, { createGlobalStyle, css } from 'styled-components'
import { NavLink } from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
  body {
    background: #eff3f6;
  }
  .main {
      display: flex;
  }
  label {
    display: inline-block;
    margin-bottom: .5rem;
    font-size: 14px;
    color: #686c71;
    font-weight: 400;
  }
  input[type="file"] {
    display: none;
  }
`

const ButtonGroup = css`
  padding: 10px 20px;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-size: 14px;
  color: #fff;
  background-color: #f44336;
  border-color: #f33527;
  font-weight: 400;
  box-shadow: 0 0 7px 0 rgb(244 67 54 / 56%), 0 0 10px 2px rgb(244 67 54 / 20%);
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    outline: 0;
    background-color: #bd1b0f;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`

export const Remove = styled.button`
  ${ButtonGroup}
`
export const Edit = styled.button`
  ${ButtonGroup}
  background-color: #00acc1;
  border-color: #009eb2;
  box-shadow: 0 0 7px 0 rgb(0 172 193 / 56%), 0 0 10px 2px rgb(0 172 193 / 20%);
  &:hover {
    background-color: #00899a;
  }
  &:focus {
    background-color: #00899a;
  }
`
export const Create = styled.button`
  ${ButtonGroup}
  margin-left: 20px;
  background-color: #00acc1;
  border-color: #009eb2;
  box-shadow: 0 0 7px 0 rgb(0 172 193 / 56%), 0 0 10px 2px rgb(0 172 193 / 20%);
  &:hover {
    background-color: #00899a;
  }
  &:focus {
    background-color: #00899a;
  }
`
export const Add = styled.button`
  ${ButtonGroup}
  color: #37474f;
  background-color: #eceff1;
  border-color: #e3e8eb;
  box-shadow: none;
  &:hover {
    background-color: #d6dce1;
    border-color: #cfd6db;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(141 141 141 / 50%);
  }
`
export const Label = styled.label`
  ${ButtonGroup}
  color: #37474f;
  background-color: #eceff1;
  border-color: #e3e8eb;
  box-shadow: none;
  &:hover {
    background-color: #d6dce1;
    border-color: #cfd6db;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(141 141 141 / 50%);
  }
`
export const Container = styled.div`
  position: relative;
  display: block;
  padding: 25px;
  width: 100%;
`

interface Props {
  width: string
}
export const Section = styled.div<Props>`
  background-color: #fff;
  box-shadow: 0 0 0 1px #e2e5e8;
  margin-bottom: 30px;
  transition: all 0.5s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: ${(p) => p.width};
`
export const Wrapper = styled.div`
  display: inline-flex;
  gap: 12px;
  width: 100%;
`
const InputGroup = css`
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background: #eff3f6;
  padding: 10px 20px;
  font-size: 14px;
  height: auto;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border-color: #1796b8;
    box-shadow: 0 0 5px 0 rgb(17 164 227 / 56%),
      0 0 5px 2px rgb(44 150 183 / 72%);
  }
`
export const Input = styled.input`
  ${InputGroup}
`
export const Select = styled.select`
  ${InputGroup}
`
export const TextArea = styled.textarea`
  ${InputGroup}
  max-width: 100%;
`

interface GridProps {
  grid: string
  margin: string
}
export const GridBox = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(p) => p.grid};
  margin-bottom: ${(p) => p.margin};
  grid-gap: 20px;
`
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
