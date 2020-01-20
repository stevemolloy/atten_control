import RPi.GPIO as gpio
from RPi.GPIO import BOARD, OUT, LOW, HIGH
from time import sleep

LATCH_PIN = 31
CHANS = [40, 38, 36, 37, 35, 33]
LATCH_TIME = 0.1

gpio.setmode(BOARD)
gpio.setup(CHANS, OUT, initial=LOW)
gpio.setup(LATCH_PIN, OUT, initial=LOW)

def dectobinlist(num):
    "Returns a list of Booleans corresponding to the binary representation of the numerical input"
    return [(num & 2**digit) > 0 for digit in range(5, -1, -1)]

def set_atten(val):
    "Sets the attenuation of the ZX76-31R5A-PNS+ to val."
    dec_repr = int(val*2)

    # Set the pins
    for chan, state in zip(CHANS, dectobinlist(dec_repr)):
        gpio.output(chan, state)

    # Latch_pin HIGH then LOW with suitable timing
    sleep(LATCH_TIME)
    gpio.output(LATCH_PIN, HIGH)
    sleep(LATCH_TIME)
    gpio.output(LATCH_PIN, LOW)
    sleep(LATCH_TIME)

for i in range(64):
    atten = i/2
    set_atten(atten)

gpio.cleanup()

