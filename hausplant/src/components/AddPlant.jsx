import React, { useState } from 'react';
import axios from 'axios';

const AddPlant = (props) => {
  const [plant, setPlant] = useState('');
  const [datePlanted, setDatePlanted] = useState('');
  const [dateRepotted, setDateRepotted] = useState('');
  const [watering, setWatering] = useState('');
  const [lighting, setLighting] = useState('');
  const [location, setLocation] = useState('');
  const [yellowing, setYellowing] = useState('');
  const [infoLink, setInfoLink] = useState('');

  // useEffects cannot run asynchronously
  // enclose data in data object
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      plant,
      datePlanted,
      dateRepotted,
      watering,
      lighting,
      location,
      yellowing,
      infoLink
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/hausplant`;
    await axios.post(airtableURL, { fields }, {
      header: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    })
    props.setFetchPlants(!props.fetchPlants);
    setPlant('');
    setDatePlanted('');
    setDatePotted('');
    setWatering('');
    setLighting('');
    setLocation('');
    setYellowing('');
    setInfoLink('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)} />
      <label htmlFor="text">Text: </label>
      <textarea
        name="text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)} />
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)} />
      <button type="submit">`Fry Me Cap'n`</button>
    </form>
  )
}

export default AddPlant;