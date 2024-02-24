/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.init = function( system, options ) {
	// Uncomment the following code line
	// to verify operation:

	//PS.debug( "PS.init() " );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	PS.gridSize( 4, 4 );

    PS.color( 2, 1, 255, 192, 64 );
	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "1: " );

	// Add any other initialization code you need here.
};

var test = 0;
var max = 1;
/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	// Uncomment the following code line
	// to inspect x/y parameters:
	if (x == 2 && y == 1 && test == 0){
    test = (test + 1);
	}
		else if (test == 0){

	}
	if (x == 1 && y == 2 && test == 1){
		test = (test + 1);
		}
		
	if (x == 3 && y == 3 && test == 2){
			test = (test + 1);
			}
		
	if (x == 0 && y == 1 && test == 3){
		test = (test + 1);
				}
		

	if (x == 0 && y == 3 && test == 4){
    test = (test + 1);
	

	}
	if (x == 0 && y == 0 && test == 5){
		test = (test + 1);
		}
		
	if (x == 2 && y == 2 && test == 6){
			test = (test + 1);
			}
	
	if (x == 3 && y == 2 && test == 7){
		test = (test + 1);
				}
		
			
	if (x == 3 && y == 1 && test == 8){
		test = (test + 1);
				}
		
	
	
	if (x == 1 && y == 3 && test == 9){
		test = (test + 1);
			}
		
	if (x == 2 && y == 0 && test == 10){
		test = (test + 1);
				}

	if (x == 0 && y == 2 && test == 11){
		test = (test + 1);
				}



	if (x == 1 && y == 1 && test == 12){
		test = (test + 1);
			}
				
	if (x == 3 && y == 0 && test == 13){
		test = (test + 1);
			}
					
	if (x == 2 && y == 3 && test == 14){
		test = (test + 1);
			}
			
	if (x == 1 && y == 0 && test == 15){
		test = (test + 1);
			}
	
	//PS.debug(test);
   // PS.color( x, y, PS.COLOR_BLUE );
	//PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );


	// Add code here for mouse clicks/touches
	// over a bead.
 
        if (test == 1 && max == 1){
            max = max + 1
            test = 0
            PS.color( 1, 2, 255, 192, 64 );
			PS.statusText( "2: " );
            
        };
		if (test == 2 && max == 2){
            max = max + 1
            test = 0
            PS.color( 3, 3, 255, 192, 64 );
			PS.statusText( "3: " );
            
        };
		if (test == 3 && max == 3){
            max = max + 1
            test = 0
            PS.color( 0, 1, 255, 192, 64 );
			PS.statusText( "4: " );
            
        };
		if (test == 4 && max == 4){
            max = max + 1
            test = 0
            PS.color( 0, 3, 255, 192, 64 );
			PS.statusText( "5:" );
            
        };

		if (test == 5 && max == 5){
            max = max + 1
            test = 0
            PS.color( 0, 0, 255, 192, 64 );
			PS.statusText( "6: " );
            
        };
		if (test == 6 && max == 6){
            max = max + 1
            test = 0
            PS.color( 2, 2, 255, 192, 64 );
			
			PS.statusText( "7: " );
            
        };
		if (test == 7 && max == 7){
            max = max + 1
            test = 0
            PS.color( 3, 2, 255, 192, 64 );
			PS.statusText( "7: " );
            
        };
		if (test == 8 && max == 8){
            max = max + 1
            test = 0
            PS.color( 3, 1, 0, 0, 0 );
			PS.color( 1, 2, 0, 0, 0 );
			PS.color( 2, 1, 0, 0, 0 );
			PS.color( 3, 3, 0, 0, 0 );
			PS.color( 0, 1, 0, 0, 0 );
			PS.color( 0, 3, 0, 0, 0 );
			PS.color( 2, 2, 0, 0, 0 );
			PS.color( 3, 2, 0, 0, 0 );
			PS.color( 0, 0, 0, 0, 0 );
			PS.statusText( "8: " );
            
        };

		if (test == 9 && max == 9){
            max = max + 1
            test = 0
            PS.color( 1, 3, 0, 0, 0 );
            PS.statusText( "9: " );
        };
		if (test == 10 && max == 10){
            max = max + 1
            test = 0
            PS.color( 2, 0,  0, 0, 0 );
			PS.statusText( "10: " );
            
        };
		if (test == 11 && max == 11){
            max = max + 1
            test = 0
            PS.color( 0, 2,  0, 0, 0 );
			PS.statusText( "11: " );
            
        };
		if (test == 12 && max == 12){
            max = max + 1
            test = 0
            PS.color( 1, 1,  0, 0, 0 );
			PS.statusText( "12: " );
            
        };
		if (test == 13 && max == 13){
            max = max + 1
            test = 0
            PS.color( 3, 0,  0, 0, 0 );
			PS.statusText( "13: " );
            
        };
            
		if (test == 14 && max == 14){
            max = max + 1
            test = 0
            PS.color( 0, 0, 255, 255, 255 );
			PS.color( 1, 0, 255, 255, 255 );
			PS.color( 2, 0, 255, 255, 255 );
			PS.color( 3, 0, 255, 255, 255 );
			PS.color( 0, 1, 255, 255, 255 );
			PS.color( 1, 1, 255, 255, 255 );
			PS.color( 2, 1, 255, 255, 255 );
			PS.color( 3, 1, 255, 255, 255 );
			PS.color( 0, 2, 255, 255, 255 );
			PS.color( 1, 2, 255, 255, 255 );
			PS.color( 2, 2, 255, 255, 255 );
			PS.color( 3, 2, 255, 255, 255 );
			PS.color( 0, 3, 255, 255, 255 );
			PS.color( 1, 3, 255, 255, 255 );
			PS.color( 2, 3, 255, 255, 255 );
			PS.color( 3, 3, 255, 255, 255 );

			PS.statusText( "14: ##%/# " );
            
        };

		if (max == 15){
			PS.statusText( "Congradulations" );
            
        };
        
    
};


/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//PS.release = function( x, y, data, options ) {
    
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

    
    // Add code here for when the mouse button/touch is released over a bead.
//};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:
//	if()
  //  PS.color( x, y, PS.COLOR_BLUE );
    //PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
//};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
//};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
//};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
//};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
//};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

//PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
//};

