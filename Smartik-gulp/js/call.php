<?php

$post_sjon = file_get_contents('php://input');
$decoded_response = json_decode($post_sjon);

function send_mail($phone){
	$to = "icassidyif@gmail.com, trumana@gmail.com", smartikif@gmail.com, semeniv.yuliia@gmail.com;
    $from = 'smartik.if.ua_robot';
    $subject = "Новий запит з сайту smartik.if.ua";
    $message = "Передзвоніть мені на номер: " . $phone . "\nДата запиту: " . date("d.m.Y");

    $headers = "From:" . $from;
    $result = mail($to, $subject, $message, $headers);
}

function send_telegram_message($phone){
	$telega_id = '1105032746:AAGlk_UERDG9KxMm6AToI73vrxG0Et91wNs';
	$chat_id = '-429481007';

    $tel_numb = substr($phone, 1);
    $message = "%23ПередзвонітьМені на номер:%0A%2b" . $tel_numb . "%0AДата: " . date("d.m.Y H:i:s");
    $admin_bot_result = file_get_contents('https://api.telegram.org/bot' . $telega_id . '/sendMessage?chat_id=' . $chat_id . '&text=' . $message);
}

if (isset($decoded_response[0]) && $decoded_response[0]->name == 'phone' && 
    isset($decoded_response[0]->value)){

	send_telegram_message($decoded_response[0]->value);
	send_mail($decoded_response[0]->value);

    echo '"true"';
}
else
    echo '"false"';

    