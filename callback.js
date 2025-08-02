function sam(arjun,ajith)
{
    console.log("Callback function called with arguments:" ); 
ajith();
}


function arjun() {
    console.log("new release movie" +arjun);

}
console.log(sam("TT",arjun)); // Callback function called with arguments: new release movie