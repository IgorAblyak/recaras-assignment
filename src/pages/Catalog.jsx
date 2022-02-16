import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import Api from "../API/API";
import CatalogCard from "../components/CatalogCard";

const Catalog = () => {
  const [parts, setParts] = useState([]);

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

  function getDate(part) {
    return new Date(part.updatedAt).toDateString();
  }

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
    </Container>
  )
}

export default Catalog;