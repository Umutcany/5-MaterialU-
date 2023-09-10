import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Avatar, TextField, Stack, ButtonGroup } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Paylaşım Yap
          </Typography>
          <UserBox>
            <Avatar src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheZXnf27LhoKkcVFu_IbieY6fXIRG4U1Dvj8EMoH_qyWZyHtv" />
            <Typography fontWeight={500} variant="span">
              Umut Can Yılmaz
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Aklınızda ne var?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon sx={{ cursor: "pointer" }} color="primary" />
            <ImageIcon sx={{ cursor: "pointer" }} color="secondary" />
            <VideoCallIcon sx={{ cursor: "pointer" }} color="success" />
            <PersonAddIcon sx={{ cursor: "pointer" }} color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Paylaş</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
