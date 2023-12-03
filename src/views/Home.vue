<template>
    <v-app-bar app color="primary" dark hide-on-scroll>
      <v-app-bar-title>首页</v-app-bar-title>
    </v-app-bar>
  <v-main>
    <v-container>
  <home-cards/>
    </v-container>
  </v-main>
  <Footer/>
</template>

<script setup>
import HomeCards from "@/components/HomeCards.vue";
import Footer from "@/components/Footer.vue";
</script>

<script>
export default {
  name: "Home",
  data: () => ({
    cards: [
      // {
      //   title: "BPM测试",
      //   subTitle: "Beats Per Minute Test",
      //   url: "BPM",
      // },
      // {
      //   title: "座位自动安排系统",
      //   subTitle: "Seats Arrange System",
      //   url: "SeatsArranger",
      // },
      {
        title: "抽签系统",
        subTitle: "Drawing System",
        url: "Drawer",
      },
    ],
  }),
  methods: {},
};
</script>
