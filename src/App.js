import React from "react";
import propTypes from 'prop-types';

function Food({ name, picture,rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5.9</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name:'Kimchi',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4aBRBEMc36CPZmEg84X40wEsDI%26pid%3DApi&f=1',
    rating: 1,
  },
  {
    id: 2,
    name:'Samgyeopsal',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2QL4k0caBUvTsiuEGRfqzwHaE8%26pid%3DApi&f=1',
    rating: 2,
  },
  {
    id: 3,
    name:'Bibimbap',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XQIww0eJrl8VSqLyJUCWeAHaE8%26pid%3DApi&f=1',
    rating: 3,
  },
  {
    id: 4,
    name:'Doncasu',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DxkwyyLp8y5OyBlvX2xbXwHaEO%26pid%3DApi&f=1',
    rating: 4,
  },
  {
    id: 5,
    name:'Kimbap',
    imgae:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M5YxC0U5LJPxJw__yi9oJgHaGL%26pid%3DApi&f=1',
    rating: 5,
  },
];

function App() {
  return(
    <div>
      { foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.name} rating={dish.rating}/>
      ))}
    </div>
  )
}

Food.propTypes = {
  name:propTypes.string.isRequired,
  picture:propTypes.string.isRequired,
  rating:propTypes.number.isRequired,
};
export default App;
