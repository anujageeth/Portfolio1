# Portfolio MERN App

This is a portfolio web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It showcases projects, skills, and provides a contact form for inquiries.

## Features

- **Responsive Design**: The application is designed to be responsive and user-friendly across devices.
- **Dynamic Routing**: Utilizes React Router for seamless navigation between pages.
- **Contact Form**: Users can submit inquiries through a contact form.
- **Project Showcase**: Displays a list of projects with descriptions and links.

## Technologies Used

- **Frontend**: React.js, Vite, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas or local MongoDB instance

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-mern-app
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both `client` and `server` directories and fill in the required values.

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. In a new terminal, start the client:
   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.