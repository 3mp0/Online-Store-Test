import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
import men from "../components/assets/banner_mens.png"
import { Container, Grid } from "@mui/material";

function Hombre() {

    const filterData = data.slice(12, 24);
    return(
    <>
    <Container>
        <img
        src={men}
        alt="hombre muy guapo"
        style={{ width: "100%"}}/>

    </Container>
        <Cards data={filterData} titulo="Hombre" />
    </>
    )
}
export default Hombre;