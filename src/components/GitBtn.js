import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './GitBtn.module.css';

function GitBtn(event) {
  return (
    <div>
      <button
        className={classes.btn}
        onClick={event =>
          (window.location.href = 'https://github.com/ellauppal')}>
        GITHUB
      </button>
    </div>
  );
}

export default GitBtn;
