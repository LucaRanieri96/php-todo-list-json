const { createApp } = Vue;
createApp({
  data() {
    return {
      tasks: null,
      api_url: "getTasks.php",
      store_url: "storeTasks.php",
      newTask: "",
    };
  },
  //   mi serve un metodo per pushare le nuove task dentro l'array nell'api, attraverso storeTasks
  methods: {
    addTask() {
      // uso sempre axios come ho fatto sotto, invece di get per ottenere i dati dall'api userò post per inserirceli e seguirò la procedura inversa di storeTasks.php
      axios
        .post(this.store_url, this.newTask, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          this.newTask = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
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
