import React from 'react'

const background = {
  backgroundColor: 'red'
}

const imgUrl = 'http://oprent-development.s3.amazonaws.com/static/content_images/homepage/banner/square/2017/04/25/aefac140bae045108c878ae06ea7f62f.jpg'

const HomeHeroUnit = () => (
  pug`
  section.hero-background(style=${{background: 'url(' + imgUrl + ') 50% 0px / contain no-repeat scroll '}})
    .row.justify-content-md-center
      .button.dark-gray.expand.btn-postfix-hero(style=${{ position: 'absolute'}}) SEARCH BY SIZE
  `

)

export default HomeHeroUnit
