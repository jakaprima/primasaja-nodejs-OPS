import React, { Component } from 'react'
import _ from 'lodash'

class Template1 extends Component {
    constructor(props){
      super(props);
      this.state = {
        dataBlock: props.data.blocks
      };
    }
  
    render(){
      
      return (
        pug`
          section.row.justify-content-md-center
            .container
              .row
              ${_.map(this.state.dataBlock, function(data, key){
                return pug`
                  .col-md-4.col-dividing-feature(key=${key})
                    .image-feature.ct-block(style=${{ backgroundImage: 'url(' + data.square_photo + ')' }})
                    .ct-box.col-md-12(style=${{textAlign: 'center'}})
                      .col-md-12(style=${{background: 'white'}})
                        h5 Designer Focus
                        h3 ${data.name}
                        span RENT NOW
                `
              })}
        `
      )
    }
  }

  export default Template1;
  
  
