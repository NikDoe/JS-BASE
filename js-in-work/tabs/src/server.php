<?php
//так как сюда будут приходить данные в формате json а пхп не умеет с ними работать, поэтому мы должны декодировать, всё что нам приходит от клиента
$_POST = json_decode(file_get_contents('php://input'), true);

echo var_dump($_POST);