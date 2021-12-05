<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goToHome">ホームに戻る</button><br>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods:{
    goToHome(){
      this.$router.push('/')
    }
  },
  beforeRouteLeave(to, from, next){
    const checkLeave = window.confirm('本当にこのページを離れますか')
    if(checkLeave){
      next()
    }else {
      next(false)
    }
  }
}
</script>
