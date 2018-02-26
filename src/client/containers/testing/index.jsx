import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTestingAction} from '../../redux/actions';
import Testing from '../../components/testing';

class TestingContainer extends Component {
	componentWillMount(){
		//2
		this.props.fetchTestingAction();
	}
	render(){
		return pug`
Testing(dataTesting = ${this.setState.dataTesting})
		`
	}
}

function mapStateToProps(state){
    // 1. get state data from redux to props
    return { next_seasons_data: state.testing_reducer.data }
}

export default connect(mapStateToProps, {fetchTestingAction})(TestingContainer);