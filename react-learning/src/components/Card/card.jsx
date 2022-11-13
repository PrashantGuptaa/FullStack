/* eslint-disable jsx-a11y/img-redundant-alt */
import "./card.css";
import { useParams, useSearchParams } from 'react-router-dom';

const db = [
  {
    id: 1,
    brand: "Ferrari",
    name: "Car-1",
    transmission: "automatic",
  },
  {
    id: 2,
    brand: "Ferrari",
    name: "Car-2",
    transmission: "Manual",
  },
  {
    id: 3,
    brand: "Bentlay",
    name: "Car-3",
    transmission: "automatic",
  },
  {
    id: 4,
    brand: "Ferrari",
    name: "Car-4",
    transmission: "automatic + manual",
  },
  {
    id: 5,
    brand: "Ferrari",
    name: "Car-1",
    transmission: "automatic",
  },
  {
    id: 6,
    brand: "Pagani",
    name: "Car-6",
    transmission: "auto",
  },
  {
    id: 7,
    brand: "Ferrari",
    name: "Car-1",
    transmission: "automatic",
  },
];

const Card = (props) => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("Search", searchParams.get('brakes'), searchParams.get('dataId'));
  const { id, engine } = params;
  const carDataObj = db.find(data => data.id === parseInt(id));
  const { brand, name, transmission } = carDataObj;

  return (
    <div className="card">
      <h2>{brand}</h2>
      <p>{`Car name is ${name} and it is ${transmission} car, with a ${engine} engine`}</p>
    </div>
  );
};

export default Card;
