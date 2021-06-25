import React, { useState, useEffect }from 'react'
import Link from 'next/link'

import Beer from './beer'

import {
  Title,
  Container,
  BeerList,
  BeerContainer,
  BeerInfo,
  Nav,
  Button
} from '../index.styled'


export default function Home() {
  const [beerList, setBeerList] = useState([])
  const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers').
      then(res => {
        return res.json()
      })
      .then((data) => {
        setBeerList(data)
      })
    }, [])

    return (
      <React.Fragment>
        <Nav>
          <Title>Punk Api</Title>
        </Nav>
        <Container>
          <Button
            buttonType="randomBeer"
          >
            <Link href="/randomBeer">
              Random Beer
            </Link>
          </Button>
          <BeerList>{beerList.map(beer => (
            <BeerContainer>
              <img src={beer.image_url} alt="beer" />
              <div>
                <BeerInfo key={beer.id} >{beer.name}</BeerInfo>
                <BeerInfo key={beer.id} >{beer.tagline}</BeerInfo>
                <Button
                  onClick={() => setSelectedBeer(beer.id)}
                >
                 <Link href={{
                   pathname: "/beer",
                   state: {
                     selectedBeer
                   }
                 }}>Go to Beer</Link>
                </Button>
              </div>
            </BeerContainer>
            ))}
          </BeerList>
        </Container>
      </React.Fragment>
    );
}
