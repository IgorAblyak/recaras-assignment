import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Api from '../API/API';
import CatalogCard from '../components/CatalogCard';
import CreatePartModal from '../components/CreatePartModal';
import SortSelect from '../components/SortSelect';
import Slider from '@mui/material/Slider';
import { debounce } from '@mui/material';

const Catalog = ({ setFavoriteParts }) => {
  const [parts, setParts] = useState([]);
  const [open, setOpen] = useState(false);
  const [valueSort, setValueSort] = useState('');
  const [valueRange, setValueRange] = useState([0, 100]);

  const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('range')) {
      const parseValue = JSON.parse(localStorage.getItem('range'));
      setValueRange(parseValue);
    }
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    getParts().then((parts) => {
      const [a, b] = valueRange;
      setParts(parts.filter(
        (part) => part.price >= a && part.price <= b
      ))
    });
    return setLocalStorage('range', valueRange);
  }, [valueRange]);

  const getParts = async () => {
    const api = new Api();
    const parts = await api.getParts();
    return parts;
  };

  const delPart = async (id) => {
    const api = new Api();
    await api.deletePart(id);
    const newParts = parts.filter((part) => part._id !== id);
    setParts(newParts);
  };

  const addPart = async (item) => {
    const api = new Api();
    const part = await api.addPart(item);
    setParts([...parts, part]);
  };

  const updateItemParts = (id, item) => {
    return parts.map((part) => {
      if (part._id === id) {
        Object.assign(part, item);
      }
      return part;
    });
  };

  const updatePart = async (id, item) => {
    const api = new Api();
    await api.updatePart(id, item);
    setParts(updateItemParts(id, item));
  };

  const sortParts = (value) => {
    setValueSort(value);
    setParts([...parts].sort((a, b) => a[value].localeCompare(b[value])));
  };

  const changeRange = debounce((event, newRange) => {
    setValueRange(newRange);
  }, 500);

  const getDate = (part) => {
    return new Date(part.updatedAt).toDateString();
  };

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h2"
        color="primary"
        align="center"
        mt={5}
        fontWeight={'bold'}
      >
        Catalog Parts:
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        mt={2}
        columnSpacing={4}
      >
        <Grid item xs={4} sm={4} md={4} xl={4}>
          <SortSelect value={valueSort} onChange={sortParts} />
        </Grid>
        <Grid container direction="column" xs={4} sm={4} md={4} xl={3}>
          <Grid item>
            <Typography
              component="div"
              color="primary"
              align="center"
              fontWeight={'bold'}
            >
              Price filter:
            </Typography>
          </Grid>
          <Grid item xl={2}>
            <Slider
              value={valueRange}
              onChange={changeRange}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              step={1}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={2} rowSpacing={1} columnSpacing={2}>
        {parts.map((part) => (
          <Grid item key={part._id} xs={12} sm={6} md={4} xl={3}>
            <CatalogCard
              parts={parts}
              id={part._id}
              name={part.name}
              date={getDate(part)}
              manufacture={part.manufacturer}
              model={part.model}
              year={part.year}
              color={part.color}
              price={part.price}
              deletePart={delPart}
              updatePart={updatePart}
            />
          </Grid>
        ))}
      </Grid>
      <Tooltip title="Add part" placement="right" arrow="true">
        <Fab
          onClick={handleOpenModal}
          color="primary"
          aria-label="add"
          size="small"
          sx={{
            position: 'fixed',
            bottom: 50,
            left: 10,
            right: 0,
            size: { xs: 'small', md: 'medium' },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <CreatePartModal
        open={open}
        closeModal={handleCloseModal}
        addPart={addPart}
      />
    </Container>
  );
};

export default Catalog;
