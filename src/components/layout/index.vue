<template>
  <div class="index">
    <div class="container-fluid">
      <layout-header></layout-header>
      <div class="row">
        <div class="col-2">
          <side-bar></side-bar>
        </div>
        <div class="col-10">
            <router-view :key="key" />
        </div>
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
  computed: {
    key() {
      return this.$route.path
    }
  },
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
    
  },
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
