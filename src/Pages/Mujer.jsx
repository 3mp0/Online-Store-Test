import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
import women from "../components/assets/banner_women.png";
import { Container, Grid } from "@mui/material";


function Mujer() {

    const filterData = data.slice(0, 12);
    return(
    <>
    <Container>
        <img
        src={women}
        alt="mujer"
        style={{ width: "100%"}}/>
    </Container>
        <Cards data={filterData} titulo="Mujer" />
    </>
    )
}
export default Mujer;