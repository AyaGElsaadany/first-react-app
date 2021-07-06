import React from "react";
import ReactDOM from "react-dom";

class ContactList extends React.Component {
  render() {
    const people = [{ name: "Aya" }, { name: "Esraa" }, { name: "Fatma" }];

    return (
      <ol>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

ReactDOM.render(<ContactList />, document.getElementById("root"));

// const people = [
//   {'name': 'Aya'},
//   {'name': 'Esraa'},
//   {'name': 'Fatma'}
// ]

// const elem = React.createElement("ol",
// {className: 'welcome-message'},
// people.map(
//   person =>
//   React.createElement("li", {key : person.name}, person.name)
//   )
// );

// const elem = <ol>
//   {people.map(person =>
//   <li key={person.name}>{person.name}</li>)}
//   </ol>;

//console.log(elem);

// ReactDOM.render(elem, document.getElementById("root"));
