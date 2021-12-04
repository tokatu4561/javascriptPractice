<template>
  <div>
      <h1>本の一覧</h1>
      <ul>
          <li
          @click="showBookDetail(book.id)"
          v-for="book in books"
          :key="book.id">
          {{ book.title }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'BookList',
    data(){
        return {
            bookIndex: -1,
            books:[
                {id:1, title:'title1',content:'本の内容1'},
                {id:2, title:'title2',content:'本の内容2'},
                {id:3, title:'title3',content:'本の内容3'},
            ]
        }
    },
    methods: {
        showBookDetail (id){
            this.bookIndex = id -1
            this.$router.push({
                name:'Book',
                params:{
                    id: this.books[this.bookIndex].id,
                    title: this.books[this.bookIndex].title,
                    content: this.books[this.bookIndex].content
                }
            })
        }
    }
}
</script>

<style>

</style>