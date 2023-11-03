type ReactProps ={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void
}
 ///destructuring the props as did in react js 
export const Input =({value ,handleChange}:ReactProps)=>{
    return <input type='text' value={value} onChange={handleChange} />
}