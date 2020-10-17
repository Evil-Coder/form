<template>
	<fieldset class="passport">
		<legend class="passport__heading">Паспортные данные</legend>
		<div class="main__type-document select" :class="{'select_show': showTypeDocument}" @click="showTypeDocument = !showTypeDocument" > Лечащий врач
			<div class="passport__type-document-container radio select__container">
				<input type="radio" id="passport" name="type-document" value="passport">
				<label for="passport">Паспорт</label>

				<input type="radio" id="birth-certificate" name="type-document" value="birth-certificate">
				<label for="birth-certificate">Свидетельство о рождении</label>

				<input type="radio" id="driver's-license" name="type-document" value="driver's-license">
				<label for="driver's-license">Водительское удостоверение</label>
			</div>
		</div>
		<div class="passport__series field">
			<input type="number"  id="series" class="field" required>
			<label for="series">Серия</label>
		</div>
		<div class="passport__number field">
			<input type="number"  id="number" class="field" required>
			<label for="number">Номер</label>
		</div>
		<div class="passport__issued-by field">
			<input type="text"  id="issued-by" class="field" required>
			<label for="issued-by">Кем выдан</label>
		</div>
		<div class="passport__date-of-issue field">
			<input type="number"  id="date-of-issue" class="field" required>
			<label for="date-of-issue">Дата выдачи</label>
		</div>
	</fieldset>
</template>

<script>
export default {
  name: "Passport",
	data() {
		return {
			showTypeDocument: false
		}
	},
}
</script>

<style lang="sass">
.passport
	display: flex
	flex-direction: column
	border: 3px solid #768eed

	div:nth-child(n + 1):not(:last-child)
		margin-bottom: 20px
</style>