
//var body = $request.body;
//body['longitude'] = '116.288160';
//body['latitude'] = '39.177440';

//body = JSON.stringify(body)
//  $done({
//    body
//  })

let body = JSON.parse($response.body);
body.longitude = '116.288160';
body.latitude ='39.177440';

body = JSON.stringify(body);
cnosole.log(body);
$done({body});


