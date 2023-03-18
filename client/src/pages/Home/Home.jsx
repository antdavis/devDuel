import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import VerticalLine from '../../components/verticalLine'
import { StyledHome, HomeTitle, ButtonWrapper, ParagraphWrapper } from './Home.styles'


const Home = () => {
  return (
    <StyledHome>
      <HomeTitle>
        Welcome to Dev-Duel
      </HomeTitle>
      <ButtonWrapper>
        <Link to='/inspect'>
          <Button>Inspect</Button>
        </Link>
        <VerticalLine />
        <Link to='/duel'>
          <Button to={'/duel'}>Duel</Button>
        </Link>
      </ButtonWrapper>
      <ParagraphWrapper>
        <p style={{
          width: '50%',
          marginRight: '5px'
        }}>
          Look up a fellow dev's Github info.
        </p>
        <p style={{
          width: '50%',
          marginLeft: '5px'
        }}>
          Pick two devs to go head to head.
        </p>
      </ParagraphWrapper>
    </StyledHome >
  )
}

export default Home