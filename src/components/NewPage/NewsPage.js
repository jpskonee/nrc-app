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
        <div>
            <Container maxWidth="lg">
                <h1> news</h1>
                
            </Container>
        </div>
    )
}

export default NewsPage
