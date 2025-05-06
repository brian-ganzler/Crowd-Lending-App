def create_user_service(connection, username, password, email):
    """
    Creates a new entity in the User table.
    :param connection: sqlite3.Connection - Connection to the database.
    :param username: str - Username for the user account.
    :param password: str - Password for the user account.
    :param email: str - Email address for the user account.
    :return: bool - True if the user was created successfully, False otherwise.
    """

    try:
        cursor = connection.cursor()
        cursor.execute("""INSERT INTO User (username, password, email)
                            VALUES (?, ?, ?)""", (username, password, email))
    except Exception:
        return False
    return True

def get_user_by_username(connection, username):
    """
    Fetch a user_id, username, and password of a user from the database by username.
    :param connection:  sqlite3.Connection - Connection to the database.
    :param username: Username for the user account.
    :return: dict with keys "user_id", "username", "password" if user is found;
             None if user is not found;
             False if a database error occurs.
    """
    try:
        cursor = connection.cursor()
        cursor.execute("""SELECT user_id, username, password FROM User WHERE username == ?""", (username,))
        row = cursor.fetchone()
        return row
    except Exception:
        return False

