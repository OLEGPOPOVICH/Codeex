<template>
    <div class="pagination">
      <div class="pagination_left">
        <a v-if="hasPrev()" @click="changePage(prevPage)" href="#">Предыдущая</a>
      </div>
      <div class="pagination_mid">
        <!--<span>{{ current }} из {{ totalPages }}</span>-->
        <ul>
            <li v-if="hasFirst()"><a href="#" @click="changePage(1)">1</a></li>
            <li v-if="hasFirstDots()">...</li>
            <li v-for="(page, index) in pages" :key="index">
              <a :class="{ current: current == page}" href="#" @click="changePage(page)">{{ page }}</a>
            </li>
            <li v-if="hasLastDots()">...</li>
            <li v-if="hasLast()"><a href="#" @click="changePage(totalPages)">{{ totalPages }}</a></li>
            <li>
              <select class="show_number_pages" @click="clickSelect()" v-model="showNumberPages">
                <option value="5">5</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </li>
        </ul>
      </div>
      <div class="pagination_right">
        <a v-if="hasNext()" @click="changePage(nextPage)" href="#">Следующая</a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    pageRange: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      showNumberPages: 5
    }
  },
  computed: {
    pages () {
      let pages = []

      for(let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      localStorage.setItem('currentPage', JSON.stringify(this.current))
      return pages
    },
    rangeStart () {
      let start = this.current - this.pageRange
      return (start > 0) ? start : 1
    },
    rangeEnd () {
      let end = this.current + this.pageRange
     
      return (end < this.current) ? end : this.current
    },
    totalPages () {
      return Math.ceil(this.$store.state.totalCompanies/this.$store.state.perPage)
    },
    nextPage () {
      return this.current + 1
      
    },
    prevPage () {
      return this.current - 1
    },
  },
  methods: {
    clickSelect () {
      
      let vm = this
      $(".show_number_pages").change(function () {
        vm.$store.state.perPage =  vm.showNumberPages
        vm.$store.commit('createArray')
        vm.$emit('page-changed', 1)
      });
    },
    hasPrev () {
      return this.current > 1
    },
    hasNext () {
      return this.current < this.$store.state.totalCompanies/this.$store.state.perPage
    },
    hasFirst () {
      return this.current > 2
    },
    hasLast () {
      return this.current < this.totalPages
    },
    hasFirstDots () {
      return this.current > 3
    },
    hasLastDots () {
      return this.current < this.totalPages -1
    },
    changePage: function (page) {
      this.$emit('page-changed', page)
    }
  }
}


</script>

<style>
.pagination {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto 60px;
  padding: 0px 15px;
}

.pagination_left {
 float: left;
 width: 153px;
}
.pagination_right {
 float: right;
 width: 145px;
}
.pagination a,
.pagination span {
  display: block;
  text-align: center;
  line-height: 40px;
  color: black;
  font-size: 18px;
}
.pagination a {
  margin: 0px 6px;
  padding: 0px 20px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #42b983;
  text-decoration: none;
  transition: all .2s ease-in-out;
}
.pagination a:hover {
  color:#42b983;
}

.pagination_mid {
  display: flex;
  justify-content: center;
}
.pagination_mid ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.pagination_mid li {
  display: inline-block;
}
.pagination_mid li a.current {
   background-color:#42b983;
   color: white;
}
</style>
