const { createApp } = Vue;
createApp({
  data() {
    return {
      tasks: null,
      api_url: "getTasks.php",
      store_url: "storeTasks.php",
      remove_url: "removeTasks.php",
      update_url: "updateTasks.php",
      newTask: "",
    };
  },
  //   mi serve un metodo per pushare le nuove task dentro l'array nell'api, attraverso storeTasks
  methods: {
    addTask() {
      // aggiungo una condizione per non fare nulla quando newTask è vuoto
      if (this.newTask.trim() === "") {
        return;
      }
      // uso sempre axios come ho fatto sotto, invece di get per ottenere i dati dall'api userò post per inserirceli e seguirò la procedura inversa di storeTasks.php
      const data = {
        newTask: this.newTask,
      };
      axios
        .post(this.store_url, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          this.tasks = response.data;
          this.newTask = ""; //imposto nuovamente newTask come vuoto
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    deleteTask(index) {
      // cancello la task dall'array usando splice per vedere se funziona
      // this.tasks.splice(index, 1);
      // ora però devo richiamare anche il mio backend con axios per aggiornare l'array di task attraverso "removeTasks.php
      const data = {
        index: index,
      };
      axios
        .post(this.remove_url, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    taskDone(index) {  
      let status;

      if (this.tasks[index].done === 'false') {
        status = 'true';
      } else {
        status = 'false';
      }
      
      this.tasks[index].done = status;
      
      const data = {
        index: index,
        done: status
      };
      
      axios
        .post(this.update_url, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  },
  mounted() {
    // uso axios per prendere il contenuto dall'api "getTasks" e metterle in "tasks"
    axios
      .get(this.api_url)
      .then((response) => {
        console.log(response);
        this.tasks = response.data;
      })
      .catch((error) => {
        console.error(error.message);
      });
  },
}).mount("#app");
