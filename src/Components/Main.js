import React, { Component, useState } from "react"
import Title from "./Title";
import Posts_Container from "./Post-container";
import Playground from "./playground"
import AddPhoto from "./AddPhoto";
import { BrowserRouter } from "react-router-dom";
class Footer extends Component{

    render(){
        return(
            <div>
                Developed by Noaman
            </div>
        )
    }

}    

class Main extends Component {

    
    constructor(){
        super()
        this.state = {
            
            posts : [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.g2aI4eJmr6bDE1p8rjUJcwAAAA%26pid%3DApi&f=1&ipt=57c1351fb56aedfc768200760c2f5687ee1ace3c964cd1c06a4c9090511f7ebe&ipo=images" +
                "08323785_735653395_n.jpg"
                }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                },
                {
                    id: "3",
                    description: "Test!",
                    imageLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.x8PkHpvir3KzEZzm8Ca0zQHaEK%26pid%3DApi&f=1&ipt=36daf863b7d232407f27c814b8a4e26f0a51aa68582b6a927ea1d1ab0c816beb&ipo=images"
                    }],
            screen : "photos"
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.navigateToAdd = this.navigateToAdd.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);

    }
    removePhoto(post){
       
        this.setState({
            posts : this.state.posts.filter(p => p !== post)
        })
        console.log(this.state.posts)
    }
    navigateToAdd(){
        this.setState({
            screen: "AddPhoto"
        })
    } 
    navigateToHome(){
        this.setState({
            screen: "photos"
        })
    }
    render()
    {
        return(<BrowserRouter>

            {
                this.state.screen === "photos" && (<>
            <Title title = "Instapost"/>            
            <Posts_Container navigate = {this.navigateToAdd} posts ={this.state.posts} removePhoto={this.removePhoto}/>
             <Playground/> 
             </>)
            }
            {
                  this.state.screen === "AddPhoto" && (<>

                 <AddPhoto navigate = {this.navigateToHome}/>
                 </>)
            }
        
        <Footer/>
        </BrowserRouter>
        )
    }
}








export default Main;
