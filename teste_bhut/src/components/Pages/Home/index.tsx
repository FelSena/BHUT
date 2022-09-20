import API from "../../Api";
import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ModalComponent from "../../ModalComponent";

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
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const handleOpen = (item: any) => {
    setModal(true);
    setModalItem(item);
  };
  const handleClose = () => {
    setModal(false);
    setModalItem({});
  };
  useEffect(() => {
    const data = async () => {
      const output = await API("");
      setCars(output);
      setIsMounted(true);
    };
    data();
  }, []);

  return (
    <>
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
                onClick={() => handleOpen(car)}
              >
                <h3>{car.title}</h3>
                <span>Marca: {car.brand}</span>
                <span>Ano: {car.age}</span>
                <span>Valor: R${car.price},00</span>
              </Box>
            ))}
        </Box>
      </Box>
      {modal && (
        <ModalComponent modalItem={modalItem} handleClose={handleClose} />
      )}
    </>
  );
};

export default Home;
