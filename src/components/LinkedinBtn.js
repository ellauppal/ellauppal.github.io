import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './LinkedinBtn.module.css';

function LinkedinBtn(event) {
  return (
    <div>
      <button
        className={classes.btn}
        onClick={event =>
          (window.location.href = 'https://www.linkedin.com/in/ella-uppal/')
        }
      >
        LINKEDIN
      </button>
    </div>
  );
}

export default LinkedinBtn;
