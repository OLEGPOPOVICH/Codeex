<template>
    <div @click="deleteItem(item)" class="delete_item icon_delete"></div>
</template>

<script>

export default {
  props: ['item'],
 
  mounted () {
    
  },
  methods: {
    deleteItem (item) {
       this.$store.commit('deleteItem', item)
       this.$store.commit('createArray')

       let currentPage = JSON.parse(localStorage.getItem("currentPage"))
       
      if(Math.ceil(this.$store.state.totalCompanies/this.$store.state.perPage) < currentPage) {
        this.$emit('page-changed', currentPage - 1)
      } else {
        this.$emit('page-changed', currentPage)
      }
       
    },
  }
}
</script>

<style>


</style>
