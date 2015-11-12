<?
    $apikey = '666facac9fccaa60a01f3fd99ae15216-us11';
    $auth = base64_encode( 'user:'.$apikey );
    $data = array(
        'apikey'        => $apikey,
        'email_address' => $_GET['email'],
        'status'        => 'subscribed',
        'double_optin'      => false,
        'send_welcome'      => true,
        'merge_fields'  => array(
            'FNAME' => ""
        )     
    );
    $json_data = json_encode($data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://us11.api.mailchimp.com/3.0/lists/b8e0368bda/members/');
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json',
                                                'Authorization: Basic '.$auth));
    curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/2.0');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);                                                                                                                  
    $result = curl_exec($ch);
?>