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

  }
}
</script>
