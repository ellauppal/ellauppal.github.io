import 'bootstrap/dist/css/bootstrap.min.css';
import history from './../history';
import classes from './BackBtn.module.css';

function BackBtn() {
  return (
    <div>
      <button className={classes.btn} onClick={() => history.push('/')}>
        BACK
      </button>
    </div>
  );
}

export default BackBtn;