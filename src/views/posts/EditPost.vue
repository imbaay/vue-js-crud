<template>
  <div>
    <div>
      <v-btn icon small to="/posts">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>
    <div class="text-center">
      <h2>Edit Post</h2>
    </div>
    <div class="px-16">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          required
        ></v-text-field>

        <v-text-field
          v-model="content"
          :rules="contentRules"
          label="Content"
          required
        ></v-text-field>

        <v-text-field
          v-model="author"
          :rules="authorRules"
          label="Author"
          required
        ></v-text-field>

        <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>

        <v-btn color="success" >Add</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPost",

  data: () => ({
    title: "",
    titleRules: [(v) => !!v || "Title is required"],
    description: "",
    descriptionRules: [(v) => !!v || "Description is required"],
    content: "",
    contentRules: [(v) => !!v || "Content is required"],
    author: "",
    authorRules: [(v) => !!v || "Author is required"],
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    
  },
};
</script>