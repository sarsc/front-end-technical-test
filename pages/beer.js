import React, { useState, useEffect }from 'react'
import {
  Title,
  Container,
  BeerContainer,
  BeerInfo,
} from '../index.styled'


export default function Beer() {
  const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers/random').
      then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setRandomBeer(data[0])
      })
    }, [])

    return (
      <React.Fragment>
        <Title>Punk Api</Title>
        <Container>
            <BeerContainer>
              <img src={randomBeer.image_url} alt="beer" />
              <div>
                <BeerInfo key={randomBeer.id} >{randomBeer.name}</BeerInfo>
                <BeerInfo key={randomBeer.id} >{randomBeer.tagline}</BeerInfo>
              </div>
            </BeerContainer>
        </Container>
      </React.Fragment>
    );
}
