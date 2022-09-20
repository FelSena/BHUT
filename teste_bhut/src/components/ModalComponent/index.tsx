import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import API from "../Api";

interface FormInterface {
  title: string;
  brand: string;
  price: string;
  age: number;
}

const ModalComponent = ({ modalItem, handleClose, setIsMounted }: any) => {
  const [form, setForm] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string().required("Dado obrigatório"),
    brand: yup.string().required("Dado obrigatório"),
    price: yup.string().required("Dado obrigatório"),
    age: yup.number().required("Dado obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (response: any) => {
    await API.put(`${modalItem._id}`, response).then((res) => {
      res.status === 200 && toast.success("Editado!");
      setIsMounted(false);
      handleClose();
    });
  };

  const deleteCar = async (id: string) => {
    await API.delete(`${id}`).then((res) => {
      res.status === 200 && toast.success("Deletado!");
      handleClose();
      setIsMounted(false);
    });
  };
  const editCar = async () => {
    setForm(true);
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
          height: "500px",
          bgcolor: "white",
          boxShadow: "4px 4px  rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {form ? (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
            }}
            flexDirection="column"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmitFunction)}
          >
            <h1>Cadastre seu veículo:</h1>
            <TextField
              label="Modelo"
              helperText={errors.title?.message}
              required
              {...register("title")}
              defaultValue={modalItem.title}
            />
            <TextField
              label="Marca"
              helperText={errors.brand?.message}
              required
              {...register("brand")}
              defaultValue={modalItem.brand}
            />
            <TextField
              label="Preço"
              helperText={errors.price?.message}
              required
              {...register("price")}
              defaultValue={modalItem.price}
            />
            <TextField
              label="Ano"
              inputProps={{ maxLength: 4 }}
              required
              {...register("age")}
              defaultValue={modalItem.age}
              helperText={errors.age?.message}
            />

            <Button
              type="submit"
              sx={{
                color: "#F3123C",
                "&:hover": {
                  bgcolor: "#F3123C",
                  color: "white",
                },
              }}
            >
              Editar
            </Button>
          </Box>
        ) : (
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
        )}
      </Box>
    </Box>
  );
};

export default ModalComponent;
