<template>
	<fieldset class="passport">
		<legend class="passport__heading">Паспортные данные</legend>
		<div class="passport__type-document field">
			<input type="text"  id="type-document" class="field" required>
			<label for="type-document">Тип документа</label>
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

}
</script>

<style lang="sass">
.passport
	display: flex
	flex-direction: column
	border: 0

	div:nth-child(n + 1):not(:last-child)
		margin-bottom: 20px
</style>