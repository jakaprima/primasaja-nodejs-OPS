import React, { Component } from 'react'
import _ from 'lodash'

class Template7 extends Component {
    constructor(props){
      super(props);
      this.state = {
        dataBlock: props.data.blocks
      };
    }
  
    render(){
      return (
        pug `
          .row.justify-content-md-center.top-separate
            .container
              .row
              ${_.map(this.state.dataBlock, function(data, key){
                if(key == 0){
                  return pug`
                  .col-lg-7.col-dividing-feature(key=${key})
                    .image-feature.ct-block(style=${{ backgroundImage: 'url(' + data.square_photo + ')' }})
                      ${data.title}
                  
                  `
                }else if(key == 1 && key == 2){
                  return pug`
                  .col-lg-5.col-dividing-feature(key=${key})
                    .image-feature.ct-block(style=${{ backgroundImage: 'url(' + data.square_photo + ')' }})
                      ${data.title}
                    // .image-feature.ct-block(style=${{ backgroundImage: 'url(' + data.square_photo + ')' }})
                    //   ${data.title}
                  `
                }
              })}
        `
      )
    }
  }

export default Template7;