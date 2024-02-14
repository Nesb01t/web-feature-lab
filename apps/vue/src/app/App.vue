<script setup lang="ts">
import ExamplePromise from '../example/example-promise.vue';
import ExampleMouse from '../example/example-mouse.vue';
import ExampleDialog from '../example/example-dialog.vue';
import ExampleFuncDialog from '../example/example-func-dialog.vue';
import ExampleHocDouble from '../example/example-hoc-double.vue';
import { withDouble } from '../../../../libs/vue-hoc-double/src/hoc';

const double = withDouble(ExampleHocDouble);
</script>

<template>
  <ExamplePromise />
  <ExampleMouse />
  <ExampleDialog />
  <ExampleFuncDialog />
  <double />
</template>
