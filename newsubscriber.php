<?
    $apikey = 'c1c4aed89e57662c1dc386e0c5984764-us12';
    $auth = base64_encode( 'user:'.$apikey );
    $data = array(
        'apikey'        => $apikey,
        'email_address' => $_POST['email'],
        'status'        => 'subscribed',
        'double_optin'      => false,
        'send_welcome'      => true,
        'merge_fields'  => array(
            'FNAME' => ""
        )     
    );
    $json_data = json_encode($data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://us12.api.mailchimp.com/3.0/lists/75e4e0ea14/members/');
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json',
                                                'Authorization: Basic '.$auth));
    curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/2.0');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);                                                                                 
    $result = curl_exec($ch);
    echo $result;
?>