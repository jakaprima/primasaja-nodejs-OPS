import React from 'react'

const Footer = () => (
  pug`
    footer#footer
      .container
        .row
          .col-lg-2
            ul
              li.heading COMPANY
              li
                a(href="#") About Us
              li
                a(href="#") Terms
              li
                a(href="#") Privacy Policy
          .col-lg-2
            ul
              li.heading SUPPORT
              li
                a(href="#") Help & FAQ
              li
                a(href="#") How it Works
              li
                a(href="#") Become A Lender
              li
                a(href="#") Delivery & Return
          .col-lg-3
            ul
              li.heading FIND US
            .social
              a(href='http://www.facebook.com/oprent' target="_blank")
                i.icon-facebook
              a(href='https://twitter.com/Oprent' target="_blank")
                i.icon-twitter
              a(href='http://www.instagram.com/Oprent' target="_blank")
                i.icon-instagram
              a(href='https://www.linkedin.com/company-beta/3727252' target="_blank")
                i.icon-linkedin
          .col-lg-2
            ul
              li.heading CONTACT US
              li 020 30701732
              li concierge@oprent.com
          .col-lg-3
            a(href="#")
            p
              | London’s premium online destination to rent luxury designer fashion on demand.
        hr
        .col-lg-12.copyright
          | Copyright © 2017 Oprent Inc. All Rights Reserved. 
            
  `
)

export default Footer