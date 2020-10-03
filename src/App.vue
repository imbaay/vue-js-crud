<template>
  <v-app>
    <app-navbar>

    </app-navbar>

    <v-main>
      <v-container fluid px-16>
        <router-view></router-view>
      </v-container>
    </v-main>

    <app-footer>

    </app-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    AppNavbar: () => import("./components/layouts/Navbar"),
    AppFooter: () => import("./components/layouts/Footer"),
  },

  data: () => ({
    //
  }),
};
</script>
