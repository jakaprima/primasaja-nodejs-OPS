import React from 'react'

const subscribe = () => {
  alert('subscribe')
}

const GetList = () => (
  pug`
  section#get-list.container
    #get-list
      .row
        .col-lg-12
          .get-list-bg
            .row.justify-content-md-center
              .col-lg-6
                .get-list-content
                  h1 Get on the List
                  p Recieve exclusive offers, special invitations, and be the first to rent new arrivals - plus, get 15% off your first rental when you sign up today!

                  form(name="subscribeForm")
                    .row
                      .col-lg-5
                        input(name="email", type='text', placeholder='Your Email')
                      .col-lg-4
                        .button.dark-gray Subscribe
  `
)

export default GetList