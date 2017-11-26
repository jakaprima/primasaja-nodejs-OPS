import React from 'react';
import Template1 from './Template1.jsx'
import Template7 from './Template7.jsx'

const FeatureTemplate = (props) => {
  return (
    pug`
    section#feature-template.top-separate
      ${_.map(props.features_data ,function(data, key){
        if(data.name == "Template1"){
          return pug`Template1(key=${key}, data = ${data})`
        }else if(data.name == "Template7"){
          return pug`Template7(key=${key}, data = ${data})`
        }
      })
      }
    `
  )
}

export default FeatureTemplate;
