/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      tasks: ['Wash Hair', 'Pay HOA', 'Laundry'],
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if(this.newTask) {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index);
      }

    },
    computed: {

    }
  });
});