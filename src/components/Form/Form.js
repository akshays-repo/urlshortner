import React from 'react'
import TextField from '@material-ui/core/TextField';
import  Button  from 'react-bootstrap/Button';



  function Form (props){

    return(

        <div className="p-5">
        <form onSubmit={props.onClick}>
        <TextField
          required
          id="outlined-full-width"
          label=""
          style={{ margin: 5 }}
          placeholder="Enter the url "
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
        </div>
        
    )
} 


        
    

    

export default Form;