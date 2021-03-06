import React, { useEffect, useState } from "react";

import { Button } from "Atoms";

import "./home.css";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { name: "India" },
      { name: "Sri Lanka" },
      { name: "United States of America" },
      { name: "Denmark" },
      { name: "Australia" },
    ]);
  }, []);

  return (
    <div styleName="container">
      <div styleName="title">Hello from Home CSS</div>

      <ul styleName="country-list">
        {list.map((item, index) => (
          <li styleName="item" key={index}>
            {item.name}
          </li>
        ))}
      </ul>

      <Button content="Click Here" />
    </div>
  );
};

export default Home;
