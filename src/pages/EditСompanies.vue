<template>
  <section class="section">
    <div class="container">
      <h1>Редактировать компании</h1>

      <Pagination :current="currentPage"  @page-changed="fetchCompanies"></Pagination>

      <div class="list_company">
          <div class="row_table">
            <div class="change_item"></div>
            <div class="th_table">Наименование компании</div>
            <div class="th_table">ИНН компании</div>
            <div class="th_table">Руководитель компании</div>
            <div class="delete_item"></div>
          </div>
          <div v-for="(item, index) in companies" :key="index" :id="item.inn" class="row_table item_company">
            
            <BtnChange :item="item" @change-Item="changeItem"></BtnChange>
            <div class="td_table">{{ item.title }}</div>
            <div class="td_table">{{ item.inn }}</div>
            <div class="td_table">{{ item.name }}</div>
            <BtnDelete :item="item" @page-changed="fetchCompanies"></BtnDelete>
          </div>
      </div>
      <div class="overlay_form">
        <div class="fancybox-buttons">
          <button @click="close" class="fancybox-button--close" title="Close (Esc)"></button>
        </div>
        <div class="form_add-object">
            <div class="form-group">
              <input type="text" class="form-control" v-model.trim="title" placeholder="Наименование компании">
            </div>
            
            <div class="form-group">
              <input type="number" class="form-control" v-model.number="inn" placeholder="ИНН компании">
            </div>

            <div class="form-group">
              <input type="text" class="form-control" v-model.trim="name" placeholder="Руководитель компании">
            </div>
            <button @click="saveItem" class="btn_add">Сохранить</button>
          </div>
      </div>
    </div>
  </section>
</template>

<script>

import Pagination from '../components/Pagination.vue'
import BtnDelete from '../components/BtnDelete.vue'
import BtnChange from '../components/BtnChange.vue'

export default {
  data () {
    return {
      companies: [],
      perPage: 5,
      currentPage: 1,

      inn: '',
      title: '',
      name: '',
    }
  },
  created () {
    this.$store.commit('downloadLocalStore')
    this.$store.commit('createArray')
  },
  mounted () {
    this.fetchCompanies(this.currentPage)
  },
  components: {
    Pagination,
    BtnDelete,
    BtnChange
  },
  methods: {
    fetchCompanies: function(page) {
      this.companies = []
      this.perPage = this.$store.state.perPage
      for(let i = 0; i < this.perPage; i++) {
        if(this.$store.state.arrayCompanies[page-1][i] != undefined){
          this.companies.push(this.$store.state.arrayCompanies[page-1][i])
        }
      }

      this.currentPage = page
      this.$store.state.currentPage = page
    },
    changeItem (item) {
     
      this.$store.state.oldItem = item

      this.inn = item.inn
      this.title = item.title
      this.name = item.name

      let client_h = document.documentElement.clientHeight;
      let marginTop = (client_h - 286)/2;

      document.getElementsByClassName('form_add-object')[0].style.marginTop = marginTop + 'px';
      document.getElementsByClassName('overlay_form')[0].classList.add('active');
    },
    close () {
      document.getElementsByClassName('overlay_form')[0].classList.remove('active');
    },
    saveItem () {
      let item = {
        inn: this.inn,
        title: this.title,
        name: this.name,
      }

      this.$store.commit('saveItem', item)
      this.$store.commit('createArray')
      this.fetchCompanies(JSON.parse(localStorage.getItem("currentPage")))

      document.getElementsByClassName('overlay_form')[0].classList.remove('active');

    }
  }
}
</script>

<style>


</style>
