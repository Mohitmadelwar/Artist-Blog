import React, { useState } from 'react'
import axios from 'axios'
import './css/NewBlog.css'
const NewBlog = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [ error , setError ] = useState('');
    const [success , setSuccess] = useState('');
    
const handleSubmit = async(e) => {
e.preventDefault();

setError('');
setSuccess('');

try {

    const response = await axios.post('https://artist-blog-backend.vercel.app/api/cards',{title,description,url});

    if(response.status== 201) {

        setTitle('');
        setDescription('');
        setSuccess('Card created successfully!');
        setUrl('');
        
    } else{
        setError('Failed to create the card.');

    }
    
} catch (error) {
    setError('An error occurred while creating the card.');

}

}

  return (
    <div className="blog">
    <div className="blog-container">
    <h1>Create a New Blog</h1>

    {success && <p style={{ color: 'green' }}>{success}</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}

    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
      <label>Image URL:</label>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required

          />
        </div>
      <button type="submit">Create Blog</button>
    </form>
  </div>
  </div>
  )
}

export default NewBlog
