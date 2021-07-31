
//var body = $request.body;
//body['longitude'] = '116.288160';
//body['latitude'] = '39.177440';

//body = JSON.stringify(body)
//  $done({
//    body
//  })

let body = JSON.parse($request.body);

last_longitude = Math.random()
last_latitude = Math.random()
fist_longitude 
body.longitude = '116.32005';
body.latitude ='39.989571';



body = JSON.stringify(body);
console.log(body);
$done({body});


