import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: { xs: 320, sm: 400, md: 600 },
  bgcolor: 'rgba(250, 250, 250, 0.8)',
  boxShadow: 24,
  p: 4,
};

export default function UpdatePartModal({...props}) {
  const propsFromCard = props.props;
  const [color, setColor] = useState(propsFromCard.color);
  const [part, setPart] = useState(propsFromCard.name);
  const [price, setPrice] = useState(propsFromCard.price);
  const [prod, setProd] = useState(propsFromCard.manufacture);
  const [model, setModel] = useState(propsFromCard.model);
  const [year, setYear] = useState(propsFromCard.year);
  
  const updatePart = (e) => {
    e.preventDefault();
    const changePart = {
      color: color,
      name: part,
      price: price,
      manufacturer: prod,
      model: model,
      year: year,
    }
    props.updatePart(propsFromCard.id, changePart);
    props.closeModal();
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Stack
           sx={style} 
           component='form' 
           spacing={2} 
           noValidate 
           autoComplete="off"
          >
            <Typography
              variant='h3'
              color='primary'
              align='center'
              mb={3}
              fontWeight={'bold'}
            >Fill the gap:
            </Typography>
            <TextField
              value={part}
              onChange={(e) => setPart(e.target.value)}
              label="Part name"
            />
            <TextField
              value={prod}
              onChange={(e) => setProd(e.target.value)}
              label="Manufacture"
            />
            <TextField
              value={model}
              onChange={(e) => setModel(e.target.value)}
              label="Car model"
            />
            <TextField
              value={year}
              onChange={(e) => setYear(e.target.value)}
              label="Year"
            />
            <TextField
              value={color}
              onChange={(e) => setColor(e.target.value)}
              label="Color"
            />
            <TextField
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
            />
            <Button 
              type='submit' 
              variant="outlined"
              onClick={updatePart}
            >Update
            </Button>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}