<template>
	<div class="wrapper">

		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar-content">
						<div class="logo">Github Finder</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link of links" :key="link.title">
                <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
              </li>
            </ul>
					</div>
				</div>
			</div>
		</header>

		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: 'App',
		data: () => ({
      links: [
        {title: 'Home', url: '/'}
      ]
    })
	}
</script>

<style lang="scss">

	.navbar-link {
		&.router-link-active {
			color: #5247e7;
		}
	}

</style>
