import Vue from 'vue';
import app from './app.vue';

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(app);
  }
});