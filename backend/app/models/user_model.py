def create_user_table(cursor):
    """
    Defines and creates the User table.
    :param cursor: Cursor object used to transmit SQL commands and receive results to/from the database.
    :return: None
    """

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS User (

            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            first_name TEXT,
            last_name TEXT,
            birth_date DATE,
            age INTEGER,
            gender TEXT 
        );
    ''')
