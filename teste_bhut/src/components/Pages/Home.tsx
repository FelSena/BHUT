import API from "../Api";
import React, { useEffect, useState } from "react";

const Home = () => {
  interface CarInterface {
    _id: string;
    title: string;
    brand: string;
    price: string;
    age: number;
  }
  const [cars, setCars] = useState<CarInterface[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const data = async () => {
      const output = await API("cars");
      setCars(output);
      setIsMounted(true);
    };
    data();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isMounted &&
          cars.map((car) => (
            <ul key={car._id}>
              <li>{car.title}</li>
              <li>{car.brand}</li>
              <li>{car.price}</li>
              <li>{car.age}</li>
            </ul>
          ))}
      </header>
    </div>
  );
};

export default Home;
