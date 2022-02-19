<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- errors -->
        <div class="error" v-if="error" style="margin-bottom: 20px">
          <p>{{ error }}</p>
        </div>

        <!-- search -->
        <div class="search-group">
          <app-search :value="search" placeholder="Type user name" @search="search = $event"/>
          <button class="btn btnPrimary" @click="getUserAndRepos">Search!</button>
        </div>

        <!-- wrapper -->
        <div class="user__wrapper" v-if="user">
          <div class="user-info">
            <img :src="user.avatar_url" alt="Avatar">
            <a target="_blank" :href="user.html_url">{{ user.login }}</a>
            <span>{{ user.public_repos }} ⭐</span>
          </div>
        </div>

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

  export default {
    name: 'Home',
    components: {AppSearch},
    data() {
      return {
        search: '',
        user: null,
        repos: null
      }
    },
    methods: {
      async getUserAndRepos() {
        try {
          this.user = await this.$store.dispatch('getUser', this.search)
          this.repos = await this.$store.dispatch('getRepos', this.search)
        } catch (e) {}
      }
    },
    computed: {
      error() {
        return this.$store.getters.error
      }
    }
  }
</script>

<style lang="scss" scoped>

  .error {
    color: crimson;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-group {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    button {
      margin-left: 8px;
    }
  }

  .user__wrapper {
    width: 600px;
    margin: 30px 0 0;
  }

  .user-info {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 10px 0;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 16px;
    }
    a {
      font-size: 20px;
      font-weight: 700;
      margin-right: auto;
    }
  }

  .repos__wrapper {
    width: 600px;
    margin: 16px 0;
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
