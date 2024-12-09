# Capabilities

1. Connect to internet to allow for play over distance with paired boards
2. Have limited buttons/dials for controls
3. Small LEDs with color patterns for user feedback
4. Assist tools using LEDs in board to show potential movements
5. Timer
6. Piece tracking
7. Auto piece movement and setup
8. Warn of illegal move

# Mechancial

1. Controls
	- Buttons surface mount
	- Rotary encoder if needed
	- Simplistic with no screens prefferablly
2. Movement Sysetem
	- Movment system based on 2 stepper motors, belts
	- Combined with **Piece Tracking, Auto Setup** and **Remote Play**
	- Can visit the whole board as well as the outer ring, 10x10 area
	- There will be a RFID scanner in a posistion that will serve as a pick up point the movement system will then pick up the peice and move it too its starting pos

# Electrical

1. Remote Play
	- Wi-Fi board built in
	- Save game state to allow for games played over long time frames
	- Board moves for other player by use of **Movement System**
2. User Feedback
   - Programmable LEDs for display purposes  
   - 7 Segment displays for number functions
   - Simplistic with no screens preferably  
   - Avoid computer connection for most functions
3. Board LEDs
	- Programmable LEDs under every board pos
	- Allows for animation and movement assists
4. Timer
	- Seven segment displays for timers
	- Ideally looks retro
5. Piece Tracking
	- Hall Effect sensors in every place
	- Track magnets in each piece to detect when one is picked up
	- Pieces should "snap" into place to ensure accurate placement and measurement

# Programming
1. Display
    - UI via webpage with live updates
    - Will display puzzles on generation request
    - Issue visual alerts, on confirmed (user presses clock after making) illegal moves
    - Issue warning if no piece movement is detected but time is hit
2. Backend
    - Live update board information every second or so
    - Mark time increments
    - 

# Design

Retro futuristic. Wood and Brass with frosted LEDs and rounded corners
