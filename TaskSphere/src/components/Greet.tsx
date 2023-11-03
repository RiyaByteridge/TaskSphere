type GreetProps ={
    name :string,
    data?: number,
    isLoggedIn : boolean
}

export const Greet =(props :GreetProps)=>{
// const {data = 0 } = props

    return (
        <div>
            <h2>{
                props.isLoggedIn ? `Welcome ${props.name} to the ${props.data} unread messages` : "welcome!!"
                }</h2>
        </div>
    )
}