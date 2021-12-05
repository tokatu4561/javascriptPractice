<template>
  <div>
      Item
      <router-link to="1">item1</router-link>
      <router-link to="2">item2</router-link>
      {{ $route.params.id }}
  </div>
</template>

<script>
export default {
    created(){
        console.log('created');
    },
    watch:{
        $route: function (to, from) {
            console.log(to)
            console.log(from)
        }
    }
}
</script>

<style>

</style>