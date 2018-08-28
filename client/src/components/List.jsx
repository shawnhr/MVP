import React from "react";
import ListItem from "./ListItem.jsx";

const List = props => (
    <div>
    <br />
        <h5>Doctors in Your Area</h5>
        There are {props.items.length} doctors.
        {props.items.map((item,ind) => (
            <ListItem
                key={ind}
                item={item.name}
                address={item.address}
                phone={item.phone}
                image={item.image}
                bio={item.bio}
            />
        ))}
    </div>
);

export default List;
