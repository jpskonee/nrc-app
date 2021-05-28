import { Container } from '@material-ui/core'
import React from 'react'

const Services = () => {
    return (
        <div >
            <Container style={{display: "flex", flexDirection:"column", justifyContent: "center"}} maxWidth="md">
                <h2  style={{margin: "0 auto"}}>Our Services</h2>
                <br />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUgeObG7ozrCkqYVbl5qy-DLMpKXoynTyLywjPe-6MxR5VBpaVzEI8p0TuOjUwa43pgw&usqp=CAU" alt="under-construction"/>
           </Container>
        </div>
    )
}

export default Services
