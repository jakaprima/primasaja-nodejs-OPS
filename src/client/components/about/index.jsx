import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';

class AboutUs extends Component{
  render(){
    return (
      pug`
      div
          Header
          ini adalah about
          Footer
      `
    )
  }
}

export default AboutUs




          // section
          //     .aboutus-caption
          //         .row
          //             .large-12.medium-10.small-10.large-centered.medium-centered.small-centered.columns
          //                 hr
          //                 h1
          //                     | WE ARE RETHINKING THE WAY PEOPLE CONSUME AND UNVEILING A REMARKABLE NEW LUXURY EXPERIENCE THROUGH RENTING.
          //                 hr
          // section
          //     .aboutus-discover
          //         .row
          //             .show-for-small-only
          //                 .discover-photo-2
          //             .large-5.large-uncentered.medium-8.medium-centered.end.columns
          //                 .discover-content
          //                     h1 Discover A New Way to Shop
          //                     hr
          //                     p
          //                         | Designed for the modern women who wants constant access to luxury statement pieces, Oprent emulates a luxury shopping-like experience without you having to pay the full price or think “Will I wear this again?”.
          //                         br
          //                         br
          //                         | Oprent focuses on producing highly editorialized content and an expertly curated lineup of the most show-stopping and trendiest pieces from estabilished luxury and emerging designers. Our proprierty technology allows you to request a selection of next-season’s looks, helping us and our partners build your ultimate dream closet.
          //                         br
          //                         br
          //                         | When our clients rent with Oprent, they recieve an unsurpassed concierge service tailored to their every need. Our commitment is to help you look and feel your best at every occasion. At Oprent, we value experience and moments.
          //
          //             .large-6.large-push-1.large-uncentered.medium-6.medium-centered.small-10.small-centered.columns
          //                 .hide-for-small-only
          //                     .discover-photo
          //                         img(ng-src="/assets/images/discover.png")
          //             .show-for-small-only
          //                .discover-photo-3
          //                     | #Rentvolution
          //
          // section
          //     .story
          //         .row
          //             .large-7.medium-8.medium-centered.small-12.large-centered.columns
          //                 //- h2.divider Our Startup Story
          //                 //- h6.quotes Oprent comes from the words Operation and Rent.
          //                 //-     br
          //                 //-     | We are rethinking the way people consume and unveiling a new luxury shopping
          //                 //-     br
          //                 //-     | experience that connects us with each other through renting.
          //                 //- .line-section
          //
          //                 h1 Our Story
          //                 hr
          //
          //                 p
          //                     .header-story “ A closet full of beautiful gowns, yet still nothing to wear!”
          //                     | Oprent began with a daydream. A vision of a world where I could simply walk into any designer store and leave with a dress borrowed at a fraction of the price. Why buy another expensive dress I would only wear once? Everyone has a story behind a certain beautiful purchase, but after some time we shelve them and forget about them. Oprent focuses on creating a remarkable luxury experience for people to bring maximum life into every beautiful luxury piece by changing the way we access them.
          //
          //                 .founder
          //                     img(ng-src="/assets/images/eleena.jpg")
          //                     span
          //                         i Eleena Png,
          //                     span.heading FOUNDER AND CEO
          //
          // section
          //     .follow-instagram
          //         .row
          //             .large-6.large-centered.medium-12.small-12.columns
          //                 h1 Follow Our Instagram
          //                 hr
          //             .large-2.medium-3.medium-centered.small-8.small-centered.large-centered.columns
          //                 a.small.radius.dark-gray.button.expand(href='https://www.instagram.com/Oprent/')
          //                     i.icon-instagram
          //                     | @oprent
          //
          //     .outro.show-for-large-up
