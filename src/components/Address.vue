<template>
	<fieldset class="address">
		<legend class="address__heading">Адресные данные</legend>
		<div class="address__index field">
			<input type="number"  id="index" class="field" required>
			<label for="index">Индекс</label>
		</div>
		<div class="address__country field">
			<input type="text"  id="country" class="field" required>
			<label for="country">Страна</label>
		</div>
		<div class="address__area field">
			<input type="text"  id="area" class="field" required>
			<label for="area">Область</label>
		</div>
		<div class="address__city field">
			<input type="text"  id="city" class="field" required>
			<label for="city">Город</label>
		</div>
		<div class="address__street field">
			<input type="text"  id="street" class="field" required>
			<label for="street">Улица</label>
		</div>
		<div class="address__house field">
			<input type="text"  id="house" class="field" required>
			<label for="house">Дом</label>
		</div>
	</fieldset>
</template>

<script>
export default {
  name: "Address",

}
</script>

<style lang="sass">
.address
	display: flex
	flex-direction: column
	border: 3px solid #768eed

	div:nth-child(n + 1):not(:last-child)
		margin-bottom: 20px
  
</style>