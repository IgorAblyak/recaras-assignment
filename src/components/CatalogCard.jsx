import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Car from '../../src/assets/img/bmw.jpg';
import UpdatePartModal from './updatePartModal';

const CatalogCard = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const [checked, setChecked] = useState(false);

  const favoriteChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Card elevation={3}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>R</Avatar>}
        action={
          <Box>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
              checked={checked}
              onChange={favoriteChecked}
            />
            <IconButton onClick={() => props.deletePart(props.id)}>
              <DeleteOutlinedIcon />
            </IconButton>
          </Box>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia component="img" height="194" image={Car} alt="car" />
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <BusinessOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.manufacture} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarFilledOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.model} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccessTimeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.year} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ColorLensOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.color} />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={handleOpenModal}>
                <EditOutlinedIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <EuroOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={`${props.price}€`} />
          </ListItem>
        </List>
      </Box>
      <UpdatePartModal
        open={open}
        props={props}
        closeModal={handleCloseModal}
        updatePart={props.updatePart}
      />
    </Card>
  );
};

export default CatalogCard;
