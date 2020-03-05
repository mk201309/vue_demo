<template>
  <div class="todo-list">
    <div class="alert alert-primary" role="alert">
        Todo List
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#todoModal">Add</button>
    </div>
    <div v-for="(todo, i) in todolist" v-bind:key="todo.id">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">
                    {{todo.title}}
                </h5>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" v-on:click="pickTodo($event, i, todo)" class="btn btn-outline-primary" data-toggle="modal" data-target="#todoModal">Edit</button>
                    <button type="button" v-on:click="deleteTodo($event, i)" class="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="todoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <!-- <h5 class="modal-title" id="exampleModalLabel">ADD MSG</h5> -->
                <h5 class="modal-title" id="exampleModalLabel">Edit MSG</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control" v-model="currentTodo.title" aria-label="Title" aria-describedby="addon-wrapping">
                <p>Message is: {{ currentTodo.title }}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="editTodo()">Close & Save</button>
            </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'TodoList',
  data () {
    var tmp = {
      todolist: [
          {id: 1, title: "哈囉～你好嗎；"},
          {id: 2, title: "由衷感謝"},
          {id: 7, title: "期待在相逢"},
      ],
      currentTodo: {index: -1, title: ""},
    }
    return tmp
  },
  methods: {
    // 刪除todo
    deleteTodo(e, i) {
        this.todolist.splice(i, 1)
    },
    // 挑選 todo
    pickTodo(e, i, todo) {
        this.currentTodo.index = i
        this.currentTodo.title = todo.title
    },
    // 編輯 todo
    editTodo() {
        var todo = this.currentTodo
        if (todo.index == -1) {
            this.todolist.push({
                id: this.newTodoID,
                title: todo.title
            })
        } else {
            this.todolist[todo.index].title = todo.title
        }
        this.currentTodo = {index: -1, title: ""}
        console.log(this.todolist)
    },
  },
  computed: {
        newTodoID: function() {
            var last_todo = this.todolist[this.todolist.length - 1]
            return last_todo.id + 1
        }
    }

}
</script>

