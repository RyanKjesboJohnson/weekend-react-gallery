import { Height } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LikeButton from "../LikeButton/LikeButton";
import axios from "axios";
import DogCardClick from "../DogCardClick/DogCardClick";

function GalleryList ({dogsArray, whereMyDogsAt}) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    
    return(
        <Box sx={{ flexGrow: 1 }}>
             <Typography variant="h3" gutterBottom>
                Where my dogs at?
            </Typography>
            <div >
            <Grid container spacing={0} data-testid="galleryList" >
                {dogsArray.map(dog => (
                    <Grid xs={4} key = {dog.id}>
                    <Item sx={{ maxWidth: 600}} data-testid="galleryItem">
                    <Card >
                        <DogCardClick dog = {dog}/>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" >
                                {dog.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <LikeButton id = {dog.id} whereMyDogsAt = {whereMyDogsAt} />
                        </CardActions>
                    </Card>
                    </Item>
                    </Grid> 
                    
                    ))}
            </Grid>
            </div>
        </Box>
    )

}

export default GalleryList;