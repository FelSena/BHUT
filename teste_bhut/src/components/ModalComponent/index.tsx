import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";

interface CarInterface {
  _id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
}

const ModalComponent = ({ modalItem, handleClose }: any) => {
  const deleteCar = async (id: string) => {
    await fetch(`http://api-test.bhut.com.br:3000/api/cars/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      mode: "cors",
    }).then((res) => {
      res.status === 200 && toast.success("Deletado!");
      handleClose();
    });
  };
  const editCar = async () => {
    console.log(modalItem);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.2)",
        position: "fixed",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "50%",
          bgcolor: "white",
          boxShadow: "4px 4px  rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h3>{modalItem.title}</h3>
          <span>Marca: {modalItem.brand}</span>
          <span>Ano: {modalItem.age}</span>
          <span>Valor: R${modalItem.price},00</span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                color: "#F3123C",
                "&:hover": {
                  bgcolor: "#F3123C",
                  color: "white",
                },
              }}
              onClick={() => editCar()}
            >
              Editar
            </Button>
            <Button
              sx={{
                color: "#F3123C",
                "&:hover": {
                  bgcolor: "#F3123C",
                  color: "white",
                },
              }}
              onClick={() => deleteCar(modalItem._id)}
            >
              Deletar
            </Button>
          </Box>
          <Button onClick={handleClose}>Fechar</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ModalComponent;
