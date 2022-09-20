import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../../Api";

const Register = () => {
  const navigation = useNavigate();
  interface FormInterface {
    title: string;
    brand: string;
    price: string;
    age: number;
  }
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
    await API.post("", response).then((res) => {
      res.status === 200 && toast.success("Veículo cadastrado com sucesso!");
      setTimeout(() => {
        navigation("/", { replace: true });
      }, 2000);
    });
  };
  return (
    <Box>
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
        />
        <TextField
          label="Marca"
          helperText={errors.brand?.message}
          required
          {...register("brand")}
        />
        <TextField
          label="Preço"
          helperText={errors.price?.message}
          required
          {...register("price")}
        />
        <TextField
          label="Ano"
          inputProps={{ maxLength: 4 }}
          required
          {...register("age")}
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
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};
export default Register;
