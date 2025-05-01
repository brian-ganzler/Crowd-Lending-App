from app import create_app
from flask_cors import CORS  # Allow server to communicate to different ports for React app

def main():
    """
    Entry point for running the application.
    :return: None
    """
    app = create_app()
    CORS(app, resources={r"/*": {"origins": "*"}})
    app.run(debug=True)




if __name__ == '__main__':
    main()
