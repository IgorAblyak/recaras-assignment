import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Api from "../API/API";
import CatalogCard from "../components/CatalogCard";
import ModalWin from "../components/ModalWin";

const Catalog = () => {
  const [parts, setParts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getParts();
  }, []);

  const getParts = async () => {
    const api = new Api();
    const parts = await api.getParts();
    setParts(parts);
  }

  const delPart = async (id) => {
    const api = new Api();
    await api.deletePart(id);
    const newParts = parts.filter((part) => part._id !== id)
    setParts(newParts);
  }

  const addPart = async (body) => {
    const api = new Api();
    const part = await api.addPart(body);
    setParts([...parts, part]);
  }

  const getDate = (part) => {
    return new Date(part.updatedAt).toDateString();
  }

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Container maxWidth='xl'>
      <Typography
        variant='h2'
        color='primary'
        align='center'
        mt={5}
        fontWeight={'bold'}
      >Catalog Parts:
      </Typography>
      <Grid container mt={2} rowSpacing={1} columnSpacing={2}>
        {parts.map((part) => (
          <Grid item key={part._id} xs={12} sm={6} md={4} xl={3}>
            <CatalogCard 
              id={part._id}
              name={part.name} 
              date={getDate(part)}
              manufacture={part.manufacturer}
              model={part.model}
              year={part.year}
              color={part.color}
              price={part.price}
              deletePart={delPart}
          />
          </Grid>
        ))}
      </Grid>
      <Tooltip title='Add part' placement='right' arrow='true'>
        <Fab onClick={handleOpenModal}
          color="primary" 
          aria-label="add"
          size="small"
          sx={{ 
            position: 'fixed',
            bottom: 50, 
            left: 10, 
            right: 0,
            size: { xs: 'small', md: 'medium' }
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <ModalWin 
        open={open} 
        closeModal={handleCloseModal}
        addPart={addPart}
      />
    </Container>
  )
}

export default Catalog;