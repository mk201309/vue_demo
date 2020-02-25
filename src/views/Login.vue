<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row row-cols-3">
        <div class="col"></div>
        <div class="col ">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com" v-model="email">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password" >
              </div>
            </div>
            <button class="btn btn-primary" v-on:click="submit" >Sign in</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    var tmp = {
      email: "",
      password: "",
    }
    return tmp
  },
  methods: {
    submit: function() {
      console.log(this);
      var v = this

      this.axios({
        url: "/api/login",
        method: "post",
        responseType: "json",
        data: {
          account: this.email,
          pwd: this.password
        }
      }).then(function(res){
        if(res.data.error_code == 1) {
          console.log(v)
          v.$router.push('/about')
        }else {
          alert(res.data.error_msg)
        }
        console.log(res)
      })

    }
  }
}
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
</style>
