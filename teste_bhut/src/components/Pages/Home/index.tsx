import API from "../../Api";
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
      const output = await API("");
      setCars(output);
      setIsMounted(true);
    };
    data();
  }, []);

  return (
    <div>
      <h1>Showroom!</h1>
      {isMounted &&
        cars.map((car) => (
          <ul key={car._id}>
            <li>{car.title}</li>
            <li>{car.brand}</li>
            <li>{car.price}</li>
            <li>{car.age}</li>
          </ul>
        ))}
    </div>
  );
};

export default Home;
