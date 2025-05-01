# Services Folder

## Purpose
This folder contains the code to fulfill the requests from the routes by applying business logic and performing, create, read, update, or delete operations on the database.

## Contents
- __init__.py - Marks this folder as a Python package for module imports.
- user_service.py - Fulfills requests for the User table.
- investor_service.py - Fulfills requests for the Investor table.
- business_service.py - Fulfills requests for the Business table.

## Design Choice


## Usage
The services in this folder handle business logic from route requests, including creating, reading, updating, or deleting entities/attributes from their respective tables. 

## Conventions
Each service primarily manages exactly one table in the database.