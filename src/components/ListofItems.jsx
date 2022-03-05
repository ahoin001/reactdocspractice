import React from "react";

export const ListofItems = () => {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
    { title: "Carrot", id: 4 },
    { title: "Grape", id: 5 },
  ];

  const itemList = products.map((item) => (
    <li key={item.id}>Item: {item.title}</li>
  ));

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
};
