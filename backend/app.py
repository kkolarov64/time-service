from flask import Flask, jsonify

app = Flask(__name__, static_folder='../frontend')

@app.route('/api/time')
def get_time():
    return jsonify({"time": "12:00:00", "timezone": "UTC"})

@app.route('/')
def serve_frontend():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
