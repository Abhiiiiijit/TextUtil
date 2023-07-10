import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <>
    <div>
        {props.alert && <div style={{height: '25%',width: '30%'}} className={`alert alert-${props.alert.type} alert-dismissible fade show my-1 mx-auto`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
    </div>    
    </>
  )
}

export default Alert