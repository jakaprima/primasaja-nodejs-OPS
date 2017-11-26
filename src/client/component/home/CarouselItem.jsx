import React from 'react'
import _ from 'lodash'

const CarouselItem = props => {
    return (
        pug `
        div
            ${
                // 4. rendering data API
                _.map(props.dataItem, function(value, key){
                return (
                    pug`
                    #test.carousel-item.inner-repeat(className=${key == 1 ? 'active' : ''}, key=${key}, style=${{display: 'relative'}} )
                        .col-md-3(style=${{float: 'left'}})
                            a.thumbnail(href="javascrip:void(0)")
                                img.img-responsive(src=${value.picture_2})
                `
                )
            })
            }
        `
    )
}

export default CarouselItem;
