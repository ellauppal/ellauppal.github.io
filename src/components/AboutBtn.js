
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './../history';

function AboutBtn() {
  return (
    <div>
      <button className='btn' onClick={() => history.push('/about')}>
        ABOUT ME
      </button>
    </div>
  );
}

export default AboutBtn;