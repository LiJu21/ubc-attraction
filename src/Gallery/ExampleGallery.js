import React from 'react'
import './Gallery.css'

const photos = [
    {
        url: 'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-0/s640x640/170852614_4058613114202984_8887956634742371156_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=Hblgf1WBBcYAX9LRQsl&_nc_ht=scontent.fyvr3-1.fna&tp=7&oh=640ce09fde3372dbc54502bc58927804&oe=6097B0FC',
        comment: "Photo By @janejoe on April 9th 2021"
    },
    {
        url:'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/165508250_4017518138312482_2224475112479486210_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=2c4854&_nc_ohc=cthVHvgYCCoAX-W3qaR&_nc_ht=scontent.fyvr3-1.fna&oh=b02066c4aa40c68d1b6e70797248334e&oe=60952EE4',
        comment: "Photo By @lucychow on March 25th 2021"
    },
    {
        url:'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/126391176_3689049204492712_1892079134265889263_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=9267fe&_nc_ohc=cS4jZZl-vDoAX__fD85&_nc_ht=scontent.fyvr3-1.fna&oh=8889eb98ac7bd9ac92f4fc6756a90088&oe=60965634',
        comment: "Photo By @cicisimpsons on November 23rd 2020"
    },
    {
        url:'https://images.unsplash.com/photo-1566330273069-c1f598bfe056?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        comment:"Photo By @dainguyen on Aug 20th 2019"
    },
    {
        url: 'https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
        comment:"Photo By @tcooper86 on July 21st 2019"
    }
]

class FakeGallery extends React.Component{
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
        return(
            <div className = "hello">
                <div className = "title">
                    <h1>Nitobe Memorial Garden Gallery</h1>
                    <h3>See what your friends posted here!</h3>
                </div>
                <div className = "container">
                    {
                        photos.map((photo,index) => (
                            <div className={this.checkIndex(index)} onClick = {()=>{this.setState({currentIndex:index})}} style = {{backgroundImage: `url(${photo.url})`}}>
                                <h3>{photo.comment}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default FakeGallery