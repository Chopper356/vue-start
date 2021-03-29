<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<!-- <li class="nav-item">
							<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/register">Register</router-link>
						</li> -->

						<router-link tag="li" class="nav-item" to="/" exact active-class="active">
							<a class="nav-link">Home</a>
						</router-link>
						<router-link tag="li" class="nav-item" to="/register" active-class="active">
							<a class="nav-link">Register</a>
						</router-link>
						<router-link tag="li" class="nav-item" to="/cars" exact active-class="active">
							<a class="nav-link">Cars</a>
						</router-link>
						<router-link tag="li" class="nav-item" to="/car/2" active-class="active">
							<a class="nav-link">Car 2</a>
						</router-link>
						<router-link tag="li" class="nav-item" to="/car/5" exact active-class="active">
							<a class="nav-link">Car 5</a>
						</router-link>

					</ul>
				</div>
			</div>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	data: () => ({

	}),
}
</script>

<style>
	.nav-item.active a {
		color: #3498db !important;
	}

</style>>
