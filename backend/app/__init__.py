from flask import Flask
import sqlite3
from .app_config import DATABASE_DIR
from .routes.auth_route import auth_bp
from .routes.user_route import user_bp
from .routes.investor_route import investor_bp
from .routes.business_route import business_bp


def initialize_db(db_path=DATABASE_DIR):
    """
    Create the connection link and cursor for the database, import the database creation functions, and call the method. Commit the changes and close the connection.
    :param db_path: Path to the database file.
    :return: Boolean, True if the database was initialized, False if an error occurs.
    """

    connection = None  # Initialize connection variable to avoid conflicts uf exception occurs, and connection.rollback() is called
    try:
        connection = sqlite3.connect(db_path)  # Connection link to the database
        cursor = connection.cursor()  # Cursor object to handle database requests and results

        # Import the database creation functions and call the method
        from .models import create_user_table, create_investor_table, create_business_table
        create_user_table(cursor)
        create_investor_table(cursor)
        create_business_table(cursor)

        connection.commit()
        return True
    except Exception as e:
        connection.rollback()  # Removes all data in the memory of the database if an error occurs to ensure data accuracy
        print(f"Error initializing database: \n{e}\n")
        return False
    finally:
        connection.close()


def create_app():
    """
    Create the Flask application and initialize the database.
    :return: Flask app - Flask application object.
    """

    app = Flask(__name__)

    with app.app_context():  # Allow g and current_app to be used in the application
        initialize_db()

    # Allow backend paths to be visible
    app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(investor_bp)
    app.register_blueprint(business_bp)


    return app

