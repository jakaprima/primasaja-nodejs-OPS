import React from 'react';

class OprentStylist extends React.Component {

  render() {
    return pug`
      section#oprent-stylist
        .container
          .row
            .col-lg-12
              .oprent-stylist-bg
                .row
                  .col-lg-5
                    h4 oprent
                    h1 Stylists
                  .col-lg-7
                    p Our expert fashion consultants offer an unsurpassed concierge service dedicated to help you find the perfect look for any occasion. If you are looking for something in particular, all you need to do is ask.
                    a(href="#") make an inquiry
    `;
  }
}

export default OprentStylist

