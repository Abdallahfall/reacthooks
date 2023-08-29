import React, { useState } from 'react';
import { Container, Form } from "react-bootstrap";
import FilmList from './FilmList';
import './App.css';

const App = () => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [films, setFilms] = useState([
    // Ajoutez ici vos films initiaux
  ]);

  const handleAddFilm = (e) => {
    e.preventDefault();
    const newFilm = {
      title: e.target.title.value,
      description: e.target.description.value,
      posterURL: e.target.posterURL.value,
      note: parseFloat(e.target.note.value),
    };
    setFilms([...films, newFilm]);
    e.target.reset();
  };

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === '' || film.note >= parseFloat(ratingFilter))
  );

  return (
    <Container className="app-container">
      <h1>Liste de Films</h1>
      <br/>
      <Form>
        <Form.Control
          type="text"
          placeholder="Filtrer par titre"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
        <Form.Control
          type="number"
          min="1"
          max="10"
          placeholder="Filtrer par note"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </Form>
      <br/>
      <FilmList films={filteredFilms} onAddFilm={handleAddFilm}/>
    </Container>
  );
};
export default App;