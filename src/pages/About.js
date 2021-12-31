import { Container } from 'react-bootstrap';
import Picture from '../components/Picture';
import BackBtn from '../components/BackBtn';
import LineAboutPage from '../components/LineAboutPage';

function About() {
  return (
    <div className='background2'>
      <BackBtn />
      <h1 className='about-me'>ABOUT ME</h1>
      <Container className='holder2'>
        <Picture src={require('./FACE2.png')} alt='face' />
        <h2 className='body animate2-enter'>
          👋 Hi, my name is Ella Uppal. <br /> I am a Computer Engineering
          student at the University of Waterloo.
          <br />
          <br />
          👾 I’m interested in Full-Stack Development, Machine Learning, and
          Artificial Intelligence.
          <br />
          <br />
          🌎 I am always looking to learn more and collaborate with passionate
          people!
          <br />
          <br />⭐ Currently seeking Fall 2022 Internships.
        </h2>
      </Container>
      <LineAboutPage />
      <h1 className='contact'>CONTACT</h1>
      <h2 className='contact-me'>
        Feel free to contact me at eauppal@uwaterloo.ca
      </h2>
    </div>
  );
}

export default About;
