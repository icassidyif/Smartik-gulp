<?php

$post_sjon = file_get_contents('php://input');
$decoded_response = json_decode($post_sjon);

$services = array();

$contact_name = $decoded_response[0]->value;
$contact_last_name = $decoded_response[1]->value;
$contact_phone = $decoded_response[2]->value;

$child_name = $decoded_response[3]->value;
$child_last_name = $decoded_response[4]->value;
$child_age = $decoded_response[5]->value;

$time_range = ($decoded_response[6]->value == "schoolCamp") ? "Пришкільний табір" : (($decoded_response[6]->value == "karpatyCamp") ? "Табір в Карпатах" : "Табір за кордоном");

if (isset($contact_name) && isset($contact_last_name) && isset($contact_phone) &&
    isset($child_name) && isset($child_last_name) && isset($child_age) &&
    isset($time_range)){

    send_telegram_message($contact_name, 
                            $contact_last_name, 
                            $contact_phone, 
                            $child_name, 
                            $child_last_name, 
                            $child_age, 
                            $time_range);
    $res = send_mail($contact_name, 
                $contact_last_name, 
                $contact_phone, 
                $child_name, 
                $child_last_name, 
                $child_age, 
                $time_range);

    echo '"true"';
}
else
    echo '"false"';


function send_telegram_message($contact_name,
                                $contact_last_name, 
                                $contact_phone, 
                                $child_name, 
                                $child_last_name, 
                                $child_age, 
                                $time_range){

    $telega_id = '1105032746:AAGlk_UERDG9KxMm6AToI73vrxG0Et91wNs';
    $chat_id = '-429481007';

    $tel_numb = substr($phone, 1 );
    $message = "%23ЗаписSmartikCamp:%0AКонтактна особа: " . $contact_name . " " . $contact_last_name . "." .
                "%0AНомер телефону: " . $contact_phone . 
                "%0AДитина: " . $child_name . " " . $child_last_name . ". Вік: " . $child_age . "." .
                "%0AТип табору: " . $time_range . "." .
                "%0AДата: " . date("d.m.Y H:i:s");
    $admin_bot_result = file_get_contents('https://api.telegram.org/bot' . $telega_id . '/sendMessage?chat_id=' . $chat_id . '&text=' . $message);

}

function send_mail($contact_name,
                    $contact_last_name, 
                    $contact_phone, 
                    $child_name, 
                    $child_last_name, 
                    $child_age, 
                    $time_range){
    $to = "icassidyif@gmail.com, trumana@gmail.com, smartikif@gmail.com, semeniv.yuliia@gmail.com";
    $from = 'smartik.if.ua_robot';
    $subject = "Новий запис в Smartik camp з сайту smartik.if.ua";
    $message = "Новий запис в Smartik camp!\n\nКонтактна особа: " . $contact_name . " " . $contact_last_name . "." .
                "\nНомер телефону: " . $contact_phone . 
                "\nДитина: " . $child_name . " " . $child_last_name . ". Вік: " . $child_age . "." .
                "\nТип табору: " . $time_range . "." .
                "\nДата: " . date("d.m.Y H:i:s");

    $headers = "From:" . $from;
    $result = mail($to, $subject, $message, $headers);
}




