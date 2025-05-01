# Routes Folder

## Purpose
This folder contains the code to fulfill requests made from the frontend. The routes will control the flow of data between the frontend and services.  

## Contents
- __init__.py - Marks this folder as a Python package.
- user_route.py - Primarily communicates with the user-service.py.
- investor_route.py - Primarily communicates with the investor_service.py.
- business_route.py - Primarily communicates with the business_service.py.

## Design Choice
Routes are organized by the database tables to maintain modularity and maintainability. Each route focuses on interacting with its corresponding service. 

## Usage
Routes will answer all requests made from the React frontend. These requests are then passed to the services, relaying the results back to the frontend if necessary. 

## Conventions
Each route communicates primarily with one service. 