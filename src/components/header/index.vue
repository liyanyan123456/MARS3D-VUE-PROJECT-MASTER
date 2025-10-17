<!--
 * @Author: [liyanyan123456] [2073820553@qq.com]
 * @Date: 2025-10-16 16:33:16
 * @LastEditors: [liyanyan123456] [2073820553@qq.com]
 * @LastEditTime: 2025-10-17 17:21:32
 * @FilePath: \mars3d-vue3-vite\src\components\header\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header">
    <div class="title">
      <div class="logo"></div>
      <div class="text">Mars3D-Vue项目示例</div>
    </div>
    <div class="menu">
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" background-color="#222938" text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <el-icon class="menu-text">
            <House />
          </el-icon>
          <span class="menu-text"> 首页</span>
         </el-menu-item>
        <el-sub-menu index="2">
          <template #title><el-icon><Operation /></el-icon>信息展示</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3"><el-icon ><OfficeBuilding /></el-icon>三维模型</el-menu-item>
        <el-menu-item index="4"><el-icon><Histogram /></el-icon>数据分析</el-menu-item>
        <el-menu-item index="5"><el-icon><Grid /></el-icon>综合态势</el-menu-item>
      </el-menu>
    </div>
    <div class="message"><el-icon><User /></el-icon></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.el-menu--horizontal {
  --el-menu-horizontal-height: 70px;
}

.el-menu--horizontal.el-menu {
  border: none;
}

.header {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  .title {
    display: flex;
    height: 70px;
    width: 460px;
    background-image: url(../../assets/img/heade-title-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    text-shadow: 0px 2px 6px #123756;

    .logo {
      width: 70px;
      height: 70px;
      margin-left: 10px;
      display: inline-block;
      background: url(../../assets/img/logo.png);
      background-size: 120% 120%;
      background-repeat: no-repeat;
      background-position: -5px -5px;
    }

    .text {
      font-size: 25px;
      line-height: 70px;
      font-weight: 700;
      vertical-align: top;
    }

  }

  .menu {
    flex: 1;
    .el-menu-item {
      font-size: 18px !important;
    }

    .menu-text {
      font-size: 18px;
    }

    ::v-deep .el-sub-menu__title {
      font-size: 18px !important;
    }
  }

  .message {
    width: 100px;
    ;
  }
}
</style>
