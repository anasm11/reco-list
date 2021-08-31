import React, { useState } from "react";

import "./App.css";

var channels = {
  "maths and science": [
    {
      name: "3blue1brown",
      desc: "Illustrative explanation of complex mathematical concepts.",
      rating: "4.75/5"
    },
    {
      name: "numberphile",
      desc: "Theoritical maths and concepts",
      rating: "4/5"
    },
    {
      name: "mark rober",
      desc: "Explanation of everyday science",
      rating: "4.3/5"
    },
    {
      name: "SmarterEveryday",
      desc: "Understanding of science principles in everyday life.",
      rating: "4.2/5"
    }
  ],

  programming: [
    {
      name: "Tanay Pratap",
      desc: "Exceptional channel with a noble cause",
      rating: "5/5"
    },
    {
      name: "freeCodeCamp.org",
      desc: "videos/tutorials on a wide variety of topics in computer science",
      rating: "4.8/5"
    },
    {
      name: "computerphile",
      desc: "theoritical concepts of computer science",
      rating: "4.8/5"
    }
  ],
  "personal finance": [
    {
      name: "ankur warikoo",
      desc: "self help and personal finance",
      rating: "4.9/5"
    },
    {
      name:"akshat shrivastava",
      desc:"personal finance & understanding trends",
      rating:"4.5/5",
    },
    {
      name:"ranveer allahabadia",
      desc:"self help,finance and podcasts",
      rating:"4/5",
    }
  ],
  "tech unboxing": [
    {
      name: "mkbhd",
      desc: "visual commentary on latest gadgets in tech",
      rating: "4.85/5"
    },
    {
      name: "tech burner",
      desc: "tech unboxing in his unique style",
      rating: "4.75/5"
    },
    {
      name: "unbox therapy",
      desc: "unboxing of a wide variety of gadgets",
      rating: "4.7/5"
    }
  ]
};

var genres = Object.keys(channels);

export default function App() {
  const [genre, setGenre] = useState([]);

  function selectHandler(genre) {
    setGenre(channels[genre]);
  }

  return (
    <div className="App">
      <h1> ▶️ ytreccos</h1>
      <h2>checkout my youtube channel recommendations</h2>

      <div>
        {genres.map((type) => {
          return <button onClick={() => selectHandler(type)}>{type}</button>;
        })}
      </div>
      <hr />
      <div>
        {genre.map((channel) => {
          return (
            <div id="card">
              <p>
                <strong>{channel.name}</strong>
              </p>
              <p>{channel.desc}</p>
              <p>{channel.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
