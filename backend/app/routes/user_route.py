import sqlite3
from flask import Blueprint, request, jsonify
from ..app_config import DATABASE_DIR
from ..services.user_service import create_user_service


user_bp = Blueprint("user_bp", __name__, url_prefix="/api/users")

@user_bp.route("/create", methods=["POST"])
def create_user_route():
    """
    Receive a JSON object request with the user's information.
    Create a connection with the database and pass user attributes to call create_user_service() to create the user entity.
    :return: JSON message - Error message if required fields are missing or backend error, message if request was successful.
    """

    data = request.get_json()
    required_fields = ["username", "password", "email"]
    if not data or any(field not in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400  # Bad request
    username, password, email = (data["username"], data["password"], data["email"])

    connection = None
    try:
        connection = sqlite3.connect(DATABASE_DIR)
        success = create_user_service(connection, username, password, email)
        if not success:  # Check if service function created user entity
            raise Exception("Failed to create user in the database")
        connection.commit()

    except Exception as e:
        if connection:  # Check if the connection exists to limit potential errors
            connection.rollback()  # Remove all data in the memory of the database to ensure data accuracy
        print(f"Failed to create user in the database: \n{e}\n")
        return jsonify({"error": "Failed to create the user in the database"}), 500  # Backend error

    finally:
        if connection:  # Check if the connection exists to limit potential errors
            connection.close()
    return jsonify({"message": "User created successfully"}), 201  # Request successful



