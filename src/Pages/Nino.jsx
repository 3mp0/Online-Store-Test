import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
import kids from "../components/assets/banner_kids.png";
import { Container, Grid } from "@mui/material";


function Nino() {

    const filterData = data.slice(25, 36);
    return(
    <>
    <Container>
        <img
        src={kids}
        alt="niño"
        style={{width: '100%'}}/>
    </Container>
        <Cards data={filterData} titulo="Niño" />
    </>
    )
}
export default Nino;