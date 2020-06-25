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

$time_range = ($decoded_response[6]->value == "full-day") ? "Садок повного дня (з 8.00 до 18.00)" : "Садок неповного дня (з 8.00 до 14.00)";

for ($i = 7; isset($decoded_response[$i]->name) && $s_item = $decoded_response[$i]->name; $i++){

    if ($s_item == "school-prepare")
        $service_name = "Підготовка до школи";
    elseif ($s_item == "choreography")
        $service_name = "Хореографія";
    elseif ($s_item == "english")
        $service_name = "Англійська мова";
    elseif ($s_item == "polish")
        $service_name = "Польська мова";
    elseif ($s_item == "music")
        $service_name = "Музика";
    elseif ($s_item == "creativity")
        $service_name = "Країна творчості";
    else
        $service_name = "Безкоштовне заняття";

    array_push($services, $service_name);

}

if (isset($services[0]) && !empty($services[0]))
    $all_services = implode(", ", $services);
else
    $all_services = "Без додаткових послуг";


if (isset($contact_name) && isset($contact_last_name) && isset($contact_phone) &&
    isset($child_name) && isset($child_last_name) && isset($child_age) &&
    isset($time_range)){

    send_telegram_message($contact_name, 
                            $contact_last_name, 
                            $contact_phone, 
                            $child_name, 
                            $child_last_name, 
                            $child_age, 
                            $time_range, 
                            $all_services);
    $res = send_mail($contact_name, 
                $contact_last_name, 
                $contact_phone, 
                $child_name, 
                $child_last_name, 
                $child_age, 
                $time_range, 
                $all_services);

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
                                $time_range, 
                                $all_services){

    $telega_id = '1105032746:AAGlk_UERDG9KxMm6AToI73vrxG0Et91wNs';
    $chat_id = '-429481007';

    $tel_numb = substr($phone, 1 );
    $message = "%23ЗаписДитячийСадочок:%0AКонтактна особа: " . $contact_name . " " . $contact_last_name . "." .
                "%0AНомер телефону: " . $contact_phone . 
                "%0AДитина: " . $child_name . " " . $child_last_name . ". Вік: " . $child_age . "." .
                "%0AТип садка: " . $time_range . "." .
                "%0AДодаткові посгули: " . $all_services . "." .
                "%0AДата: " . date("d.m.Y H:i:s");
    $admin_bot_result = file_get_contents('https://api.telegram.org/bot' . $telega_id . '/sendMessage?chat_id=' . $chat_id . '&text=' . $message);

}

function send_mail($contact_name,
                    $contact_last_name, 
                    $contact_phone, 
                    $child_name, 
                    $child_last_name, 
                    $child_age, 
                    $time_range, 
                    $all_services){
    $to = "icassidyif@gmail.com, trumana@gmail.com";
    $from = 'smartik.if.ua_robot';
    $subject = "Новий запис в дитячий садочок з сайту smartik.if.ua";
    $message = "Новий запис в дитячий садочок!\n\nКонтактна особа: " . $contact_name . " " . $contact_last_name . "." .
                "\nНомер телефону: " . $contact_phone . 
                "\nДитина: " . $child_name . " " . $child_last_name . ". Вік: " . $child_age . "." .
                "\nТип садка: " . $time_range . "." .
                "\nДодаткові посгули: " . $all_services . "." .
                "\nДата: " . date("d.m.Y H:i:s");

    $headers = "From:" . $from;
    $result = mail($to, $subject, $message, $headers);
}
