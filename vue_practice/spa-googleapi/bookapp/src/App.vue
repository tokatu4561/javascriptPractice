<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Fotter/>
  </v-app>
</template>

<script>
import Header from '@/global/Header';
import Fotter from '@/global/Fotter';

export default {
  name: 'App',
  components: {
      Header,
      Fotter
    },
  data: () => ({
    //
  }),
};
</script>
