import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Ria",
    lastName: "Kumari",
  };

  //array of list
  const NameList = [
    {
      first: "Rossy",
      last: "Jane",
    },
    {
      first: "Rohan",
      last: "Kumar",
    },
    {
      first: "Tracy",
      last: "John Poul",
    },
  ];

  //Advanced Props

  return (
    <>
      <h1 className="text-3xl font-bold text-yellow-300 underline ">
        Hello world!
      </h1>
      <Greet name="Riya" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={NameList} />
      {/* <Status status ="error"/> */}
      <Heading>Heading</Heading>
      <Oscar>
        <Heading>Oscar is startg form mid of november</Heading>
      </Oscar>
      {/* 
  <Button  handleClick={()=>{console.log("Button Clicked")}}/> */}
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked"), event, id;
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </>
  );
}

export default App;
