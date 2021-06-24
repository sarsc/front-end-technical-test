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
} from '../index.styled'


export default function Home() {
  const [beerList, setBeerList] = useState([])

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
          <Link href="/beer">
            <a>Random Beer</a>
          </Link>
        </Nav>
        <Container>
          <BeerList>{beerList.map(b => (
            <BeerContainer>
              <img src={b.image_url} alt="beer" >
                {/* <Link href=""/> */}
              </img>
              <div>
                <BeerInfo key={b.id} >{b.name}</BeerInfo>
                <BeerInfo key={b.id} >{b.tagline}</BeerInfo>
              </div>
            </BeerContainer>
            ))}
          </BeerList>
        </Container>
      </React.Fragment>
    );
}
