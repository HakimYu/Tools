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
      <v-btn align-center size="x-large" color="white" @click="pick()" elevation="2">抽取</v-btn>
    </div>

    <div
      v-html="result"
      class="mb-3 mt-3 mx-2 text-h2 font-weight-medium text-center"
      style="white-space: pre-line"
    ></div>
    <div
      v-if="congratulation"
      class="ml-10 mx-2 text-h3 font-weight-medium text-center"
      style="white-space: pre-line"
    >👏恭喜没有抽到杨政！👏<br/>😅周世显说怎么还没抽到杨政😅
    </div>
  </div>
</template>

<script setup>
// noinspection ES6UnusedImports
import confetti from 'canvas-confetti';
</script>

<script>
export default {
  name: "NameDrawer",
  data: () => ({
    congratulation: false,
    amount: 2,
    result: null,
    allNames: {
      '范文浩': 1,
      '杨政': 1,
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
      '张振': 1,
      '杜文强': 1,
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
      '张扬': 0.001,
      '程舒': 1,
      '陈枫': 1,
      '周世显': 1,
      '黄涛': 1,
      '王琦炜': 1,
      '邓宇': 1,
      '胡紫艳': 1,
      '余彭鑫': 1,
      '邹朝': 1,
      '李语涵': 1,
      '孙涵': 0.001
    }
  }),
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
    if (localStorage.getItem('magic') === 'true') {
      document.title = '抽签！'
    }
  },
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
    handleKeyDown(event) {
      if (event.key === 'PageDown') {
        if (localStorage.getItem('magic') === 'true') {
          localStorage.removeItem('magic');
          document.title = '抽签';
        } else {
          localStorage.setItem('magic', 'true');
          document.title = '抽签！';
        }
      }
    },
    fireConfetti() {
      confetti({
        angle: 90,
        spread: 180,
        flat: true,
        particleCount: 10,
        origin: {x: 0.5, y: 1},
        shapes: [confetti.shapeFromText({text: '😅👏', scalar: 5})],
        scalar: 5,
        ticks: 200,
        gravity: 0.3,
        decay: 0.8
      });
      confetti({
        angle: 25,
        spread: 60,
        particleCount: 50,
        origin: {x: 0, y: 0.5},
        scalar: 1.5,
        ticks: 300
      });
      confetti({
        angle: 155,
        spread: 60,
        particleCount: 50,
        origin: {x: 1, y: 0.5},
        scalar: 1.5,
        ticks: 300
      });
    },
    congratulate() {
      this.fireConfetti();
      this.congratulation = true;
    },
    insertRandom(arr, element) {
      // 生成随机位置
      let randomIndex = Math.floor(Math.random() * (arr.length + 1));
      // 在随机位置插入元素
      arr.splice(randomIndex, 0, element);
    },
    normalPick() {
      if (this.amount != null && this.amount <= 45) {
        this.result = "";
        let r = []
        if (this.amount === 45) {
          r = this.weightedRandomSelection(this.allNames, 44);
          this.insertRandom(r,'喻鸿杰')
        } else {
          r = this.weightedRandomSelection(this.allNames, this.amount);
        }
        if (!r.find((element) => element === '杨政')) {
          this.congratulate()
        }
        r.forEach((element) => {
          this.result += element + "\n";
        });
      }
    },
    magicPick() {
      this.result = "程舒\n杨政";
      localStorage.removeItem('magic');
      document.title = '抽签';
      // this.congratulate();
    },
    pick() {
      this.congratulation = false;
      if (localStorage.getItem('magic') === 'true' && this.amount === 2) {
        this.magicPick();
      } else {
        this.normalPick();
      }
    },
  },
};
</script>
