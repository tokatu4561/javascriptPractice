<template>
  <div>BookEdit
    {{ book.title }}
    {{ books[$route.params.id] }}
  </div>
</template>

<script>
export default {
  name:'BookEdit',
  props:{
    books:Array
  },
  data(){
    return{
      book: ''
    }
  },
  beforRouteEnter (to, form, next){
    next(vm => {
      vm.$nextTick( () => {
        vm.book = vm.books[vm.$route.params.id]
      })
    })
  } 
}
</script>

<style>

</style>