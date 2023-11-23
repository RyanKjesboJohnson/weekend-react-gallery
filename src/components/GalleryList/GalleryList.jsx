import { Height } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function GalleryList ({dogsArray}) {
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
            <div data-testid="galleryList" >
            <Grid container spacing={0}>
                {dogsArray.map(dog => (
                    <Grid xs={4} data-testid="galleryItem">
                    <Item sx={{ maxWidth: 600}}>
                    <Card key={dog.id} >
                        <CardMedia 
                        sx={{height: 140}} 
                        image = {dog.url} 
                        title= 'This is a picture of a dog.'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" >
                                {dog.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">🤍</Button>
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