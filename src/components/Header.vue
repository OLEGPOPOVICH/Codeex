<template>
    <header class="header">
      <div class="container">
        <nav class="header_menu">
              <router-link 
                v-for="link in links"
                :key="link.title"
                :to="link.url" 
                tag="div"
                exact active-class="current-page"
              >
                <a :class="link.class">{{link.title}}</a>
              </router-link>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    links () {
      return [
        {title: 'Все компании', class: 'btn_header', url: '/'},
        {title: 'Добавить компанию', class: 'btn_header', url: '/add-company'},
        {title: 'Редактировать компании', class: 'btn_header', url: '/edit-companies'}
      ]
    },
 
  },
}
</script>

<style>
body {
  padding: 0px;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.header,
.section {
  width: 100%;
}
.container {
  max-width: 1200px;
  width: 100%;
  padding: 0px 15px;
  margin: 0px auto;
}
.header_menu {
  padding:  20px 0px;
}
.header_menu:after {
  content: '.';
  display: block; 
  clear: both; 
  visibility: hidden; 
  height: 0;
}
.header_menu > div {
  float: right;
  margin-left: 20px;
}

.btn_header {
  float: right;
  text-decoration: none;
  padding: 10px 20px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #0066e5;
  color: black;
  transition: all .2s ease-in-out;
}
.btn_header:hover {
  color: #0066e5;
}
.current-page .btn_header {
  background-color: #0066e5;
  color: white;
}

</style>
