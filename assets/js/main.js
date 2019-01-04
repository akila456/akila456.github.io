$(document).ready(()=>{
    console.log( 'main.js loaded,,' );
    load_data();
});
function load_data(){
    $.getJSON("/assets/data/test.json", json =>{
        data = json;
        console.log(data.name);
    });
}