<template>
  <v-container>
    <v-row class="mt-1">
      <v-col v-for="card in cards" :key="card.id" class="d-flex justify-center">
        <v-card
          elevation="2"
          class="rounded-lg"
          @click="$router.push(card.url)"
          ripple
          style="width: 1000px"
        >
          <v-card-title primary-title>
            {{ card.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ card.subTitle }}
          </v-card-subtitle>
          <v-card-actions class="float-right">
            <v-btn
              text
              @click="$router.push(card.url)"
              color="secondary"
              class="rounded-md"
              >打开</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeCards",
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
        title: "抽签",
        subTitle: "Picking System",
        url: "Picking",
      },
    ],
  }),
  methods: {},
};
</script>
