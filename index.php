<!doctype html>
<html lang='en'>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title>Todo List</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link href='./style.css' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>
  <div id='app'>
    <div class="container text-center">
      <h2>TO-DO LIST</h2>
      <div class="row">
        <div class="col">
          <div class="card mx-auto my-3" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li v-for="(task, index) in tasks"
                class="list-group-item d-flex justify-content-between align-items-center">
                <span>{{ task }}</span>
                <button @click="deleteTask(index)" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
              </li>
            </ul>
          </div>
          <div class="input-group mb-3 mx-auto">
            <input type="text" class="form-control" v-model="newTask" @keyup.enter="addTask"
              placeholder="Add a task">
            <span class="input-group-text" id="basic-addon1" @click="addTask">Add Task</span>
          </div>

        </div>
      </div>


    </div>


  </div>

  <script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>
  <!-- Development only cdn, disable in production -->
  <script src='https://unpkg.com/vue@3/dist/vue.global.js'></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
  <script src='./app.js'></script>
</body>

</html>