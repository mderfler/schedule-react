import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.numAjaxRequestsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);