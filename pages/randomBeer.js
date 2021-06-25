import React, { useState, useEffect }from 'react'
import Beer from "../components/Beer";

import {
  Title,
  Container,
} from '../index.styled'


export default () => {
  const [randomBeer, setRandomBeer] = useState([])

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/random').
    then(res => {
      return res.json()
    })
    .then((data) => {
      setRandomBeer(data[0])
    })
  }, [])

  return (
    <React.Fragment>
      <Title>Punk Api</Title>
      <Container>
        <Beer selectedBeer={randomBeer}/>
      </Container>
    </React.Fragment>
  );
}
