import React, {useState} from "react";
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [toggle, setToggle] = useState(1)

    return(
        <div className={styles.nav}>
            <ul>
                <li><Link className={toggle === 1 ? styles.active_link : styles.nav_link}
                          onClick={()=> setToggle(1)}
                          exact to='/users'>USERS</Link></li>
                <li><Link className={toggle === 0 ? styles.active_link: styles.nav_link}
                          onClick={()=> setToggle(0)}
                          exact to='/servers'>SERVERS</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;