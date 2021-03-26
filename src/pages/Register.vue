<template>
	<div class="container">
		<h1 class="mb-5">Register page</h1>
		<form class="pt-3" @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" class="form-control" :class="{'is-invalid': $v.email.$error}" @blur="$v.email.$touch()" v-model="email">

				<div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
				<div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
				<div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email has been used</div>
			</div>
			<div class="form-group pt-3">
				<label for="password">Password</label>
				<input type="password" id="password" class="form-control" :class="{'is-invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password">

				<div class="invalid-feedback" v-if="!$v.password.required">Password field is required</div>
				<div class="invalid-feedback" v-if="!$v.password.minLength">Min length of password is {{ $v.password.$params.minLength.min }} Not it is {{ password.length }}</div>
			</div>
			<div class="form-group pt-3">
				<label for="confirm">Confirm password</label>
				<input type="password" id="confirm" class="form-control" :class="{'is-invalid': $v.confirmPassword.$error}" @blur="$v.confirmPassword.$touch()" v-model="confirmPassword">

				<div class="invalid-feedback" v-if="!$v.confirmPassword.required">Password field is required</div>
				<div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Password should match</div>
			</div>

			<button type="submit" class="btn btn-primary mt-3" :disabled="$v.$invalid">Submit</button>
		</form>
	</div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
	data: () => ({
		email: "",
		password: "",
		confirmPassword: ""
	}),
	methods: {
		onSubmit() {
			console.log("Email", this.email);
			console.log("Password", this.password);
		}
	},
	validations: {
		email: {
			required,
			email,
			uniqEmail: (newEmail) => {
				if (newEmail === "") return true;

				return new Promise((resolve) => {
					setTimeout(() => {
						const value = newEmail !== "qwe@mail.ru";
						
						resolve(value);
					}, 1000)
				})
			}
		},
		password: {
			required,
			minLength: minLength(6)
		},
		confirmPassword: {
			required,
			sameAs: sameAs('password')
		}
	}
}
</script>

<style>

</style>
