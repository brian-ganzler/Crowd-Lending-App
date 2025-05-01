import sqlite3
from flask import Blueprint, request, jsonify
from ..app_config import DATABASE_DIR
from ..services.business_service import create_business_service

business_bp  =Blueprint("business_bp", __name__, url_prefix="/api/businesses")

@business_bp.route("/create", methods=["POST"])
def create_business_route():
    """
    Receive a JSON object request with the business's information.
    Create a connection with the database and pass business attributes to call create_business_service() to create the user entity.
    :return: JSON message - Error message if required fields are missing or backend error, message if request was successful.
    """

    data = request.get_json()
    required_fields = ["user_id", "name", "description", "industry", "location"]
    if not data or any(field not in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400  # Bad request
    user_id, name, description, industry, location = (data["user_id"], data["name"], data["description"], data["industry"], data["location"])
    connection = None
    try:
        connection = sqlite3.connect(DATABASE_DIR)
        success = create_business_service(connection, user_id, name, description, industry, location)
        if not success:
            raise Exception("Failed to create business in the database")
        connection.commit()
    except Exception as e:
        if connection:
            connection.rollback()  # Remove all data in the memory of the database to ensure data accuracy
        print(f"Error creating user: \n{e}\n)")
        return jsonify({"error": "Failed to create business in the database"}), 500
    finally:
        if connection:
            connection.close()
    return jsonify({"message": "Business created successfully"}), 201


