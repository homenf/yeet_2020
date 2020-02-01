import React from "react" 
import LinearProgress from '@material-ui/core/LinearProgress'; 


const ProgressBar = () => { 
    // const[strength] = useState('Weak'); 
    return ( 
        <div style = {{paddingBottom: "5vh"}}> 
            <div id="wrapper" style = {{marginBottom: "15px", overflow: "hidden"}}> 
                <div style = {{float: "left", marginRight: "15px"}}> 
                    Product Listing Strength: 
                </div> 
                <div> 
                    <strong>Weak</strong> 
                </div> 
            </div> 
            <LinearProgress 
                variant = 'determinate' 
                color = 'primary' 
                value = {40} 
                style = {{height: '10px'}}
            />
        </div> 
    )
} 

export default ProgressBar