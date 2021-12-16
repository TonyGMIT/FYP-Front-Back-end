import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
       <img src="TS.png" alt="ST"></img>
       <nav>
        <titles>
          <space>
            <Link to='/Log-In'>Log In</Link>
          </space>
          <space>
            <Link to='/Register'>Register</Link>
          </space>
          <space>
            <Link to='/Activity-Graph'>Activity Graph</Link>
          </space>
        </titles>
      </nav>
    </header>
  );
}

export default MainNavigation;
