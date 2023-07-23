<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="test1">
      <span @click="test">{{title}}</span>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'AboutView',
  data() {
    return {
      message: 'Hello World!',
      title: '',
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        this.title = response.data.title;
        console.log(response);
      });
  },
  methods: {
    test() {
      alert('test');
      console.log('test');
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .test1 {
    margin: 1000 auto;
    width: 50%;
    text-align: center;
    display: flex;
    color: red;
  }
}
</style>
