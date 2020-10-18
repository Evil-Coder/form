<template>
  <div id="app">
		<h1 class="account-create__heading">Создание аккаунта</h1>
		<form class="account-create">
			<Main :send="send" ref="Main"/>
			<Address :send="send" ref="Address"/>
			<Passport :send="send" ref="Passport"/>
			<h2 class="account-create__successful" v-show="accept">Аккаунт успешно создан</h2>
			<button @click.prevent="sending" class="account-create__send">Создать аккаунт</button>
		</form >
  </div>
</template>

<script>
import Main from "@/components/Main";
import Address from "@/components/Address";
import Passport from "@/components/Passport";

export default {
  name: 'App',
  components: {
		Passport,
		Address,
		Main
  },
	data() {
		return {
			send: false,
			accept: false
		}
	},
	methods: {
		sending() {
			this.send = true

			if (!this.$refs.Main.$v.$invalid &&
					(	this.$refs.Main.$v.clientGroup.$model.vip ||
						this.$refs.Main.$v.clientGroup.$model.problem ||
						this.$refs.Main.$v.clientGroup.$model.oms) &&
					!this.$refs.Address.$v.$invalid &&
					!this.$refs.Passport.$v.$invalid &&
						this.$refs.Passport.typeDocument) this.accept = true
			else this.accept = false
		}
	},
}
</script>

<style lang="sass">
@import './assets/fonts.sass'

body
	margin: 0 !important
	padding: 0 !important

.account-create
	display: grid
	grid-template-columns: repeat(3, 1fr)
	grid-gap: 10px
	padding: 10px

	@media (max-width: 720px)
		grid-template-columns: 1fr

	&__heading
		text-align: center
		font-family: georgia, sans-serif

	&__send
		width: 200px
		height: 45px
		margin: 20px 0
		justify-self: center
		grid-column: 1 / -1
		border: 1px solid white
		border-radius: 40px
		background-color: #5F2EEA
		font-size: 18px
		color: white
		outline: none

		&:hover
			background-color: #2A00A2
		&:focus
			box-shadow: 0 0 10px 2px #897bdb

	@media (max-width: 720px)
		margin: 0 auto

	&__successful
		grid-column: 1 / -1
		text-align: center
		background-color: #12a012
		font-family: "Comic Sans", sans-serif
		color: white


</style>
