import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TextField from '@material-ui/core/TextField';
import  Button  from 'react-bootstrap/Button';


function Output(props){
    return(<div className='p-5 '>

<form onSubmit={props.onClick}>
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
        </form>

        <TextField
          
          id="outlined-full-width"
          label=""
          style={{ margin:5}}
          placeholder={props.Shortenurl}
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
         
          variant="outlined"
          readOnly
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