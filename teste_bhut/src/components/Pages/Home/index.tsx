import API from "../../Api";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { padding } from "@mui/system";

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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Conheça nosso estoque:</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {isMounted &&
          cars.map((car) => (
            <Box
              key={car._id}
              sx={{
                border: "2px solid #F3123C",
                borderRadius: "4px",
                padding: "5px",
                boxSizing: "border-box",
                width: "270px",
                height: "135px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3>{car.title}</h3>
              <span>Marca: {car.brand}</span>
              <span>Ano: {car.age}</span>
              <span>Valor: R${car.price},00</span>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Home;
