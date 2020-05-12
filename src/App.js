import React,{ Component} from 'react';
import Header from './components/Header/header'
import Carousel from './components/Carousel/Carousel'
import Output from './components/Form/output'

import { Container} from 'reactstrap';


class App extends Component{
    state={
        
        Shortenurl:'',
        }

        encodedUrl = (url) =>{ // function to x-www-form-urlencoded 
            var details = {
                    'url':url
                 }
                 
            console.log(details)
            var formBody = [];
            for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
            console.log(`Encoded url${formBody}`)
            return formBody;
        } 
    }

    getAPi= async(e) => {
        e.preventDefault();
        const URL = e.target.elements.Url.value;
        const userurl = this.encodedUrl(URL);
        const url = 'https://url-shortener-service.p.rapidapi.com/shorten'
        const xrapidapikey = "e846c010e7msh7e84dd4bcd89cfap11cdbajsnac49e4562a95"

        const api_call = await fetch(url, {
	        method: 'POST',
	        headers: {
            "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
            "x-rapidapi-key":xrapidapikey,
            "content-type": "application/x-www-form-urlencoded",
        },
            body:userurl 
        })
        const data = await api_call.json();
        console.log(data)
        this.setState({Shortenurl:data.result_url})
        console.log(this.state.Shortenurl)

    }
    

   
  render(){
    
        return(
            <div className="App">
                <Header/>
                <Carousel/>
                <Container className="themed-container" fluid="lg">
                <Output Shortenurl={this.state.Shortenurl} onClick={this.getAPi}/>
              
                </Container>
                   
                
            </div>
        )
    }
}
export default App