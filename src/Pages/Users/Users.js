import React from "react";
import styles from './Users.module.css';

const Users = () => {
    return(
        <div className={styles.container}>
            <div className={styles.current}>
                <h2>Current Users</h2>
                <hr/>
                <div className={styles.tbl}>
                    <table>
                        <tr>
                            <th width="10%">S.no</th>
                            <th width="45%">Username</th>
                            <th width="45%">Email</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vignesh Siva</td>
                            <td>vignesh@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Shanjay Siva</td>
                            <td>shanjay@gmail.com</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={styles.vl} />
            <div className={styles.create}>
                <h2>Create User</h2>
                <hr/>

                <div className={styles.user_input}>
                    <div className={styles.interior}>
                        <b>Username</b>
                        <input type="text" placeholder="Enter username"/> <br/>
                    </div>
                    <div className={styles.interior}>
                        <b>Email</b>
                        <input type="email" placeholder="Enter user email address"/> <br/>
                    </div>
                    <div className={styles.interior}>
                        <b>Password</b>
                        <input type="password" placeholder="Enter user password"/> <br/>
                    </div>
                    <br/>
                </div>
                <button className={styles.create_btn}>
                    Create
                </button>
            </div>
        </div>
    )
}

export default Users;