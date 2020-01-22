from flask import Flask
from flask_jsonrpc import JSONRPC
from binary_leds import set_atten
from crossdomain import crossdomain

app = Flask(__name__)
jsonrpc = JSONRPC(app, '/api', enable_web_browsable_api=True)

@jsonrpc.method('App.set_atten')
@crossdomain(origin='*')
def set(val):
    setval = set_atten(float(val))
    if not setval:
        return f"Error.  Attenuation not set."
    return f"Attenuation set to {setval}"

if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)

