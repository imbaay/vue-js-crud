<template>
  <div>
    <v-app-bar app flat dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>imbaBiz</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon depressed>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            imbaBiz
          </v-list-item-title>
          <v-list-item-subtitle>
            Power from the scratch!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="link in links" :key="link.title" route :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    links: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
      {title: 'Post', icon: 'mdi-post', route: '/posts'},
      {title: 'User', icon: 'mdi-account', route: '/users'},
      {title: 'About', icon: 'mdi-information', route: '/about'},
    ],
  }),
}
</script>