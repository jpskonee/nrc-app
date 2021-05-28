import { Container } from '@material-ui/core'
import React from 'react'

const TripGuide = () => {
    return (
        <div >
            <Container style={{display: "flex", flexDirection:"column", justifyContent: "center"}} maxWidth="md">
                <h2  style={{margin: "0 auto"}}>Trip Guide</h2>
                <br />
                <img src="https://st2.depositphotos.com/6998422/9831/i/950/depositphotos_98316832-stock-photo-computer-under-construction-3d.jpg" alt="under-construction"/>
           </Container>
        </div>
    )
}

export default TripGuide
