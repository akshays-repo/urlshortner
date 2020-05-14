import React from "react";
import QRCode from 'qrcode.react';
import TextField from '@material-ui/core/TextField';
import  Button  from 'react-bootstrap/Button';
import {Row,Col} from 'reactstrap'


function Qrcode(props){
    return(
        <div className='p-5 '>
        <form onSubmit={props.onClick}>
        <Row>
        <Col sm={8}>
        <TextField
         required
         id="outlined-full-width"
         label=""
         style={{ margin: 5 }}
         placeholder=" Enter the Url to generate qr code "
         helperText=""
         fullWidth
         margin="normal"
         InputLabelProps={{
           shrink: true,
           
         }}
         name="Url"
         variant="outlined"
       />
        
       
       </Col>
        <Col sm={4}>
        <Button variant="primary" size="lg" style={{ margin: 8 }} type="submit" block>
          Submit
        </Button>
       
        </Col>
        </Row>
        </form>

        {props.visible ? 
        <Col lg={4}>
        
        <QRCode value={props.userurl} />
        
        </Col>:null}
       
        
        </div>
    )
}
export default Qrcode;