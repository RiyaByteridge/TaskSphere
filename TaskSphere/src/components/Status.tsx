interface StatusProps{
  status:'loading'|'success'|'error'
}

const Status =(props:StatusProps)=>{

  let message 
  if(props.status === 'loading' ){
    message ="Loading...."
  }
  else if(props.status ==='success'){
    message="Successfully completed the work"
  }
  else if(props.status=== 'error'){
    message = "error occrued"
  }

  return(<div>
    <h2>{message}</h2>
  </div>);
}
export default Status