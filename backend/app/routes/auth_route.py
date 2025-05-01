import sqlite3
from flask import Blueprint, request, jsonify
from ..app_config import DATABASE_DIR
from ..services.auth import authenticate_user


auth_bp = Blueprint("auth_bp", __name__, url_prefix="/api/auth")

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    required_fields = ["username", "password"]
    if not data or any(field not in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400
    username, password  =(data["username"], data["password"])

    connection = None
    try:
        connection = sqlite3.connect(DATABASE_DIR)
        user_id = authenticate_user(connection, username, password)
        if not user_id:
            return jsonify({"error": "Invalid username or password"}), 401

        return jsonify({"message": "User successfully authenticated", "user_id": user_id}), 200
    except Exception:
        return jsonify({"error": "Failed to validate the user in the database"}), 500

    finally:
        if connection:
            connection.close()

