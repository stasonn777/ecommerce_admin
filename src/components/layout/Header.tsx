import styled from 'styled-components'

const Div = styled.div`
  background: #242e3e;
  padding: 10px;
  border-bottom: 0.5px solid #181924;
`
const H1 = styled.h1`
  color: #fff;
  font-size: 24px;
`

const Header = () => {
  return (
    <Div>
      <H1>Shop admin panel</H1>
    </Div>
  )
}

export default Header
