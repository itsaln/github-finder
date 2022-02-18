<template>
	<div class="wrapper">

		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar-content">
						<div class="logo">Github Finder</div>
<!--						<ul class="navbar-list">-->
<!--							<li v-for="link of links" :key="links.title" class="navbar-item">-->
<!--								<router-link :to="link.url" class="navbar-link" :title="link.title">{{ link.title }}</router-link>-->
<!--							</li>-->
<!--						</ul>-->
					</div>
				</div>
			</div>
		</header>

		<router-view></router-view>

		<!-- <footer></footer> -->

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
