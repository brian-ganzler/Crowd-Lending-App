def create_investor_service(connection, user_id, preferences, risk_tolerance):
    """
    Creates a new entity in the Investor table and tied to a User.
    :param connection: sqlite3.Connection - Connection to the database.
    :param user_id: int - ID for the user account
    :param preferences: str - Investor preferences in industries
    :param risk_tolerance: str - Risk tolerance for investor from Low, Medium, High
    :return: bool - True if the user was created successfully, False otherwise.
    """

    try:
        cursor = connection.cursor()
        cursor.execute(""" INSERT INTO Investor (user_id, preferences, risk_tolerance)
                            VALUES (?, ?, ?)""", (user_id, preferences, risk_tolerance))
    except Exception:
        return False
    return True