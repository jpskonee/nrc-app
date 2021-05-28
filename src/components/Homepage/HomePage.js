import { Container } from '@material-ui/core'
import React from 'react'
import DividerBar from '../Partials/DividerBar';
import ImageSlider from "../Partials/ImageSlider";
import FaqSection from "../Partials/FaqSection"

const HomePage = () => {
    return (
        <div>
            <ImageSlider
                topCaption="Africa's No 1"
                image="https://i.pinimg.com/originals/ef/d6/91/efd691204d927d3d30d00fe17c10c72d.gif"
                headerText="Travel Companion"
                color="#e0115f"
                slogan="100% Customer satisfaction since 1989"
            />
            <Container maxWidth="lg">
                <DividerBar
                    header="HOT NEWS!!!"
                />
                
            </Container>
            <Container maxWidth="md">
                <DividerBar
                    header="Frequently Asked Questions - FAQ"
                />
                <FaqSection />
            </Container>
        </div>
    )
}

export default HomePage
