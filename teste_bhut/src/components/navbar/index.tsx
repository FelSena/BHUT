import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#F3123C",
        height: "52px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
      flexDirection="row"
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        Showroom
      </Link>
      <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
        Venda seu veículo
      </Link>
    </Box>
  );
};

export default Navbar;
