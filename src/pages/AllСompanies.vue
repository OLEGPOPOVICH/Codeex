<template>
  <section class="section">
    <div class="container">
      <h1>Все компании</h1>

      <Pagination :current="currentPage" :perPage="perPage" :total="totalCompanies" @page-changed="fetchCompanies"></Pagination>

      <div class="list_company">
          <div class="row_table">
            <div @click="even(companies)" class="th_table">Наименование компании</div>
            <div class="th_table">ИНН компании</div>
            <div class="th_table">Руководитель компании</div>
          </div>
          <div v-for="(item, index) in companies" :key="index" :id="item.inn" class="row_table item_company">
            <div class="td_table">{{ item.title }}</div>
            <div class="td_table">{{ item.inn }}</div>
            <div class="td_table">{{ item.name }}</div>
          </div>
      </div>
  
    </div>
  </section>
</template>

<script>

import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      companies: [],
      totalCompanies: this.$store.state.totalCompanies,
      perPage: this.$store.state.perPage,
      currentPage: 1,
    }
  },
  created () {
    this.$store.commit('downloadLocalStore')
    this.$store.commit('createArray')
    this.totalCompanies = this.$store.state.totalCompanies
  },
  mounted () {
    this.fetchCompanies(this.currentPage)
  },
  components: {
    Pagination
  },
  methods: {
    fetchCompanies: function(page) {
      this.companies = []

      for(let i = 0; i < this.perPage; i++) {
        if(this.$store.state.arrayCompanies[page-1][i] != undefined){
          this.companies.push(this.$store.state.arrayCompanies[page-1][i])
        }
      }

      this.currentPage = page   
    },
  }
}
</script>

<style>

</style>
