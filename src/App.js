import { AppBar, Box, Container, CssBaseline, Grid, Toolbar, Typography, Button, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from "./Styles";
function App() {

  const cards = [1,2,3,4,5,6,7,8,9];

  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
    <Box sx={{backgroundColor:"#2596be"}}>
      <Toolbar>
        <PhotoCameraIcon className={classes.icon}/>
        <Typography variant="h6">
          My Album
        </Typography>
      </Toolbar>
      </Box>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" align="center" sx={{marginTop:"100px"}}>
            <Typography variant="h2" align="center" sx={{color:"blue"}} gutterBottom>Album layout</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={4}>
          {
            cards.map((cardItem)=>{

            return (
            <Grid item xs="12" sm="6" md="4" key={cardItem}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.CardMedia}
                  // image="http://source.unsplash.com/random"
                  image="https://picsum.photos/200/300"
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography gutterBottom>
                    This is the section you used to describe the content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            )
            })
          }
          </Grid>

        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
        Something here to give the footer a purpose!
        {/* Copyright © Your Website 2022. */}
        </Typography>
        <Typography align="center" color="textSecondary">
          Copyright © Your Website 2022.
        </Typography>
      </footer>
    </>
  );
}

export default App;
