<?php
// metodo per aggiungere task all'api
if (isset($_POST['newTask'])) {
    $task = $_POST['newTask'];

    //   metto il contenuto del file json dentro una variabile ma come stringa
    $tasks_string = file_get_contents('tasks.json');
    //   poi uso decode per convertire la stringa in un array
    $tasks_array = json_decode($tasks_string, true);
    //   aggiungo la nuova task all'array
    array_unshift($tasks_array, $task);

    //   poi ci sono i passaggi inversi

    //   uso encode per riconvertire l'array in una stringa
    $new_tasks_json_string = json_encode($tasks_array);
    //   rimpiazzo il contenuto del vecchio json con quello aggiornato
    file_put_contents('tasks.json', $new_tasks_json_string);
    //   aggiungo la header application/json
    header('Content-Type: application/json');
    //   echo json
    echo $new_tasks_json_string;
}

// ora devo farmi un metodo nell'app.js che mi pushi le task