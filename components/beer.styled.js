import styled from 'styled-components'

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
   width: 10%;
    @media (min-width: 768px) {
      margin-right: 50px;
    }
  }
`
export const BeerInfo =  styled.div`
  padding: 20px;
  font-size: 18px;
`