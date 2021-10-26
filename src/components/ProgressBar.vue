<template>
  <div class="">
    <div class="progress relative pt-1">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            :style="{width: `${percentage}%`}"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-blue"
          ></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        percentage: {
            type: Number,
            default: 10
        }
    }
}
</script>

<style>

</style>