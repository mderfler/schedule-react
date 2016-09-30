import React from 'react';
import Header from '../common/Header';

const jumbotronClassWrapper = 'jumbotron';
const jumbotronStyle = {
    marginTop: '75px'
};

class HomePage extends React.Component {
    render() {
        return (
            <div className={jumbotronClassWrapper} style = {jumbotronStyle}>
                <h1>Project Overwatch</h1>
                <p>Take our surveys!</p>
                <p>v0.10</p>
            </div>
        );
    }
}

export default HomePage;
