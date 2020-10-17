<template>
  <div id="app">
		<form>
			<Main/>
			<Address/>
			<Passport/>
		</form>
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

  }
}
</script>

<style lang="sass">

form
	display: grid
	grid-template-columns: repeat(3, 1fr)
	grid-gap: 10px

	@media (max-width: 660px)
		// TODO Подключить красивые шрифты
		grid-template-columns: 1fr

</style>
