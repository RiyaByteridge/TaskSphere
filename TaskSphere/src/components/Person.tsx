import { PersonName } from "../types/Person.type"

const Person = (props :PersonName) => {
  return (
    <div>Name is : {props.name.firstName} and {props.name.lastName}</div>
  )
}

export default Person