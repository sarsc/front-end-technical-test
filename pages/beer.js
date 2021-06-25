import React, { useState, useEffect }from 'react'
import Beer from "../components/Beer";

import {
  Title,
  Container,
} from '../index.styled'


export default () => {
  const [selectedBeer, setSelectedBeer] = useState([])

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/8').
    then(res => {
      return res.json()
    })
    .then((data) => {
      setSelectedBeer(data[0])
    })
  }, [])

  return (
    <React.Fragment>
      <Title>Punk Api</Title>
      <Container>
          <Beer selectedBeer={selectedBeer}/>
      </Container>
    </React.Fragment>
  );
}
