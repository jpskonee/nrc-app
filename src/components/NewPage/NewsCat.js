// import { Container, Grid } from '@material-ui/core';
// import React, { useState, useEffect } from 'react'


// const NewsCat = () => {

//     const  [news, setNews] = useState([])
//     const getNews = async () => {
//         const apiKey = "70c9cc81b657efeb4f2858e740423971";
//         const newsDb = await fetch(`http://api.mediastack.com/v1/news?countries=ng&access_key=${apiKey}&limit=5`)
//             .catch(err => {
//             console.log(err)
//         });
//         if (newsDb) {
//             const data = await newsDb.json();
//             setNews(data.data);
//         }
//   }

    
//     useEffect(() => {
//         getNews();
//     }, [])

//   return (
//           <Grid key={news.url} container style={{display:"flex", justifyContent: "left", alignContent: "center", background:"lightblue"}}>
//             <Grid item lg={12} md={12} sm={12} xs={12}>
//                 <Container maxWidth="lg">
//               <div>
//                 <div>
//                     <h3>  </h3>
//                 </div>
                
//                 <div>
//                   <img height="200px" width="100%" src={news.image} width="200px" />
//                 </div>
//                 <div>
//                     <p> {(news.description)</p>
//                 </div>
//                 <div>
//                   <a href={news.url} > Read more </a>
//                 </div>   
//               </div>
                    
//                 </Container>
//             </Grid>
//         </Grid>
//         )
// }

// export default NewsCat
