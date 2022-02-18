<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- errors -->
        <div class="error" v-if="error" style="margin-bottom: 20px">
          <p>{{ error }}</p>
        </div>

        <!-- search -->
        <app-search :value="search" placeholder="Type user name" @search="search = $event"/>

        <!-- buttons -->
        <button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search!</button>
        <button v-else class="btn btnPrimary" @click="getRepos">Search Again!</button>

        <!-- wrapper -->
        <div class="repos__wrapper" v-if="repos">
          <!-- item -->
          <div class="repos-item" v-for="repo of repos" :key="repo.id">
            <div class="repos-info">
              <a target="_blank" :href="repo.html_url">{{ repo.name }}</a>
              <span>{{ repo.stargazers_count }} ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import AppSearch from '@/components/Search'
  import axios from 'axios'

  export default {
    name: 'Home',
    data() {
      return {
        search: '',
        error: null,
        repos: null
      }
    },
    methods: {
      getRepos() {
        axios.get(`https://api.github.com/users/${this.search}/repos`)
          .then(res => {
            this.error = null
            this.repos = res.data
          })
          .catch(err => {
            console.log(err)
            this.repos = null
            this.error = `Can't find this user`
          })
      }
    },
    components: {AppSearch}
  }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top: 30px;
  }

  .repos__wrapper {
    width: 400px;
    margin: 30px 0;
  }

  .repos-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #dbdbdb;
  }

</style>
