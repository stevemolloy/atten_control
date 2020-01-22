# Control of a digital step RF attenuator
This project gives control of a Minicircuits digital step attenuator via a simple web interface.

This project is intended to be installed on a Raspberry Pi.  With some minor changes the frontend could be installed elsewhere, although it should be able to reach the backend server on the Raspberry Pi via the network.

## Backend
The low level control of the attenuator is done via the GPIO pins of the Raspberry Pi on which the backend is installed.

Python is used for the direct control, while a Flask server is used to define the RPC call to the python library.

# Frontend
The client-side UI is a React web-app.  It is extremely simple since the attenuator in question does not allow readback of the values.  So the web app consists of a dropdown box giving the values allowed for the attenuation, and a "Set" button to submit the change to the attenuator via an RPC call to the backend.
