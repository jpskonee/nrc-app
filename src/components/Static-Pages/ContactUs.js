import { Container } from '@material-ui/core'
import React from 'react'

const ContactUs = () => {
    return (
        <div >
            <Container style={{display: "flex", flexDirection:"column", justifyContent: "center"}} maxWidth="md">
                <h2  style={{margin: "0 auto"}}>Contact us</h2>
                <br />
                <img src="https://as2.ftcdn.net/jpg/03/43/73/31/500_F_343733140_al4QQWeOH16Ci1h2WNqbecl2Srh9b1e2.jpg" alt="under-construction"/>
           </Container>
        </div>
    )
}

export default ContactUs
