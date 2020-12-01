<template>
  <inner-template>
    <template #header>
      My Image’s Title
    </template>
    <template #footer>
      This is footer
    </template>
  </inner-template>
</template>
<script>
import InnerTemplate from '@/layouts/NameLayout';
export default {
  components: {
    InnerTemplate
  }
};
</script>
