import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchFeatures } from '../../redux/actions/index';
import FeatureTemplate from '../../components/home/featureTemplate/index'

class FeatureTemplateContainer extends Component {
  componentDidMount(){
    this.props.fetchFeatures();
  }

  render() {
    return (
        pug `FeatureTemplate(features_data = ${this.props.features_data})`
    )
  }
}

function mapStateToProps(state) {
  return { features_data: state.features_state.data };
}

export default connect(mapStateToProps, {fetchFeatures})(FeatureTemplateContainer);
