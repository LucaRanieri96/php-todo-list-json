const { createApp } = Vue
createApp({
  data() {
    return {
      tasks: null,
      api_url: 'getTasks.php',
    }
  },
  methods: {
  },
  mounted() {

    axios
      .get(this.api_url)
      .then(response => {
        console.log(response);
        this.tasks = response.data
      })
      .catch(error => {
        console.error(error.message);
      })


  }
}).mount('#app')