import 'bootstrap/dist/css/bootstrap.min.css';
import history from './../history';
import classes from './AboutBtn.module.css';

function AboutBtn() {
  return (
    <div>
      <button className={classes.btn} onClick={() => history.push('/about')}>
        ABOUT ME
      </button>
    </div>
  );
}

export default AboutBtn;