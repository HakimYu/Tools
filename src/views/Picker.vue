<template>
    <v-app-bar app color="primary" dark hide-on-scroll>
      <v-app-bar-nav-icon @click="$router.push({ name: 'Home' })">
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>抽签</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs v-model="tab" :grow="true">
          <v-tab value="1">抽名字</v-tab>
          <v-tab value="2">抽组</v-tab>
          <v-tab value="3">抽数字</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  <v-main>
  <v-container>
    <v-window v-model="tab">
      <v-window-item key="1" value="1">
        <name-picker></name-picker>
      </v-window-item>
      <v-window-item key="2" value="2">
        <group-picker></group-picker>
      </v-window-item>
      <v-window-item key="3" value="3">
        <num-picker></num-picker>
      </v-window-item>
    </v-window>
  </v-container>
  </v-main>
</template>


<script>
import NamePicker from "@/components/Picker/NamePicker.vue";
import GroupPicker from "@/components/Picker/GroupPicker.vue";
import NumPicker from "@/components/Picker/NumPicker.vue";
export default {
  name: "MainPicker",
  components: {
    NamePicker,
    GroupPicker,
    NumPicker
  },
  data: () => ({
    tab: "1",
  })
};
</script>
