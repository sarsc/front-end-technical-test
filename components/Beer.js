import {
  BeerContainer,
  BeerInfo,
} from './beer.styled'

export default ({ selectedBeer }) => {
  const {
    image_url,
    id,
    name,
    abv,
    description,
    tagline,
  } = selectedBeer

  return (
    <BeerContainer>
      <img src={image_url} alt="beer" />
      <div>
        <BeerInfo key={id} >{name}</BeerInfo>
        <BeerInfo key={id} > <span>ABV:</span> {abv}%</BeerInfo>
        <BeerInfo key={id} >{description}</BeerInfo>
        <BeerInfo key={id} >
          <p>Why not try this?</p>
          {tagline}
        </BeerInfo>
      </div>
  </BeerContainer>
  )
}