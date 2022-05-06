//determination of tehvariables 
var act = document.getElementById('activities');
var sch = document.getElementById('schemes');
var note = document.getElementById('notes');
//setting display properties
note.style.visibility = 'visible';
act.style.visibility = 'hidden';
sch.style.visibility = 'hidden';
//functions for calling the event
function notefunction(){
    note.style.visibility = 'visible';
    act.style.visibility = 'hidden';
    sch.style.visibility = 'hidden';
} 
function activities(){
    act.style.visibility = 'visible';
    sch.style.visibility = 'hidden';
    note.style.visibility = 'hidden';
    
}
function scheme(){
act.style.visibility = 'hidden';
sch.style.visibility = 'visible';
note.style.visibility = 'hidden';
}

