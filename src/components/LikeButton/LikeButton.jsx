import { Button } from "@mui/material";
import axios from "axios";

function LikeButton({id, whereMyDogsAt}) {
    const addLike = () => {
        axios({
         method: 'PUT',
         url: `/gallery/like/${id}`
        })
        .then((result) => {
         whereMyDogsAt()
        })
        .catch((error) => {
         console.error(error);
        })
        }

    return(
        <Button onClick={addLike} size="large">🤍</Button>
    )

}

export default LikeButton

