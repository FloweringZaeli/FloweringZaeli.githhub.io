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

	PS.gridSize( 8, 8 );

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "Match" );

	
	let bline1 = PS.line(-1,-1,7,7);
	for (let i = 0; i < bline1.length; i++){
		PS.color(bline1[i][0], bline1[i][1], PS.COLOR_BLUE);
	}
	let rline1 = PS.line(0,-1,7,6);
	for (let i = 0; i < rline1.length; i++){
		PS.color(rline1[i][0], rline1[i][1], PS.COLOR_RED);
	}
	let gline1 = PS.line(1,-1,7,5);
	for (let i = 0; i < gline1.length; i++){
		PS.color(gline1[i][0], gline1[i][1], PS.COLOR_GREEN);
	}




/*
	var x = 0;
	var y = 0;
	for (var i = 0; i < 8; i++ ){
		
		if (x == 0) {
			PS.color( x, y, PS.COLOR_BLUE );
			var x = x + 1
		}
		if (x == 1){
			PS.color( x, y, PS.COLOR_RED );
			var x = x + 1
		}
		if (x == 2){
			PS.color( x, y, PS.COLOR_GREEN );
			var x = x + 1
			var x = x + 1
		}
		if (x == 3){
			PS.color( x, y, PS.COLOR_WHITE );
		}
		if (x == 4) {
			PS.color( x, y, PS.COLOR_BLUE );
			var x = x + 1
		}
		if (x == 5){
			PS.color( x, y, PS.COLOR_RED );
			var x = x + 1
		}
		if (x == 6){
			PS.color( x, y, PS.COLOR_GREEN );
			var x = x + 1
		}
		if (x == 7){
			PS.color( x, y, PS.COLOR_WHITE );
			var x = 0
			var y = y + 1
		}
		PS.debug(x + ", " + y);

	
	
	}

	*/
	// Add any other initialization code you need here.
};






var b = false;
var g = false;
var r = false;
var w = false;

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
	

	var color = PS.unmakeRGB( PS.color( x , y ), {} );
	PS.debug("aaa");

	
	if(color.r == 255 && color.g == 255 && color.b == 255) {
		if (b == false ){
		PS.color( x, y, PS.COLOR_BLUE );
		}
		
		else if (r == false){
			PS.color( x, y, PS.COLOR_RED );
		}
		else if (g == false){
			PS.color( x, y, PS.COLOR_GREEN );
		}
		else if (w == false){
			PS.color( x, y, PS.COLOR_WHITE );
		}
			
		}
	
	else if (color.r == 0 && color.g == 0 && color.b == 255){
		if (r == false ){
			PS.color( x, y, PS.COLOR_RED );
			}
		
				else if (g == false){
				PS.color( x, y, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x, y, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x, y, PS.COLOR_BLUE );
				}
				
			}
		


	else if (color.r == 255 && color.g == 0 && color.b == 0){
		if (g == false ){
			PS.color( x, y, PS.COLOR_GREEN );
			}
			else if (w == false){
				PS.color( x, y, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x, y, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x, y, PS.COLOR_RED );
				}
			}
		
	else if (color.r == 0 && color.g == 255 && color.b == 0){
		if (w == false ){
			PS.color( x, y, PS.COLOR_WHITE );
			}
			else if (b == false){
				PS.color( x, y, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x, y, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x, y, PS.COLOR_GREEN );
				}		
			}
	
//BR
	if (x < 7){
	var color = PS.unmakeRGB( PS.color( x + 1 , y ), {} );
	if(color.r == 255 && color.g == 255 && color.b == 255) {
		if (b == false ){
			PS.color( x + 1, y, PS.COLOR_BLUE );
			}
			else if (r == false){
				PS.color( x + 1, y, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x + 1, y, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x + 1, y, PS.COLOR_WHITE );
				}
				
			
	}
	else if (color.r == 0 && color.g == 0 && color.b == 255){
		if (r == false ){
			PS.color( x + 1, y, PS.COLOR_RED );
			}
			else if (g == false){
				PS.color( x + 1, y, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x + 1, y, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x + 1, y, PS.COLOR_BLUE );
				}
				
			}
	
	else if (color.r == 255 && color.g == 0 && color.b == 0){
		if (g == false ){
			PS.color( x + 1, y, PS.COLOR_GREEN );
			}
			else if (w == false){
				PS.color( x + 1, y, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x + 1, y, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x + 1, y, PS.COLOR_RED );
				}
			
	}

	else if (color.r == 0 && color.g == 255 && color.b == 0){
		if (w == false ){
			PS.color( x + 1, y, PS.COLOR_WHITE );
			}
			else if (b == false){
				PS.color( x + 1, y, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x + 1, y, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x + 1, y, PS.COLOR_GREEN );
				}		
			
	}
}
//BR
	if ( x > 0 ){
	var color = PS.unmakeRGB( PS.color( x - 1, y ), {} );
	if(color.r == 255 && color.g == 255 && color.b == 255) {
		if (b == false ){
			PS.color( x - 1, y, PS.COLOR_BLUE );
			}
			else if (r == false){
				PS.color( x - 1, y, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x - 1, y, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x - 1, y, PS.COLOR_WHITE );
				
				
			}
	}
	else if (color.r == 0 && color.g == 0 && color.b == 255){
		if (r == false ){
			PS.color( x - 1, y, PS.COLOR_RED );
			}
			else if (g == false){
				PS.color( x -1 , y, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x - 1 , y, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x - 1, y, PS.COLOR_BLUE );
				}
				
			
	}
	else if (color.r == 255 && color.g == 0 && color.b == 0){
		if (g == false ){
			PS.color( x - 1, y, PS.COLOR_GREEN );
			}
			else if (w == false){
				PS.color( x - 1, y, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x - 1, y, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x - 1, y, PS.COLOR_RED );
				
			}
	}
	else if (color.r == 0 && color.g == 255 && color.b == 0){
		if (w == false ){
			PS.color( x - 1, y, PS.COLOR_WHITE );
			}
			else if (b == false){
				PS.color( x - 1, y, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x - 1, y, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x - 1, y, PS.COLOR_GREEN );
				}		
			
	}
}
//BR
	if ( y < 7 ){
	var color = PS.unmakeRGB( PS.color( x , y + 1), {} );
	if(color.r == 255 && color.g == 255 && color.b == 255) {
		if (b == false ){
			PS.color( x, y + 1, PS.COLOR_BLUE );
			}
			else if (r == false){
				PS.color( x, y + 1, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x, y + 1, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x, y + 1, PS.COLOR_WHITE );
				}
				
			
	}
	else if (color.r == 0 && color.g == 0 && color.b == 255){
		if (r == false ){
			PS.color( x, y + 1, PS.COLOR_RED );
			}
			else if (g == false){
				PS.color( x, y + 1, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x, y + 1, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x, y + 1, PS.COLOR_BLUE );
				}
				
			}
	
	else if (color.r == 255 && color.g == 0 && color.b == 0){
		if (g == false ){
			PS.color( x, y + 1, PS.COLOR_GREEN );
			}
			else if (w == false){
				PS.color( x, y + 1, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x, y + 1, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x, y + 1, PS.COLOR_RED );
				}
			}
	
	else if (color.r == 0 && color.g == 255 && color.b == 0){
		if (w == false ){
			PS.color( x, y + 1, PS.COLOR_WHITE );
			}
			else if (b == false){
				PS.color( x, y + 1, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x, y + 1, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x, y + 1, PS.COLOR_GREEN );
				}		
			
	}
}
//BR
	if (y > 0){
	var color = PS.unmakeRGB( PS.color( x , y - 1 ), {} );
	if(color.r == 255 && color.g == 255 && color.b == 255) {
		if (b == false ){
			PS.color( x, y - 1, PS.COLOR_BLUE );
			}
			else if (r == false){
				PS.color( x, y - 1, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x, y - 1, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x, y - 1, PS.COLOR_WHITE );
				}
				
			
	}
	else if (color.r == 0 && color.g == 0 && color.b == 255){
		if (r == false ){
			PS.color( x, y - 1, PS.COLOR_RED );
			}
			else if (g == false){
				PS.color( x, y - 1, PS.COLOR_GREEN );
				}
				else if (w == false){
					PS.color( x, y - 1, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x, y - 1, PS.COLOR_BLUE );
				}
				
			
	}
	else if (color.r == 255 && color.g == 0 && color.b == 0){
		if (g == false ){
			PS.color( x, y - 1, PS.COLOR_GREEN );
			}
			else if (w == false){
				PS.color( x, y - 1, PS.COLOR_WHITE );
				}
				else if (b == false){
					PS.color( x, y - 1, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x, y - 1, PS.COLOR_RED );
				}
			
	}
	else if (color.r == 0 && color.g == 255 && color.b == 0){
		if (w == false ){
			PS.color( x, y - 1, PS.COLOR_WHITE );
			}
			else if (b == false){
				PS.color( x, y - 1, PS.COLOR_BLUE );
				}
				else if (r == false){
					PS.color( x, y - 1, PS.COLOR_RED );
				}
				else if (g == false){
					PS.color( x, y - 1, PS.COLOR_GREEN );
				}		
			
	}

}


	var matched = true;
	PS.debug("weh");
	PS.debug(PS.color(0,0).g);
	var beadcolor = PS.unmakeRGB( PS.color(0 , 0), {} );
	PS.debug(beadcolor.r);
	bigLoop: for (var i = 0; i < 8; i++){
		//PS.debug("test2")
		for (var n = 0; n < 8; n++){
			var color = PS.unmakeRGB( PS.color( i , n ), {} );
			if (color == beadcolor){

			}
		
			else{
				matched = false
				PS.debug(b);
				break bigLoop;
				
			}
		}
	}
	if (matched == true){
		PS.statusText("Congrats");
	}

	
};

//BR
/*
	if (b == false ){
	var b = true
	}
	if (g = false){
	var g = true
	}
	if (r = false){
	var r = true
	}
	if (w = false){
	var w = true
	}
	*/
	
	
 
	

/*
PS.touch = function( x, y, data, options ) {
	if (b == false){
	var b = true
	var tx = 0;
	var ty = 0;
	for (;64;){ //test blue
		if(tx < 7){
			var color = PS.unmakeRGB( PS.color( tx , ty ), {} );
			if (color.r == 0 && color.g == 0 && color.b == 255){
				PS.debug("test3")
				var tx = tx + 1
				if (tx == 8){
					var tx = 0;
					var ty = ty + 1
					if (ty == 8){
						break
					}
				}
		}
			else{
				var b = false
				break
			}


		}
		
	}
	}
	if (g == false){
		var g = true
		var tx = 0;
		var ty = 0;
		for (;64;){ //test green
			if(tx < 7){
				var color = PS.unmakeRGB( PS.color( tx , ty ), {} );
				if (color.r == 0 && color.g == 255 && color.b == 0){
					PS.debug("test3")
					var tx = tx + 1
					if (tx == 8){
						var tx = 0;
						var ty = ty + 1
						if (ty == 8){
							break
						}
					}
			}
				else{
					var g = false
					break
				}
	
	
			}
			
		}
		}
		if (r == false){
			var r = true
			var tx = 0;
			var ty = 0;
			for (;64;){ //test red
				if(tx < 7){
					var color = PS.unmakeRGB( PS.color( tx , ty ), {} );
					if (color.r == 255 && color.g == 0 && color.b == 0){
						PS.debug("test3")
						var tx = tx + 1
						if (tx == 8){
							var tx = 0;
							var ty = ty + 1
							if (ty == 8){
								break
							}
						}
				}
					else{
						var r = false
						break
					}
		
		
				}
				
			}
			}

			if (w == false){
				var w = true
				var tx = 0;
				var ty = 0;
				for (;64;){ //test white
					if(tx < 7){
						var color = PS.unmakeRGB( PS.color( tx , ty ), {} );
						if (color.r == 255 && color.g == 255 && color.b == 255){
							PS.debug("test3")
							var tx = tx + 1
							if (tx == 8){
								var tx = 0;
								var ty = ty + 1
								if (ty == 8){
									break
								}
							}
					}
						else{
							var w = false
							break
						}
			
			
					}
					
				}
				}
			}



*\
/*
	for (let i = 0; i < 8; i++){
		for (let n = 0; n < 8; n++){
			var color = PS.unmakeRGB( PS.color( i , n ), {} );
			
			if (color.r == 0 && color.g == 255 && color.b == 0){
				

		}
			else{
				var g = false
			}

	}
}
	for (let i = 0; i < 8; i++){
		for (let n = 0; n < 8; n++){
			var color = PS.unmakeRGB( PS.color( i , n ), {} );
			if (color.r == 255 && color.g == 0 && color.b == 0){

	}
			else{
				var r = false
			}

	}
}
	for (let i = 0; i < 8; i++){
		for (let n = 0; n < 8; n++){
			var color = PS.unmakeRGB( PS.color( i , n ), {} );
			if (color.r == 0 && color.g == 0 && color.b == 0){

	}
			else{
				var w = false
		}
}
}

	// Add code here for mouse clicks/touches
	// over a bead.
	*/


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

