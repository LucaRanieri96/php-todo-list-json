<?php

// prendere i dati dal file json
$tasksJson = file_get_contents('tasks.json');

header('Content-Type: application/json');

echo $tasksJson;
