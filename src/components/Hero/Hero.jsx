import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
import { Container, Grid, Typography } from "@mui/material";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Grid container>
          <Grid
            sx={{
              height: "100%",
              margin: "auto",
              py: "20px",
            }}
            item
            sm={12}
            md={6}
          >
            <div className="hero-hand-icon">
              <Typography
                variant="h1"
                component="p"
                sx={{ fontWeight: "bold" }}
              >
                Hola
              </Typography>
              <img src={hand_icon} alt="icon" />
            </div>
            <Typography variant="h1" component="p" sx={{ fontWeight: "bold" }}>
              Tu
            </Typography>
            <Typography variant="h1" component="p" sx={{ fontWeight: "bold" }}>
              Neoperreai?
            </Typography>

            <div className="hero-latest-btn">
              <div>Última colección</div>
              <img src={arow_icon} alt="arrow" />
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              width: "100%",
              marginButtom: "auto",
              textAlign: "center",
            }}
          >
            <img
              src={hero_image}
              alt="hero-image"
              style={{ maxWidth: "49vw", marginBottom: '2vh' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;