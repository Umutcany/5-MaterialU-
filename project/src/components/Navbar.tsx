import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Theme,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import InputBase from "@mui/material/InputBase";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Search = styled("div")(({ theme }: { theme: Theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "30px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          UMUT DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Ara..." />
        </Search>
        <Icons>
          <Badge badgeContent={99} color="error">
            <MailIcon sx={{ cursor: "pointer" }} />
          </Badge>
          <Badge badgeContent={99} color="error">
            <NotificationsIcon sx={{ cursor: "pointer" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheZXnf27LhoKkcVFu_IbieY6fXIRG4U1Dvj8EMoH_qyWZyHtv"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheZXnf27LhoKkcVFu_IbieY6fXIRG4U1Dvj8EMoH_qyWZyHtv"
          />
          <Typography variant="inherit">Umut</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profilim</MenuItem>
        <MenuItem>Hesabım</MenuItem>
        <MenuItem>Çıkış</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
