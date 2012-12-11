#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

    b.canvasMode(b.MARGIN);
    
    var hash = new HashList();

    var longString = "Lor!$$em! ipsum!! dolor? ??!! sit amet, consetetur... --- ... sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    var tf1 = b.text( longString, 0,0,b.width,200 );
    var tf2 = b.text( longString, 0,220,b.width,200 );
    var tf3 = b.text( "", 0,440,b.width,200 );
    var words = b.words(tf2);

    var str;
    for( var i = 0; i < words.length; i++){
        str = words[i].contents;
        str = b.trimWord(str);
        if (str == "") continue; // special case: nothing left after wordTrim
        // count the number of occurances
        if( hash.hasKey(str) ){
            hash.set(str, hash.get(str) + 1); 
        } else {
            hash.set( str, 1 );
        }
    }
    
    var keys = (hash.getKeysSortedByValues() ); // sorts it by the number of its occurences.
    var result1 = "";
    var result2 = "";
    for ( var i = 0; i < keys.length; i++ ){
        var word = keys[i];
        for ( var n = 0; n < hash.get( word ); n++ ) {
            result1 += word + " ";
        }
        result2 += ( word + " : " + hash.get( word ) + ", ");
    }
    tf2.contents = result1;
    tf3.contents = result2;

}

b.go();