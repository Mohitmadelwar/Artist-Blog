# Blog API and React Frontend

## Project Description

This project consists of a RESTful API and a React frontend for managing a blog about top Indian hip-hop artists. The API allows users to create, retrieve, and manage blog posts, while the frontend provides a user interface to interact with these posts. Users can add new blog entries, view details about each blog, and search for specific artist blogs.
## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/help-center-api-react-frontend.git
   cd help-center-api-react-frontend

2. Backend Setup:

-Navigate to the backend directory:
-cd backend

-Install dependencies:
-npm install

- Create a .env file in the backend directory with the following content:
- MONGODB_URI=your_mongodb_connection_string

- Start the server:
- npx nodemon server.js

3. Frontend Setup:
  cd ../frontend

-Install dependencies:
-npm install

-Start the React application:
-npm start

The application will run at http://localhost:5173

### API Endpoints to post data

   Create a Card:

  -Method: POST

  URL: http://localhost:5000/api/cards

  -Request Body:
 {

  "title": "Card Title",
  "description": "Card Description"
 }

   -Get All Cards:

   -Method: GET
   URL: http://localhost:5000/api/cards
   -Get a Specific Card:

   -Method: GET
   URL: http://localhost:5000/api/cards/:title

### Additional Features
   - Add New Blog Post: Users can add a new blog entry by clicking the "Add New Blog" button.
   - View Blog Details: Click on a blog post to view detailed information.
   - Search for Artist Blogs: Use the search functionality to find blogs related to specific artists.

# This `README.md` file provides a brief description of the project, detailed installation instructions for both the backend and frontend, and the API endpoints with methods and URLs.
