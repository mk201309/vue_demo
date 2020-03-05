<template>
  <div class="side-bar">
    <div class="list-group">
      <a href="#" v-on:click.prevent="changePage('Index')" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" v-on:click.prevent="changePage('Primary')" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
      <a href="#" v-on:click.prevent="changePage('TodoList')" class="list-group-item list-group-item-action list-group-item-secondary">TodoList</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    changePage(page) {
      this.$router.push({
        name: page, 
      })
      console.log(this.$route.path)
    }
  }
}
</script>
