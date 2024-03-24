<template>
  <div class="mt-5">
    <v-row class="d-flex justify-center">
      <v-col sm="5">
        <v-switch class="d-flex justify-center" label="含C组" v-model="eighthGroup" color="secondary"></v-switch>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col sm="5">
        <v-text-field
          v-model.number="amount"
          color="secondary"
          variant="outlined"
          type="number"
          label="抽取个数"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <v-btn align-center size="x-large" color="white" @click="pick()" elevation="2">抽取</v-btn>
    </div>

    <div
      v-html="result"
      class="mb-3 mx-2 text-h2 rainbow-text font-weight-medium text-center"
      style="white-space: pre-line"
    ></div>
  </div>
</template>

<script>
export default {
  name: "GroupDrawer",
  data: () => ({
    amount: null,
    result: null,
    eighthGroup: false,
    allGroups: [
      "一组",
      "二组",
      "三组",
      "四组",
      "五组",
      "六组",
      "七组",
    ],
    allGroupsWithEighth: [
      "一组",
      "二组",
      "三组",
      "四组",
      "五组",
      "六组",
      "七组",
      "C组",
    ],
  }),
  methods: {
    normalPick() {
      let g = this.allGroups
      if(this.eighthGroup) {
        g = this.allGroupsWithEighth
      }
      g.sort(() => {
        return 0.5 - Math.random();
      });

      if (this.amount != null && this.amount <= g.length) {
        this.result = "";
        for (let i = 0; i < this.amount; i++) {
          this.result += "\n" + g[i];
        }
      }
    },
    magicPick() {
      let magicGroups = [
        "一组",
        "二组",
        "三组",
        "五组",
        "六组",
        "七组",
      ];
      if(this.eighthGroup) {
        magicGroups.append("八组")
      }
      magicGroups.sort(() => {
        return 0.5 - Math.random();
      });
      if (this.amount != null && this.amount <= 7) {
        this.result = "";
        for (let i = 0; i < this.amount; i++) {
          this.result += "\n" + magicGroups[i];
        }
        localStorage.removeItem('magic');
        document.title = '抽签'
      }else {
        this.normalPick()
      }
    },
    pick() {
    if(localStorage.getItem('magic') === 'true' && this.amount !== 5) {
      this.magicPick();
    }else {
      this.normalPick();
    }
    }
  }
};
</script>
