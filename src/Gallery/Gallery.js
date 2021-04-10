import React from 'react'
import './Gallery.css'

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentIndex : 0
        }
    }

    checkIndex(index){
        return index === this.state.currentIndex ? "panel active" : "panel"
    }

    render(){      
        var attraction_name = this.props.match.params[0];
        var photos = JSON.parse(localStorage.getItem(attraction_name));
        return(
            <div className = "hello">
                <title>{attraction_name}</title>
                <div className = "title">
                    <h1>{attraction_name}</h1>
                    <h3>See what your friends posted here!</h3>
                    {/* <button class = "gobackbtn" onclick="goBack()">Go Back</button> */}
                </div>

                <div className = "container">
                {
                    photos.map((photo,index) => (
                        <div className={this.checkIndex(index)} onClick = {()=>{this.setState({currentIndex:index})}} style = {{backgroundImage: `url(${photo.base64})`}}>
                            <h3>Photo by @Julia on {photo.date}</h3>
                        </div>
                    ))
                }
                </div>
            </div>
        )
        
    }
}

export default Gallery;