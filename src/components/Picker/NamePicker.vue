<template>
  <div class="mt-5">
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
      <v-btn align-center color="white" @click="pick()" elevation="2">抽取</v-btn>
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
  name: "NameDrawer",
  data: () => ({
    amount: null,
    result: null,
    allNames: {
      '范文浩': 1,
      '喻鸿杰': 0.5,
      '杨政': 0.8,
      '程欣佳': 1,
      '张权': 1,
      '余佳炜': 1,
      '唐旅博': 1,
      '胡今国': 1,
      '金家锦': 1,
      '罗亦安': 1,
      '张念箴': 1,
      '李星如': 1,
      '黄思远': 1,
      '熊宇宏': 1,
      '胡珑': 1,
      '简扬': 1,
      '刘剑豪': 1.6,
      '张振': 1,
      '杜文强': 0.8,
      '邓思艳': 1,
      '邓必清': 1,
      '涂承涛': 1,
      '王羽辉': 1,
      '余奎奎': 1,
      '郭文灏': 1,
      '胡昊然': 1,
      '罗振文': 1,
      '邹海鑫': 1,
      '雷程宇': 1,
      '程雨': 1,
      '魏晶晶': 1,
      '涂龙': 1,
      '杨泽用': 1,
      '肖汉': 1,
      '张扬': 1,
      '程舒': 1,
      '陈枫': 1,
      '艾御坤': 1,
      '周世显': 0.8,
      '黄涛': 1,
      '王琦炜': 1,
      '邓宇': 1,
      '胡紫艳': 1,
      '余彭鑫': 1,
      '邹朝': 1,
      '李语涵': 1,
      '孙涵': 1
    }
  }),
  methods: {
    weightedRandomSelection(names, n) {
      // 计算权重总和
      const totalWeight = Object.values(names).reduce((sum, weight) => sum + parseFloat(weight), 0);

      // 构建权重区间
      const weightRanges = Object.entries(names).reduce((ranges, [name, weight]) => {
        const lastRange = ranges.length > 0 ? ranges[ranges.length - 1] : {name: null, range: 0};
        const range = lastRange.range + (parseFloat(weight) / totalWeight);
        return [...ranges, {name, range}];
      }, []);

      // 随机抽取n个不重复的名称
      const selectedNames = new Set();
      while (selectedNames.size < n) {
        const randomNumber = Math.random();
        const selectedName = weightRanges.find(({range}) => randomNumber < range)?.name;
        if (selectedName && !selectedNames.has(selectedName)) {
          selectedNames.add(selectedName);
        }
      }

      return Array.from(selectedNames);
    },
    pick() {
      if (this.amount != null && this.amount <= Object.keys(this.allNames).length) {
        this.result = "";
        let r = this.weightedRandomSelection(this.allNames, this.amount);
        r.forEach((element) => {
          this.result += "\n" + element;
        });
      }
    },
  },
};
</script>
