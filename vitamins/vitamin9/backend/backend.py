from flask import Flask, jsonify
import random

# Initialize the Flask application
app = Flask(__name__)

# List of quotes
quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
]

# Define the endpoint to serve a random quote
@app.route('/random-quote', methods=['GET'])
def get_random_quote():
    quote = random.choice(quotes)
    return jsonify({"quote": quote})

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
