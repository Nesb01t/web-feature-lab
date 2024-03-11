## vue-router

### 基础
1. 使用 router-link 组件进行导航
   且使用 router-view 来展示路由页面

2. router 通过 createRouter 创建并在 app 中使用

3. 动态路由匹配
   用户 id 不同如 `/users/:id`
   其中的值将会以 params 形式展示

4. 路由参数变化时需要手动 watch
   - 当路由参数变化时组件实例会被重复使用
   - 但也意味着生命周期 hook 不会被重复调用
  
  可以用 watch 监听 params
  也可以 beforeRouteUpdate