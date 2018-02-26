import _ from 'lodash';
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNextSeasons } from '../../redux/actions';
import CarouselItem from '../../components/home/CarouselItem';

class CarouselItemContainer extends Component {
    componentWillMount(){
        // 2. before render, execute action to fetch data API
        this.props.fetchNextSeasons();
    }

    render(){
        return pug `CarouselItem(dataItem = ${this.setState.dataItem})`

    }

    componentWillReceiveProps(nextProps){
        // 3. setstate data for rendering
        this.setState = ({
            dataItem: nextProps.next_seasons_data
        })
    }

    componentDidUpdate(){
        // 5. for make 4 column on each view carousel-item
        $('#carouselExampleControls[data-type="multi"] .inner-repeat').each(function (){
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



function mapStateToProps(state){
    // 1. get state data from redux to props
    return { next_seasons_data: state.next_seasons_state.data }
}

export default connect(mapStateToProps, {fetchNextSeasons})(CarouselItemContainer);
