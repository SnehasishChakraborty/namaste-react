import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class About extends React.Component {
    constructor(){
        super();

        this.state = {
            owner : {
                name : "Lorem Ipsum",
                location: "default"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://proxy.cors.sh/"+GITHUB_USER_API+"SnehasishChakraborty",{
        method: 'get',
        headers: {
            'x-cors-api-key': 'temp_42144e6dd2ffe246db5c85e971346562',
        }
        });
        const json = await data.json();
        this.setState({
            owner : json
        })
    }

    render(){
        const {name, location} = this.state.owner;

        return (
            <div>
                <div>
                    <h1>About</h1>
                </div>
                <div className="about">
                    <h2>Name: {name}</h2>
                    <h2>Location: {location}</h2>
                </div>
            </div>
        )
    }
}

export default About;