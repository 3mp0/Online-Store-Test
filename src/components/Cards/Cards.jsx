import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container, Grid } from "@mui/material";

export default function Cards({data, titulo}) {
    const formatNumberToChileanPesos = (number) => {
    // Formatea el número como un valor monetario con separadores de miles y decimales
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(number);
    return formattedNumber;
  };
    return (
        <Container>
            <h1>{titulo}</h1>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.map((producto, index) => (
            <Grid item key={index}>
                <Card sx={{ maxWidth: 345, maxHeight: '100%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            src={producto.imagen}
                            alt="imagen de ropa"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {producto.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <del>{producto.precio_anterior}</del>
                            </Typography>
                            <Typography variant="h4" color="text.primary">
                                {formatNumberToChileanPesos(producto.nuevo_precio)} 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Agregar a Carrito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
        </Container>
    );
}
