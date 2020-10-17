<template>
	<fieldset class="address">
		<legend class="address__heading">Адресные данные</legend>
		<div class="address__index field"
				 :class="{'field_valid' : $v.index.$model, 'field_invalid' : $v.index.$error}">
			<input type="number"  id="index" class="field"  v-model.trim="$v.index.$model">
			<label for="index">Индекс</label>

			<span v-if="$v.index.$error">Пожалуйста заполните форму корректно</span>
		</div>
		<div class="address__country field"
				 :class="{'field_valid' : $v.country.$model, 'field_invalid' : $v.country.$error}">
			<input type="text"  id="country" class="field" v-model.trim="$v.country.$model">
			<label for="country">Страна</label>

			<span v-if="$v.country.$error">Пожалуйста заполните форму корректно</span>
		</div>
		<div class="address__area field"
				 :class="{'field_valid' : $v.area.$model, 'field_invalid' : $v.area.$error}">
			<input type="text"  id="area" class="field" v-model.trim="$v.area.$model">
			<label for="area">Область</label>

			<span v-if="$v.area.$error">Пожалуйста заполните форму корректно</span>
		</div>
		<div class="address__city field"
				 :class="{'field_valid' : $v.city.required, 'field_invalid' : $v.city.$error}">
			<input type="text"  id="city" class="field" v-model.trim="$v.city.$model">
			<label for="city">Город</label>

			<span v-if="$v.city.$error">Пожалуйста заполните форму корректно</span>
			<span v-if="!$v.city.required && send">Пожалуйста заполните форму</span>
		</div>
		<div class="address__street field"
				 :class="{'field_valid' : $v.street.$model, 'field_invalid' : $v.street.$error}">
			<input type="text"  id="street" class="field" v-model.trim="$v.street.$model">
			<label for="street">Улица</label>

			<span v-if="$v.street.$error">Пожалуйста заполните форму корректно</span>
		</div>
		<div class="address__house field"
				 :class="{'field_valid' : $v.house.$model, 'field_invalid' : $v.house.$error}">
			<input type="text"  id="house" class="field" v-model.trim="$v.house.$model">
			<label for="house">Дом</label>

			<span v-if="$v.house.$error">Пожалуйста заполните форму корректно</span>
		</div>
	</fieldset>
</template>

<script>
import {required, alpha, numeric, minLength} from "vuelidate/lib/validators";

export default {
  name: "Address",
	data() {
		return {
			index: '',
			country: '',
			area: '',
			city: '',
			street: '',
			house: ''
		}
	},
	props: {
		send: {
			type: Boolean,
			default: false
		},
	},
	validations: {
		index: {
			numeric,
			minLength: minLength(3)
		},
		country: {
			alpha,
			minLength: minLength(2)
		},
		area: { alpha, minLength: minLength(2) },
		city: {
			required,
			alpha,
			minLength: minLength(2)
		},
		street: { alpha, minLength: minLength(2) },
		house: { numeric }
	}
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