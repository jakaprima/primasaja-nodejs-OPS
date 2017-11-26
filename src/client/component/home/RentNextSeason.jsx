import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchNextSeasons } from '../../redux/actions/index.js';
import CarouselItemContainer from '../../containers/home/CarouselItemContainer.jsx'


// ${
//   for(var x = 0; x < 10; x++ ){
//     return console.log
//   }
//       pug `
//       
//       `
// }

const numbers = [0,1,2,3,4,5,6,7,8];
const liIndicator = numbers.map((number, key) =>
  pug `
    li(data-target="#carouselExampleControls" data-slide-to=${number} key=${key} class=${key == 0 ? 'active' : ''}) p ${number}
  `
);

class RentNextSeason extends Component {
  render(){
    return (
      pug `
      section#rent-next-season(style=${{background: '#cecece', marginLeft: '-15px', marginRight: '-15px', height: '598px'}})
        .col-lg-12
          h2.divider Editor's Picks
          p Be the first to rent the best of next season. Select your favorites runway looks and we will notify you when it’s available.
          .container
            #carouselExampleControls.carousel.slide(data-ride="carousel" data-type="multi" data-interval="5000000")
              .carousel-inner
                CarouselItemContainer
              a#carousel-control-prev.carousel-control-prev(href="#carouselExampleControls" role="button" data-slide="prev")
                span.carousel-control-prev-icon(aria-hidden="true")
                span.sr-only Previous
              a#carousel-control-next.carousel-control-next(href="#carouselExampleControls" role="button" data-slide="next")
                span.carousel-control-next-icon(aria-hidden="true")
                span.sr-only Next
              ol#custom-indicator.carousel-indicators(style=${{bottom: '-56'}})
                ${liIndicator}
                
      `
    )
  }
}

export default RentNextSeason;
