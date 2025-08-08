# Dockerfile for the backend application.
# This file defines how the backend application's Docker image is built.

# Use a slim Python 3.9 base image for a smaller image size.
FROM python:3.11-slim

# Set the working directory inside the container.
WORKDIR /app

# Copy the requirements file into the container.
COPY ./requirements.txt /app/requirements.txt

# Install Python dependencies. 
# --no-cache-dir: Disables the pip cache, reducing image size.
# --upgrade: Ensures all packages are upgraded to their latest versions.
# -r /app/requirements.txt: Installs packages listed in requirements.txt.
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt && \
    pip install --no-cache-dir torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu && \
    pip install --no-cache-dir captum

# Copy the entire application code into the container.
COPY . /app

# Command to run the application in production using Gunicorn with Uvicorn workers.
# Gunicorn: A WSGI HTTP server for Unix, used to manage Uvicorn worker processes.
# app.main:app: Specifies the FastAPI application entry point (app object in main.py module).
# --workers 4: Configures 4 Uvicorn worker processes for concurrency.
# --worker-class uvicorn.workers.UvicornWorker: Specifies Uvicorn's ASGI worker class.
# --bind 0.0.0.0:8000: Binds the server to all network interfaces on port 8000.
CMD ["gunicorn", "app.main:app", "--workers", "4", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000"]
