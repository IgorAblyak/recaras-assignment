import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import Car from '../../src/assets/img/bmw.jpg';

const CatalogCard = ({...props}) => {
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <DeleteOutlinedIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={Car}
        alt="car"
      />
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <BusinessOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.manufacture} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DirectionsCarFilledOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.model} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccessTimeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.year} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ColorLensOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.color} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <EuroOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={`${props.price}€`} />
          </ListItemButton>
        </List>
      </Box>
    </Card>
  );
};

export default CatalogCard;