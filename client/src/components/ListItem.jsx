import React from 'react';

const ListItem = (props) => (
  <div>
    <ul>
    <li>Profile: <img src={props.image} style={{width:90, height:90}}/></li>

    <li>Name: { props.item }</li>
    <li>Address: {props.address}</li>
    <li>Phone: {props.phone}</li>
    <li>Bio: {props.bio}</li>
    </ul>
  </div>
)

export default ListItem;