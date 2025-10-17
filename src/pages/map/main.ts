/*
 * @Author: [liyanyan123456] [2073820553@qq.com]
 * @Date: 2025-10-17 10:33:34
 * @LastEditors: [liyanyan123456] [2073820553@qq.com]
 * @LastEditTime: 2025-10-17 16:55:24
 * @FilePath: \mars3d-vue-project-master\src\pages\map\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d/mars3d.css"
import "font-awesome/css/font-awesome.css"

import "mars3d"
import "@mars/components/mars-work/expand/index"

import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import Application from "./App.vue"
import { injectState, key } from "@mars/common/store/widget"
import store from "./widget-store"
import MarsUIInstall from "@mars/components/mars-ui"
import "@mars/components/mars-ui/common"

const app = createApp(Application)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


MarsUIInstall(app)

app.use(injectState(store), key)
app.use(ElementPlus)

app.mount("#app")
