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

export default function ModalWin({...props}) {
  const [color, setColor] = useState('');
  const [part, setPart] = useState('');
  const [price, setPrice] = useState('');
  const [prod, setProd] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  
  const addPart = (e) => {
    e.preventDefault();
    const newPart = {
      color: color,
      name: part,
      price: price,
      manufacturer: prod,
      model: model,
      year: year,
    }
    props.addPart(newPart);
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
              onClick={addPart}
            >Submit
            </Button>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}