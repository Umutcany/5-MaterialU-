import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const Post = () => {
  return (
    <Card sx={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "gray" }}
            aria-label="recipe"
            src="https://a.espncdn.com/i/headshots/mma/players/full/3022677.png"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Connor Mcgregor"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.vox-cdn.com/thumbor/SFfuHUyAcE1cPz7JQTWj_TBKqrQ=/0x0:1200x800/1200x800/filters:focal(595x59:787x251)/cdn.vox-cdn.com/uploads/chorus_image/image/66130016/conor_getty_ringer__1_.0.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Gonna Be A CHAMP EY!!!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            color="error"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
