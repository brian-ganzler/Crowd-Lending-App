import sqlite3
from flask import Blueprint, request, jsonify
from ..app_config import DATABASE_DIR
from ..services.investor_service import create_investor_service

investor_bp = Blueprint("investor_bp", __name__, url_prefix="/api/investors")

@investor_bp.route("/create", methods=["POST"])
def create_investor_route():
    """
    Receive a JSON object request with the investor's information.
    Create a connection with the database and pass investor attributes to call create_investor_service() to create the user entity.
    :return: JSON message - Error message if required fields are missing or backend error, message if request was successful.
    """

    data = request.get_json()
    required_fields = ["user_id", "preferences", "risk_tolerance"]
    if not data or any(field not in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400  # Bad request
    user_id, preferences, risk_tolerance = (data["user_id"], data["preferences"], data["risk_tolerance"])
    connection = None

    try:
        connection = sqlite3.connect(DATABASE_DIR)
        success = create_investor_service(connection, user_id, preferences, risk_tolerance)
        if not success:  # Check if service function created user entity
            raise Exception("Failed to create investor in the database")
        connection.commit()
    except Exception as e:
        if connection:  # Check if the connection exists to limit potential errors
            connection.rollback()  # Remove all data in the memory of the database to ensure data accuracy
        print(f"Failed to create investor in the database: \n{e}\n")
        return jsonify({"error": "Failed to create investor in the database"}), 500  #Backend error
    finally:
        if connection:  # Check if the connection exists to limit potential errors
            connection. close()
    return jsonify({"message": "Investor created successfully"}), 201  #Request successful