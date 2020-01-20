from flask import Flask
from flask_jsonrpc import JSONRPC
from binary_leds import set_atten

app = Flask(__name__)
jsonrpc = JSONRPC(app, '/api', enable_web_browsable_api=True)

@jsonrpc.method('App.set_atten')
def set(val):
    setval = set_atten(float(val))
    return f"Attenuation set to {setval}"

@jsonrpc.method('App.index')
def index(a):
    return "index function: " + a

if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)

