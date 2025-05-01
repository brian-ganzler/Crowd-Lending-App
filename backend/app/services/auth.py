from .user_service import get_user_by_username

def authenticate_user(connection, username, password):
    """
    Checks username and password for authentication
    :param connection: sqlite3.Connection - Connection to the database.
    :param username: Username for the user account.
    :param password: Password for the user account.
    :return: False or int - int of user_id if authentication successfully, False otherwise.
    """

    try:
        user = get_user_by_username(connection, username)
        if user and user["password"] == password:
            return user["user_id"]
    except Exception:
        return False