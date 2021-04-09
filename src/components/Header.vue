<template>
  <div>
    <v-app-bar color="primary" dense dark>
    <!-- <v-app-bar dense dark> -->
      <v-toolbar-title>Hexabase Example</v-toolbar-title>
      <v-spacer></v-spacer>
      <AvatarMenu />
    </v-app-bar>
  </div>
</template>

<script>
import AvatarMenu from "@/components/AvatarMenu";
export default {
  name: "Header",
  components: {
    AvatarMenu,
  },
};
</script>
