# Parts
## Computer

The controller will be a Raspberry Pi Zero W 2

## Motors

The Motors will be 28BYJ-48 Stepper Motors.
The Motors will be driven by 2 ULN2003 Driver Boards

## Buttons

The Buttons will be simple board pin inputs

## Rotary Encoder

The Rotary Encoder will be a KY-040 Rotary Encoder

## Displays

The Seven Segment Displays will be WWZMDiB 4 Digit 7 Segment LED Display Boards
All LEDS will be in a single line using addressable the WS2812B Protocol

## NFC Reader

The NFC Reader will be a Mifare RC522 reader boards

## Electro Magnet

The Electro Magnet will be a BDE-0515-12 4lbs magnet
Will require a relay to function. The Relay will be a AEDIKO DC 12V Relay Module

# Connections

## Power

Everything will be powered by a single plug in source. 

## Internet

Internet will be handeled by the Pi Zero W 2 through wifi or Micro-Usb port

## LEDS - 2 Pins - CLK

Addressable LEDs will be controlled by a single digital output pin using the WS2812B protocol
Seven Segment displays will take a clock signal and a control signae

## Rotary Encoders - 2 Pins - CLk

The Rotary Encorders will have a clock, data, and control pin

## Buttons - 2 Pins

The Buttons will have a single read pin which will be either high or low at time of reading

## Motor Controllers - 8 Pins

The motor controllers will have 4 control pins, in1-4

## NFC Reader - 2 Pins - CLK

The NFC Reader will take SPI interface for communication. It will take a CLK pin and 2 data, 1 in and 1 out

## Electro Magnet and Relay - 1 Pin

The Electro Magnet will be controlled by the Relay, The relay will only have 1 trigger pin

## Total

15 Control Pins
1-3 Clock Pins

3.3v
5v
12v
GND

# Cost

Cost of components for 2 devices currently sits at $107* for 3 without the electro magnet.
The electro manget will bring the price up by $33*.

*This price does not include the nfc tags, peices, or physical device but rather just electrical hardware. 
