import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import Button from '../common/Button.jsx';

const style = {
    marginTop: '200px',
    color:'black',
    textAlign:'center'
};

class SuccessPage extends React.Component {
    constructor(props, context) {
        super();
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        browserHistory.goBack();
    }
    render() {

        const header = 'Page Not Found!';
        const body = 'Whoops! Sorry, there is nothing to see here!';

        return (
            <div style={style} className="container col-xs-6 col-xs-offset-3">
                <h1>{header}</h1>
                <p>{body}</p>
                <Button
                    type="submit"
                    label="BACK"
                    buttonClassName="primary"
                    onClick={this.goBack}
                />
            </div>
        );
    }


}

export default connect()(SuccessPage);