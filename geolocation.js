function succes(position)
{
	consol.log("latitiude:"+position.cords.latitiude)
	consol.log("longitiude:"+position.cords.longitiude)
}

function error(err)
{
	consol.log(err)
}

if('geolocation' in navigator)
{
	navigator.geolocation.getCurrentPosition(succes,error,{timeout:10000})
}
else{
	consol.log("geolocation is not available")
}