### scoped slots

https://vuejs.org/guide/components/slots.html#scoped-slots

slot 内容无权访问 child 中的状态

但有的时候我们希望 slot 使用来自父子组件的数据

可以将属性传递给 slot 出口, 就像 props 传递给组件一样

![img.png](img.png)