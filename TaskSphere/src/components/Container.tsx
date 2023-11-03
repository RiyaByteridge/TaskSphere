type CotainerProps ={
    styles: React.CSSProperties
}

export const Container =(props:CotainerProps)=>{
    return (
        <div style={props.styles}>
             Text content goes on 
        </div>
    )
}