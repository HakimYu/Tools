<template>
  <div class="mt-5">
    <v-row class="d-flex justify-center">
      <v-col sm="3">
        <v-text-field
          v-model.number="minValue"
          color="secondary"
          variant="outlined"
          type="number"
          label="最小值"
        ></v-text-field>
      </v-col>
      <v-col sm="3">
        <v-text-field
          v-model.number="maxValue"
          color="secondary"
          variant="outlined"
          type="number"
          label="最大值"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col sm="6">
        <v-text-field
          v-model.number="amount"
          color="secondary"
          variant="outlined"
          type="number"
          label="抽取个数"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center" no-gutters>
      <v-col sm="6">
        <v-switch
          class="d-flex justify-center"
          v-model="uniqueNumbers"
          color="secondary"
          label="唯一随机数"
        ></v-switch>
      </v-col>
    </v-row>

    <div class="d-flex justify-center">
      <v-btn align-center size="x-large" color="white" @click="pick()" elevation="2">抽取</v-btn>
    </div>

    <div
      v-html="result"
      class="my-3 mx-2 text-h2 rainbow-text font-weight-medium text-center"
      style="white-space: pre-line"
    ></div>
  </div>
</template>

<script>
export default {
  name: "GroupDrawer",
  data: () => ({
    amount: null,
    minValue: null,
    maxValue: null,
    uniqueNumbers: true,
    result: null,
  }),
  methods: {
    pick() {
      if (this.amount === null || this.minValue === null || this.maxValue === null) {
        this.result = "请填写完整的信息";
        return;
      }

      if (this.amount <= 0 || this.minValue >= this.maxValue) {
        this.result = "无效的参数";
        return;
      }

      const numbers = [];

      if (this.uniqueNumbers) {
        if (this.amount > this.maxValue - this.minValue + 1) {
          this.result = "无法生成唯一随机数";
          return;
        }

        while (numbers.length < this.amount) {
          const randomNum = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
          if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
          }
        }
      } else {
        for (let i = 0; i < this.amount; i++) {
          const randomNum = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
          numbers.push(randomNum);
        }
      }

      this.result = numbers.join(", ");
    }
  }
};
</script>
