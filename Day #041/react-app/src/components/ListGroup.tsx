import { useState } from "react";

// Props allow us to pass in details to a component using iterface in bootstrap
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// function ListGroup(props: Props){ //If we use this then we need to use props.items, props.heading so the better way by use destructuring:
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //Destructuring, so theres arr[0] and arr[1], where arr[0] will be the staring value and arr[1] will be the updating value, we useState by telling initial value is -1 and we use useState as the selectedIndex keeps changing, and because we dont directly touch DOM we need to use this to do the same on React, here the setSelectedIndex is a function which is used.

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); //call it, this updates the state and react calls a re render then selectedIndex === index gets true and hence color changes
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
