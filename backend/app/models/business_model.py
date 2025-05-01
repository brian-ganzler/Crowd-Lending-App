def create_business_table(cursor):
    """
    Defines and creates the Business table.
    :param cursor: Cursor object used to transmit SQL commands and receive results to/from the database.
    :return:
    """

    cursor.execute(
        '''
        CREATE TABLE IF NOT EXISTS Business (
            business_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            industry TEXT NOT NULL,
            location TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES USER(user_id)
        );
    ''')