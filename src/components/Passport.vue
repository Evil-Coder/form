<template>
	<fieldset class="passport">
		<legend class="passport__heading">Паспортные данные</legend>
		<div class="main__type-document select">
			<div class="main__type-document-container select__container" :class="{'select__container_show': showTypeDocument}" @click="showTypeDocument = !showTypeDocument" > Тип документа
				<div class="passport__type-document-elements radio select__elements">
					<input type="radio" id="passport" name="type-document" value="passport" v-model="$v.typeDocument.$model">
					<label for="passport">Паспорт</label>

					<input type="radio" id="birth-certificate" name="type-document" value="birth-certificate" v-model="$v.typeDocument.$model">
					<label for="birth-certificate">Свидетельство о рождении</label>

					<input type="radio" id="driver's-license" name="type-document" value="driver's-license" v-model="$v.typeDocument.$model">
					<label for="driver's-license">Водительское удостоверение</label>
				</div>
			</div>
			<p class="field__warning" v-if="!typeDocument && send">Пожалуйста выберите тип документа</p>
		</div>
		<div class="passport__series field"
				 :class="{'field_valid' : $v.series.$model, 'field_invalid' : $v.series.$error}">
			<input type="number"  id="series" class="field" v-model="$v.series.$model">
			<label for="series">Серия</label>

			<p class="field__error" v-if="$v.series.$error">Пожалуйста напишите серию корректно</p>
		</div>
		<div class="passport__number field"
				 :class="{'field_valid' : $v.number.$model, 'field_invalid' : $v.number.$error}">
			<input type="number"  id="number" class="field" v-model="$v.number.$model">
			<label for="number">Номер</label>

			<p class="field__error" v-if="$v.number.$error">Пожалуйста напишите номер корректно</p>
		</div>
		<div class="passport__issued-by field"
				 :class="{'field_valid' : $v.issuedBy.$model, 'field_invalid' : $v.issuedBy.$error}">
			<input type="text"  id="issued-by" class="field" v-model="$v.issuedBy.$model">
			<label for="issued-by">Кем выдан</label>

			<p class="field__error" v-if="$v.issuedBy.$error">Пожалуйста напишите кем выдан документ корректно</p>
		</div>
		<div class="passport__date-of-issue field field_valid"
				 :class="{'field_invalid' : $v.dateOfIssue.$error || !$v.dateOfIssue.required && send}">
			<input type="date"  id="date-of-issue" class="field" v-model="$v.dateOfIssue.$model">
			<label for="date-of-issue">Дата выдачи</label>

			<p class="field__warning" v-if="!$v.dateOfIssue.required && send">Пожалуйста напишите дату выдачи документа</p>
		</div>
	</fieldset>
</template>

<script>
import {required, numeric, minLength, alpha} from "vuelidate/lib/validators";

export default {
  name: "Passport",
	data() {
		return {
			showTypeDocument: false,

			typeDocument: false,
			series: '',
			number: '',
			issuedBy: '',
			dateOfIssue: ''
		}
	},
	props: {
		send: {
			type: Boolean,
			default: false
		},
	},
	validations: {
		typeDocument: {required},
		series: {
			numeric,
			minLength: minLength(2),
		},
		number: {
			numeric,
			minLength: minLength(3),
		},
		issuedBy: {
			alpha: val => /^[а-яё]*$/i.test(val),
			minLength: minLength(3),
		},
		dateOfIssue: {
			required,
		}
	}
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