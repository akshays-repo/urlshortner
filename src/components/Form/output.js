import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TextField from '@material-ui/core/TextField';
import  Button  from 'react-bootstrap/Button';
import {Row,Col} from 'reactstrap'


function Output(props){
    return(<div className='p-5 '>


         <form onSubmit={props.onClick}>
         <Row>
         <Col sm={8}>
         <TextField
          required
          id="outlined-full-width"
          label=""
          style={{ margin: 5 }}
          placeholder="Shorten your Link "
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
          
        <TextField
          
          id="outlined-full-width"
          label=""
          style={{ margin:5}}
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
          variant="outlined"
          value={props.Shortenurl}
          disabled
        />

        <CopyToClipboard text={props.Shortenurl}>
        <Button variant="primary" size="lg" block style={{ margin: 8 }} onClick={(e) => alert('Copied')}>
        copy
        </Button >
        </CopyToClipboard>
        </div>
    )
}
export default Output