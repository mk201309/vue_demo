<template>
  <div class="index">
    <div class="container-fluid">
      <layout-header></layout-header>
      <div class="row">
        <div class="col-2">
          <side-bar></side-bar>
        </div>
        <div class="col-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import Header from '@/components/layout/Header.vue'
import SideBar from '@/components/layout/Sidebar.vue'

export default {
  name: 'Index',
  components: {
    'layout-header': Header,
    'side-bar': SideBar
  },
  data () {
    var tmp = {
      
    }
    return tmp
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
