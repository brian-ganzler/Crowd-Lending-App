# Models Folder

## Purpose
This folder contains the code that defines the database schema (table structure) for the application to then create the database. 

## Contents
- __init__.py - Imports all models schemas within the models folder.
- user_model.py - Defines the User table schema.
- investor_model.py - Defines the Investor table schema.
- business_model.py - Defines the Business table schema.

## Design Choice
SQLite3 with raw SQL commands was chosen over an ORM like SQLAlchemy to strengthen understanding of direct SQL query writing and maintain control over database operations.

## Usage
The models in this folder define the SQL schema to create the database tables. The SQL table creation commands are manually executed in app/__init__.py at initialization using sqlite3.

## Conventions
Each model defines exactly one table in the database.