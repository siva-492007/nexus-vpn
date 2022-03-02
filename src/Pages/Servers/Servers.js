import React from "react";
import styles from './Servers.module.css';

const Servers = () => {



    return(
        <div className={styles.container}>
            <div className={styles.current}>
                <h2>Available Servers</h2>
                <hr/>
                <div className={styles.tbl}>
                    <table>
                        <tr>
                            <th width="10%">S.no</th>
                            <th width="45%">Servername</th>
                            <th width="45%">Location</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>proxy-1</td>
                            <td>London</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>proxy-2</td>
                            <td>New York</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={styles.vl} />
            <div className={styles.create}>
                <h2>Create Server</h2>
                <hr/>

                <div className={styles.user_input}>
                    <div className={styles.interior}>
                        <b>Servername</b>
                        <input type="text" placeholder="Enter servername"/> <br/>
                    </div>
                    <div className={styles.interior}>
                        <b>Location</b>
                        <input type="text" placeholder="Enter server location"/> <br/>
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

export default Servers;