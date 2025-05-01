def create_investor_table(cursor):
    """
    Defines and creates the Investor table.
    :param cursor: Cursor object used to transmit SQL commands and receive results to/from the database.
    :return: None
    """

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Investor (
        investor_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        preferences TEXT NOT NULL,
        risk_tolerance TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES USER(user_id)
        );
    ''')