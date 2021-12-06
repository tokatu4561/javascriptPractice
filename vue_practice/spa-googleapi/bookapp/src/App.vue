<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
      <router-view
      @add-book-list="addBook"/>
      </v-container>
    </v-main>
    <Fotter/>
  </v-app>
</template>

<script>
import Header from '@/global/Header';
import Fotter from '@/global/Fotter';

const STORAGE_KEY = 'books'

export default {
  name: 'App',
  components: {
      Header,
      Fotter
    },
  data(){
        return {
          books: [],
          newBook: null
        }
      },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  },
  methods: {
    addBook(e) {
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readDate:'',
        memo:'',
      });
      this.newBook = '';
      this.saveBooks();
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    }
  }
};
</script>
