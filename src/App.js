import React,{ Component} from 'react';
import Header from './components/Header/header'
import Carousel from './components/Carousel/Carousel'
import Output from './components/Form/output'
import Qrcode from './components/Qrcode/Qrcode'
import Button from 'react-bootstrap/Button'
import {Container} from 'reactstrap'





class App extends Component{
    state={
         Longurl:'https://5ebae1dff5943fe360e4c6a4--pensive-keller-dad1bf.netlify.app/',
         Shortenurl:'',
         visible: true,
         buttonValue:'click here for QR Code Generator',
         qrcodeVisible:false,
        }
        
        conditionallyRender = () =>{
            if(this.state.visible === true){
                this.setState({visible:false})
                this.setState({buttonValue:'Click here for url shorten'})
                this.setState({ qrcodeVisible:false})
            }
            else{
                this.setState({visible:true})
                this.setState({ Shortenurl:''})
                this.setState({buttonValue:'click here for QR Code Generator'})}            
            }
        
        getUserurl =(e) =>{
            e.preventDefault();
            const URL = e.target.elements.Url.value;
            this .setState({Longurl:URL})
            this.setState({qrcodeVisible: true})

            
            }    
        encodedUrl = (url) =>{ // function to x-www-form-urlencoded 
            var details = {'url':url}
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
        this .setState({Longurl:URL})
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
       // console.log(data)
        this.setState({Shortenurl:data.result_url})
      //  console.log(this.state.Shortenurl)

    }
    

   
  render(){
    
        return(
            <div className="App">
                <Header/>
                <Carousel/>
                <Button variant="success" size="lg" block onClick={this.conditionallyRender}>
                {this.state.buttonValue}
                </Button>
                <Container className="themed-container" fluid="lg">
                {this.state.visible ? 
                <Output Shortenurl={this.state.Shortenurl} onClick={this.getAPi} visible={this.state.qrcodeVisible}/>:
                <Qrcode userurl={this.state.Longurl} onClick={this.getUserurl} visible={this.state.qrcodeVisible}/>}
               </Container>
                   
                
            </div>
        )
    }
}
export default App