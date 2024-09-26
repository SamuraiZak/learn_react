import { Fragment, useState } from "react";

// {items: [], heading: string}
interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //useState returns an array
  // first element (selectedIndex) returns a variable
  // second element (setSelectedIndex) returns an updater function

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {cities.length === 0 && <h1>No Items Found</h1>} */}
      <ul className="list-group">
        {/* <li className="list-group-item">Kuching</li>
          <li className="list-group-item">Kota Samarahan</li>
          <li className="list-group-item">Bintulu</li> */}

        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
