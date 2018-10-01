<template>
    <section class="section">
      
      <div class="container">
        <h1>Новая компания</h1>
        <div class="search">
          <input id="search" name="fullname" type="text" size="100" placeholder="Поиск по названию компании, ИНН и ФИО "/>
        </div>
        <div class="form_add-object">
          <div class="form-group">
            <input type="text" id="help-input" class="form-control" v-model.trim="title" placeholder="Наименование компании">
          </div>
          
          <div class="form-group">
            <input type="number" class="form-control" v-model.number="inn" placeholder="ИНН компании">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" v-model.trim="name" placeholder="Руководитель компании">
          </div>
          <button class="btn_add" @click="createProduct">Добавить компанию</button>
        </div>
      </div>
    </section>
</template>

<script>
import inputError from './inputError.js'


export default {
  data () {
    return {
      inn: '', 
      title: '',
      name: '',
      checkOn: false
    }
  },
  mounted () {
  
      let mas = {
        inn: '', 
        title: '',
        name: '',
      }

      let vm = this

      $('#search').suggestions({
        token: "0c621e05319f883c0fcf712a5013b8747fa673cd",
        type: "PARTY",
        count: 5,
        onSelect: function(suggestion) {
          vm.title = suggestion.value 
          vm.inn = suggestion.data.inn 
          vm.name = suggestion.data.name.full 
        }
      });

      let search = document.getElementById("search")

      search.addEventListener("blur", function(event) {
        if (event.target.value == '') {
          vm.title = ''
          vm.inn = ''
          vm.name = ''
        }
      }, true);

      let clearInput = document.getElementsByClassName("suggestions-addon")[0]
      
      clearInput.addEventListener("click", function(event) {
        vm.title = ''
        vm.inn = ''
        vm.name = ''
      }, true);

  },
  methods: {
    createProduct () {
    
      const company = {
        inn: this.inn, 
        title: this.title,
        name: this.name,
      }

      inputError.inputError()
 
      let input = document.getElementsByTagName('input');
      let resultCheckInput = false;

      for(let i = 0; i < input.length; i++){
        if(input[i].value != '') {
          resultCheckInput = true;
        } else {
          resultCheckInput = false;
        }
      }

      this.checkOn = resultCheckInput;
      let formAddObject = document.getElementsByClassName('form_add-object')[0];

      if(this.checkOn != false) {
     
        this.$store.commit('addToCompanies', company)
        this.$store.commit('addToLocal')

        formAddObject.classList.add("company_added");

        setTimeout(function () {
          formAddObject.classList.remove("company_added");
        }, 2000)

        this.inn = ''
        this.title = ''
        this.name = ''
        this.checkOn = false
      }
    }
  }
}


    
        
</script>

<style>


</style>
