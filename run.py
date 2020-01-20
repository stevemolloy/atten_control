from flask import Flask
from flask_jsonrpc import JSONRPC

app = Flask(__name__)
jsonrpc = JSONRPC(app, '/api', enable_web_browsable_api=True)

@jsonrpc.method('App.index')
def index(a):
    return "index function: " + a

if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)

