import styled from 'styled-components'


export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;

`
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px;

  border-bottom: 1px solid black;

  a {
    position: absolute;
    right: 40px;
    background-color: #e68217;
    padding: 8px 6px;
    border-radius: 4px;
    text-decoration: none; 
  }
`
export const BeerList = styled.div`
  display: grid;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 50%;
  color: black;
  `
export const BeerContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;

  img {
   width: 50px;
   margin-right: 50px;
  }
`
export const BeerInfo =  styled.div`
  padding: 20px;
  font-size: 18px;
`