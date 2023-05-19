# Project Test Unidad TIC

## Installation

1.  Make sure you have Docker installed on your system. If you don't, you can download and install it from the official Docker website: <https://www.docker.com/>

## Configuration

### Frontend

1.  Go to the `frontend` folder of this project.
2.  Create a file named `.env` in the `frontend` folder.
3.  Open the `.env` file and copy the following content:

```plaintext
API_HOST="http://localhost:10000/backend/v2/api/"
BASE_DOMAIN=http://localhost/frontend/
HOST="http://localhost"
BASE_URL="/frontend/"
PORT="3000"
API_TOKEN="backend1234567*"
NAME="frontend"
```

### Backend

1.  Go to the `backend` folder of this project.
2.  Create a file named `.env` in the `backend` folder.
3.  Open the `.env` file and copy the following content:

```BASE_URL="/backend/v2/api/"
DB_HOST='database-test'
DB_PORT="5432"
DB_USER="database"
DB_PASSWORD="database1234"
DB_NAME="database"
JWT_SECRET="backend1234567*"
API_TOKEN="backend1234567*"
BASE_DOMAIN="localhost:3000"
DEBUG=1
```

### Execution

1.  Open a terminal or command line.
2.  Navigate to the root of this project.
3.  Run the following command to start the Docker containers:


    sudo docker-compose up

### Routes

-   Backend: localhost:10000 
-   Frontend: localhost:80 
