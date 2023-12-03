<template>
  <div style="height: 100px">
    <v-footer class="bg-grey-lighten-4">
      <v-row justify="center" class="text-grey-darken-1" no-gutters>
        <v-col class="text-center align-content-center mt-4" cols="12">
          Copyright ©{{ new Date().getFullYear() }}
          <a
            class="text-grey-darken-1"
            style="text-decoration: none"
            href="https://hakimyu.cn/"
            target="_blank"
            >HakimYu</a
          >
          All Rights Reserved<br />
        </v-col>
        <v-col class="text-center mt-2" cols="12">
          <a
            class="text-grey-darken-1"
            style="text-decoration: none"
            href="https://beian.miit.gov.cn/"
            rel="noopener"
            target="_blank"
            >赣ICP备2022001931号</a
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>
