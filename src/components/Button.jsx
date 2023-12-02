import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({children, onClick}) => {
  const VariantValue = () =>{
        let variant = "";
        if (children === "+1") {
            variant = "success";
        } 
        else if (children === "-1") {
            variant = "danger";
        }
        else {
            variant = "warning";
        }        
        return variant;
  }

  return (
    <Button 
        variant={VariantValue()}
        style={{marginRight: children === "+1" ? "1rem" : "0"}}
        onClick={onClick}>
        {children}
    </Button>
  )
}

export default CustomButton