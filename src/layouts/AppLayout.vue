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
    console.log('AppLayout created');
    const getLayout = async (lyt) => {
      const c = await import(`@/layouts/${lyt}.vue`);
      console.log(c);
      return c.default;
    };
    watch(
      () => route.meta,
      async (meta) => {
        console.log('...', meta.layout);
        try {
          layout.value = markRaw(await getLayout(meta.layout));
        } catch (e) {
          console.warn('%c Use AppLayoutDefault instead.\n', 'color: darkturquoise', e);
          layout.value = markRaw(await getLayout('AppLayoutDefault'));
        }
      }
    );
    return { layout };
  },
};
</script>