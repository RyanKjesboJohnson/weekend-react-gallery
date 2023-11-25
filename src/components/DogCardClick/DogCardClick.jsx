import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button} from "@mui/material";
import { useState } from "react";

function DogCardClick ({dog}) {
    const [dogFlip, setDogFlip] = useState(true)
    const toggleDogFlip = () => {
        setDogFlip(!dogFlip)
    }
    const display = () => {
        if (dogFlip) {
            return (
                <CardMedia 
                sx={{height: 140}} 
                image = {dog.url} 
                title= 'This is a picture of a dog.'
                />
            )
        } else {
            return (
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" data-testid="description">
                        {dog.description}
                    </Typography>
                </CardContent>
            )

        }

        
    }



    return (
        <span 
            data-testid="toggle"
            onClick={toggleDogFlip}>
            {display()}
        </span>
    )

}

export default DogCardClick;