import { Container } from '@material-ui/core'
import React from 'react'

const AboutUs = () => {
    return (
        <div >
            <Container style={{display: "flex", flexDirection:"column", justifyContent: "center"}} maxWidth="md">
                <h2  style={{margin: "0 auto"}}>About us</h2>
                <br />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRrCcnho3ThD1Fpkod37ADzYGOjpfTLi5mCWjEO8iH5NRHZ--ZRm3VpPKhMBo5grAN_o&usqp=CAU" alt="under-construction"/>
           </Container>
        </div>
    )
}

export default AboutUs
