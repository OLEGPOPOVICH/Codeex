<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Header
  }
}
</script>

<style>
.section h1 {
  margin-top: 40px;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.form_add-object {
  position: relative;
  width: 350px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
}
.company_added .form-group {
    opacity: 0.2;
}
.company_added:before {
  position: absolute;
  top: 5px;
  left: 50%;
  width: 180px;
  transform: translateX(-50%);
  content: "Компания добавлена";
  display: block;
  height: 20px;
  padding-top: 110px;
  background-image: url('./assets/ok-mark.svg');
  background-repeat: no-repeat;
  background-position:top center;
  background-size: 100px auto;
  font-size: 20px;
}
.form_add-object:after {
 content: ".";
 display: block;
 height: 0;
 clear: both;
 visibility: hidden;
}
.form-group {
  margin-bottom: 30px;
}
.form-group .form-control {
  width: 100%;
  margin-top: 5px;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid #42b983;
  outline: none;
  -webkit-transition: 300ms;
  -moz-transition: 300ms;
  -o-transition: 300ms;
  transition: 300ms;
}

.form-group .form-control.error_input {
  border-bottom: 2px solid red;
}

.form_add-object .btn_add {
  display: block;
  margin: 20px auto;
  outline: none;
  text-decoration: none;
  padding: 15px 30px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
}

::-webkit-input-placeholder {color:#000000; opacity:1;}
::-moz-placeholder          {color:#000000; opacity:1;}
:-moz-placeholder           {color:#000000; opacity:1;}
:-ms-input-placeholder      {color:#000000; opacity:1;}





.list_company {
  position: relative;
  display: table;
  width: 740px;
  margin: 40px auto;
}
.row_table {
  
  display: table-row;
  width: 100%;
}
.th_table,
.td_table {
  display: table-cell;

  width: 230px;
  padding: 5px 10px;
  border: 1px solid black;
 
}
.td_table {
 border-top: none;
}
.delete_item,
.change_item {
  display: table-cell;
  width: 50px;
  padding: 5px 10px;
  cursor: pointer;
  color: red;
}
.icon_delete {
    background-image: url('./assets/delete.svg');
    background-repeat: no-repeat;
    background-size: auto 15px;
    background-position: center;
}
.icon_change {
  background-image: url('./assets/change.svg');
  background-repeat: no-repeat;
  background-size: auto 15px;
  background-position: center;
}
.overlay_form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99993;
  backface-visibility: hidden;
    -webkit-transition: all 350ms cubic-bezier(.42,0,.58,1);
  -moz-transition: all 350ms cubic-bezier(.42,0,.58,1);
  -o-transition: all 350ms cubic-bezier(.42,0,.58,1);
  transition: all 350ms cubic-bezier(.42,0,.58,1);
  -webkit-transition-timing-function: cubic-bezier(.42,0,.58,1);
  -moz-transition-timing-function: cubic-bezier(.42,0,.58,1);
  -o-transition-timing-function: cubic-bezier(.42,0,.58,1);
  transition-timing-function: cubic-bezier(.42,0,.58,1);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  background-color: rgba(0, 0, 0, 0.68);
}

.overlay_form.active {
   -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.fancybox-buttons {
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: all;
}
.fancybox-button--close {
    top: 20px;
    right: 20px;
}
.fancybox-button--close:hover {
    background: rgba(0,0,0,0.3);
}
.fancybox-button--close {
    position: relative;
    top: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 50px;
    outline: none;
    background: rgba(0,0,0,0.15);
    z-index: 10;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
}
.fancybox-button--close:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    margin-left: -13px;
    margin-top: -13px;
    background-image: url('./assets/close.svg');
    background-color: transparent;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
}
</style>
