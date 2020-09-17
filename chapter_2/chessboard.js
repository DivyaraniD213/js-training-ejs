const prompt = require ('prompt-sync')();

let string = "";
let place = 0;
var row_size = Number ( prompt ( "Enter Row Size" ) );
var col_size = Number ( prompt ( "Enter Coloumn Size" ) );
for ( let outt = 0 ; outt <= row_size - 1 ; outt++ ) {
	for ( let inn = 0 ; inn <= col_size - 1 ; inn++ ) {
		if ( place % 2 != 0 ) {
			string += "#";
		}
		else {
			string += " ";
		}
		place++;
	}
	string += "\n";
	place = ~ place ;
}
console.log( string );
