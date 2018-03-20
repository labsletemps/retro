import React from 'react';
import './styles.css';
import Search from '../Search';
import Menu from '../Menu';


const Column = () => (
    <div className="column">
        <Search/>
        <div className="bgColored">
            <Menu/>
            <div className="address">
                Le Temps<br/>
                Pont Bessières 3<br/>
                Case postale 6714<br/>
                1002 Lausanne<br/>
                Tél. (+41 58) 269 29 00<br />
                Fax (+41 58) 269 28 01<br />
                e-mail <a href="https://www.letemps.ch/contact">info@letemps.ch</a><br/>
                <a href="https://www.letemps.ch/">www.letemps.ch</a>
            </div>
        </div>
    </div>
);

export default Column;