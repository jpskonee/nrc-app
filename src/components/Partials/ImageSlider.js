import { Grid } from '@material-ui/core';
import React from 'react';


const ImageSlider = ({image, headerText, color, slogan, topCaption}) => {


    return (
        <div>
            <Grid container style={{display:"flex", justifyContent:"center" }}>
                <Grid item lg={10} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <div>
                                <img width="100%" height="100%" src={image} alt="slider" />
                            </div>
                            
                        </Grid>
                                
                        <Grid item lg={6} md={6} sm={6} xs={6} style={{background: "white", display:"flex", flexDirection: "column",alignContent:"center", justifyContent: "center"}}>
                            <div style={{ margin: "0 auto", textAlign:"center"}}>
                                <div style={{ fontSize: "2.5vw", fontFamily: "monospace"}}> {topCaption} </div>
                                <div style={{fontSize: "6vw", fontFamily:"cursive", color:`${color}`, lineHeight:"1.1"}}> {headerText} </div>
                                <div style={{ fontSize: "1.30vw", marginTop: "1.5vw", fontFamily: "monospace" }}> <em> {slogan} </em>  </div>
                            </div>            
                        </Grid>
                    </Grid>
                </Grid>    
            </Grid>
                
        </div>

    );
}

export default ImageSlider

