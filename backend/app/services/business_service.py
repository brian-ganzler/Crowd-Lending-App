def create_business_service(connection, user_id, name, description, industry, location):
    """
    Creates a new entity in the Business table and tied to a User.
    :param connection: sqlite3.Connection - Connection to the database.
    :param user_id: int - ID for the user account to tie the business to.
    :param name: str - Name of the business.
    :param description: str - Description of the business.
    :param industry: str - General industry of the business.
    :param location: str - Location of where the business is registered.
    :return: bool - True if the user was created successfully, False otherwise.
    """

    try:
        cursor = connection.cursor()
        cursor.execute(""" INSERT INTO Business (user_id, name, description, industry, location)
                            VALUES (?, ?, ?, ?, ?)""", (user_id, name, description, industry, location))
    except Exception:
        return False
    return True