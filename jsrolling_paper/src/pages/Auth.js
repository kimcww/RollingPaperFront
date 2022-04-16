import React, {Component, component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'redux/modules/base';
import { AuthWrapper} from 'components/Auth';

class Auth extends Component{

    componentWillMount(){
        this.props.BaseActions.setHeaderVisiblity(false)
    }
    componentWillUnmount(){
        this.props.BaseActions.setHeaderVisiblity(true);
    }

    render(){
        return(
            <AuthWrapper>

            </AuthWrapper>
        );
    }
}

export default connect(
    (state)=> ({

    }),
    (dispatch)=>({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Auth);