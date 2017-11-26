import _ from 'lodash';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import { fetchEditorPick } from '../../redux/actions/index.js';

import Link from 'react-router-dom';

class EditorPick extends Component {


  componentWillMount(){
    console.log('componentwill mount')
    // for slider
    $('#carousel').each(function(){
      console.log('(2) testing carousel di will mount')

    });
  }

  renderCarouselItem() {
    return _.map(this.props.editor_pick_data, function (value, key){
      return (
        pug`
        .carousel-item(className=${key == 0 ? 'active' : ''}, key=${key}, style=${{display: 'relative'}} )
          .col-md-3.col-sm-6.col-xs-12
            a.thumbnail(href="#")
              img.img-responsive(src=${value.item.images[1].big_thumbnail})
        `
      )
    })
  }

  render(){
    return (
      pug `
        section#editor-pick(style=${{background: 'red', height: 'auto'}})
          .col-lg-12.col-lg-centered.col-md-10.col-sm-8.col-sm-centered.col-md-centered.columns(style=${{height: 'auto'}})
            h2.divider Editor's Picks
            .col-md-12
              #carousel.carousel.slide(data-ride="carousel" data-type="multi" data-interval="1000")
                .carousel-inner
                  ${this.renderCarouselItem()}
                a.carousel-control-prev(href="#carousel" role="button" data-slide="prev")
                  span.carousel-control-prev-icon(aria-hidden="true")
                  span.sr-only Previous
                a.carousel-control-next(href="#carousel" role="button" data-slide="next")
                  span.carousel-control-next-icon(aria-hidden="true")
                  span.sr-only Next
      `
    )
  }

  componentDidMount() {
    this.props.fetchEditorPick();

    $('#carousel[data-type="multi"] .carousel-item').each(function (){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    })
  }
}

function mapStateToProps(state) {
  return { editor_pick_data: state.editor_pick_state.data };
}

export default connect(mapStateToProps, { fetchEditorPick })(EditorPick);
