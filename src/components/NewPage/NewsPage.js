import { Container } from '@material-ui/core'
import React from 'react'

const NewsPage = () => {

    // const  [news, setNews] = useState([])
    // const getNews = async () => {
    //     const apiKey = "70c9cc81b657efeb4f2858e740423971";
    //     const newsDb = await fetch(`http://api.mediastack.com/v1/news?countries=ng&access_key=${apiKey}&categories=general`)
    //         .catch(err => {
    //         console.log(err)
    //     });
    //     if (newsDb) {
    //         const data = await newsDb.json();
    //         setNews(data.data);
    //     }
    // }
    
    
    // useEffect(() => {
    //     getNews();
    // }, [])

    return (
       <div >
            <Container style={{display: "flex", flexDirection:"column", justifyContent: "center"}} maxWidth="md">
                <h2  style={{margin: "0 auto"}}>Hot News</h2>
                <br />
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6594987.jpg" alt="under-construction"/>
           </Container>
        </div>
    )
}

export default NewsPage
