import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Selector = () => {

  const [image, setImage] = React.useState('');
  const [video, setVideo] = React.useState('');
  const [text, setText] = React.useState('');
  const { id } = useParams()


  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleVideoChange = (event) => {
    setVideo(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', marginLeft: '300px', position: 'fixed', zIndex: 1100 }}>
        <Box sx={{ width: '125px', backgroundColor: 'whitesmoke', marginTop: '6px' }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={image}
              onChange={handleImageChange}
              displayEmpty
            >
              <MenuItem value="">
                <strong>Image</strong>
              </MenuItem>
              <MenuItem ><Link style={{ textDecoration: 'none' }} to={`/addimage/${id}`}>Add Image</Link></MenuItem>
              <MenuItem ><Link style={{ textDecoration: 'none' }} to={`/imagelist/${id}`}>Image List</Link></MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '125px', backgroundColor: 'whitesmoke', marginLeft: '10px', marginTop: '6px' }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={video}
              onChange={handleVideoChange}
              displayEmpty
            >
              <MenuItem value="">
                <strong>Video</strong>
              </MenuItem>
              <MenuItem ><Link style={{ textDecoration: 'none' }} to={`/addvideo/${id}`}>Add Video</Link></MenuItem>
              <MenuItem ><Link style={{ textDecoration: 'none' }} to={`/videolist/${id}`}>Video List</Link></MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '125px', backgroundColor: 'whitesmoke', marginLeft: '10px', marginTop: '6px' }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={text}
              onChange={handleTextChange}
              displayEmpty
            >
              <MenuItem value="">
                <strong>Text</strong>
              </MenuItem>
              <MenuItem ><Link style={{ textDecoration: 'none' }} to={`/addtext/${id}`}>Add Text</Link></MenuItem>
              <MenuItem ><Link style={{ textDecoration: 'none' }} to={`/textlist/${id}`}>Text List</Link></MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  )
}

export default Selector