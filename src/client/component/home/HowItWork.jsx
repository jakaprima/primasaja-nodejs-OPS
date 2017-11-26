import React from 'react'
import Link from 'react-router-dom'

const HowItWork = () => (
  pug`
  section#how-works.container
    .how-works(style=${{ padding: '2.5rem 0' }})
      .row
        .col-md-12
          .bg-how-works
            .row.justify-content-md-center.content-how-works
              .col-lg-3
                h1 HOW IT WORKS
                p Rent from our curated selection of high fashion items
                center
                  a(href="#") LEARN MORE
              .col-lg-2
                .steps
                  h3 1
                  h4 Book The Look
                  p Reserve a look for 4 or 8 days and schedule your delivery. Clothing are delivered clean, ready to wear, and insured.
              .col-lg-2
                .steps
                  h3 2
                  h4 Fit Promise
                  p We allow temporary alterations and refund unworn clothing. If you’re uncertain about size, request a back up dress!
              .col-lg-2
                .steps
                  h3 3
                  h4 Returns
                  p Use the original packaging and pre-paid return label provided. Drop your order at any Royal Mail Post by 12 PM on the due date.
  `
)

export default HowItWork