import { Container } from '@material-ui/core'
import React from 'react'
import ImageSlider from '../Partials/ImageSlider'
import BookingTan from './BookingTan'

const BookingPage = () => {
    return (
        <div>
            <ImageSlider
                topCaption="Book A Trip"
                image="https://cdn.dribbble.com/users/1242311/screenshots/9133337/travel-web-ui.gif"
                headerText="70% Discount"
                color="red"
                slogan="Offer valid while stocks last..."
            />
            <Container maxWidth="lg">
                <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", width: "100%"}}>
                     <BookingTan />
               </div>
           </Container>
        </div>
    )
}

export default BookingPage
