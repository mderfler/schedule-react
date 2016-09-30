import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <IndexLink to="/" activeclassNameName="active">Home</IndexLink>
                            </li>
                            <li>
                                <Link to="/schedules">Schedules</Link>
                            </li>
                            <li><Link to="/reports" activeclassNameName="active">Reports</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

Header.propTypes = {};

export default Header;
