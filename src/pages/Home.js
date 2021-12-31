import AboutBtn from '../components/AboutBtn';
import LinkedinBtn from '../components/LinkedinBtn';
import GitBtn from '../components/GitBtn';
import Line from '../components/Line';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className='background1'>
      <Line />
      <h1 className='name animate-enter'>ELLA UPPAL</h1>
      <h2 className='ce animate-enter'>1B COMPUTER ENGINEERING</h2>
      <Line />
      <Container className='holder'>
        <AboutBtn />
        <LinkedinBtn />
        <GitBtn />
      </Container>
    </div>
  );
}

export default Home;

// <h2 >1B COMPUTER ENGINEERING</h2>
