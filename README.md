# Reverse ETL to Webhook

Welcome to the **Reverse ETL to Webhook** project! This setup allows you to sync data from a PostgreSQL database to a webhook with ease. The project is split into two main components:

- **Backend**: Built with Node.js and Express, it handles database connections and data transformation.
- **Frontend**: Created using React and Material-UI, it lets you configure the Reverse ETL flow and preview data mappings.

For detailed requirements and evaluation criteria, please refer to [INSTRUCTIONS.md](INSTRUCTIONS.md).

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Docker**: To run the PostgreSQL container.
- **Docker Compose**: For managing multi-container Docker applications.
- **Node.js** (version 14 or higher).
- **npm** (Node Package Manager).

## Quick Start

To get the project up and running locally, follow these steps:

### 1. Set Up the Backend (PostgreSQL Database)

The backend relies on a PostgreSQL database. You can quickly start the database container using Docker with the following command:

```bash
npm run start-customer-db
```

This command will:

- Start the PostgreSQL container as defined in `docker-compose.yml`.
- Wait for the container to become healthy.
- Automatically seed the database with 20 realistic users.
- Display the connection DSN and credentials.

### 2. Run the Backend

To start the backend server:

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The backend server will start using `ts-node-dev` in development mode and listen for incoming requests.

### 3. Run the Frontend

To launch the frontend React application:

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend server will start with Vite, and the app will be accessible at [http://localhost:3000](http://localhost:3000).

### 4. Run the Full Application

Ensure both the frontend and backend are running in separate terminal windows. The frontend app will automatically interact with the backend API, allowing you to configure the Reverse ETL flow, test connections, map columns to JSON, and preview the data.

## Project Structure

Here's an overview of the project's structure:

```
reverse-etl-to-webhook
├── .assets
│   └── diagram.png        # Architecture diagram for reference
├── backend                # Backend code for managing the PostgreSQL database and data transformation
│   ├── src                # Backend source code
│   ├── tsconfig.json      # TypeScript configuration for the backend
│   └── package.json       # Backend dependencies
├── db                     # SQL scripts for initializing and seeding the database
├── docker-compose.yml     # Docker Compose configuration for running PostgreSQL
├── frontend               # Frontend code with React and Material-UI
│   ├── src                # Frontend source code
│   ├── vite.config.ts     # Vite configuration file
│   └── package.json       # Frontend dependencies
├── INSTRUCTIONS.md        # Detailed instructions for the take-home assignment
├── package.json           # Root package.json to manage both frontend and backend scripts
└── README.md              # Project documentation
```

## Assumptions Made

During development, the following assumptions were made:

- **PostgreSQL Database**: The project assumes the use of PostgreSQL for data storage and querying.
- **No Authentication**: The application does not include authentication or authorization. It assumes the user has direct access to the backend API for configuring Reverse ETL mappings.
- **Data Source**: The project is designed to work with a single data source (PostgreSQL) and expects the database schema to match the one defined in the backend.
- **No Persistence**: The frontend state (e.g., column mappings) is not persisted. Any changes will be lost after a page refresh.
- **Webhook Destination**: While the concept of sending data to a webhook is mentioned, the actual implementation of syncing data to a webhook is out of scope for this assignment.

## Potential Improvements

Given more time, the following enhancements could be considered:

- **Persistence of Mappings**: Implement functionality to save column-to-JSON path mappings, either on the backend or using localStorage on the frontend. This would allow users to save and reuse their configurations.
- **Error Handling and Validation**: Improve error handling and validation, especially around database connection issues, invalid mappings, and data inputs. This would enhance user experience by providing immediate feedback on issues.
- **UI/UX Improvements**: Polish the user interface with consistent styling, additional loading indicators, tooltips, and error messages. Optimize for mobile view using Material-UI Grid for better responsiveness.
- **Enhanced Data Preview**: Make the preview more dynamic by showing the actual transformed data based on mappings, along with pagination and better formatting for large datasets. Implement an option to sync data to a real webhook for testing.
- **Unit and Integration Testing**: Implement unit tests for frontend components using Jest and React Testing Library. Add integration tests for the backend to test API routes and database operations.
- **Multiple Data Source Support**: Extend the project to support multiple data sources (e.g., MySQL, MongoDB) in addition to PostgreSQL, making the system more flexible and adaptable to different user needs.
- **Authentication and Role-Based Access Control**: Add user authentication and role-based access control (RBAC) for enhanced security and to allow different users different levels of access to the ETL configuration.
- **Improve Code Quality**: Refactor the code to improve readability, modularity, and reusability. Follow SOLID principles and ensure the backend and frontend code are well-structured.
