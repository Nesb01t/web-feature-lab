import { type Component, h, type VNode } from 'vue';

export const withDouble = (com: Component): Component => {
  const geneNode = (props: object) => {
    let node = h(com, {
      ...props
    });
    return h('fragment', {}, [node, node]);
  };

  return {
    render() {
      return geneNode(this.$props);
    }
  };
};