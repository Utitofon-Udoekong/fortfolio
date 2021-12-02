/* eslint-disable */
<template>
  <keep-alive>
    <component :is="layout">
      <!-- <keep-alive> -->
      <slot />
      <!-- </keep-alive> -->
    </component>
  </keep-alive>
</template>

<script>
import { ref, watch, markRaw } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'AppLayout',
  setup() {
    const route = useRoute();
    const layout = ref();
    const getLayout = async (lyt) => {
      const c = await import(`@/layouts/${lyt}.vue`);
      return c.default;
    };
    watch(
      () => route.meta,
      async (meta) => {
        try {
          layout.value = markRaw(await getLayout(meta.layout));
        } catch (e) {
          layout.value = markRaw(await getLayout('AppLayoutDefault'));
        }
      }
    );
    return { layout };
  },
};
</script>