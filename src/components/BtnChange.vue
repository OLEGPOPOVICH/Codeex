<template>
    <div @click="changeItem(item)" class="change_item icon_change"></div>
</template>

<script>

export default {
  props: ['item'],
  methods: {
    changeItem (item) {
      this.$emit('change-Item', item )
    },
  }
}
</script>

<style>


</style>
