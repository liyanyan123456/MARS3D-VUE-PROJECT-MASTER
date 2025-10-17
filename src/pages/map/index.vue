<!--
 * @Author: [liyanyan123456] [2073820553@qq.com]
 * @Date: 2025-10-17 11:51:35
 * @LastEditors: [liyanyan123456] [2073820553@qq.com]
 * @LastEditTime: 2025-10-17 12:05:26
 * @FilePath: \mars3d-vue-project-master\src\pages\map\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="menu">
        <Header />
    </div>
    <div class="container">
         <main-view @mapLoaded="mapLoaded" :url="sceneUrl" />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import Header from "@mars/components/header/index.vue"
import MainView from "@mars/components/mars-work/main-view.vue"
import { getQueryString } from "@mars/utils/mars-util"

const sceneUrl = computed(() => getQueryString("url"))
function mapLoaded(map: any) {
  // 地图构造完成
}
</script>

<style lang="less" scoped>
.menu {
    height: 70px;
    background: #222938;
    z-index:1000;
}
.container {
    height: calc(100% - 70px);
}
</style>
