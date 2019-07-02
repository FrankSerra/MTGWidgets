function storm_reset() {
    $( "span.mana-amount" ).each(function( index ) {
        $( this ).text("0");
    });
}

function minus(_id) {
    var elem = $("span#"+_id);
    var text = parseInt(elem.text());
    if(text > 0)
        elem.text(text-1);
}

function plus(_id) {
    var elem = $("span#"+_id);
    var text = parseInt(elem.text());
        elem.text(text+1);
}