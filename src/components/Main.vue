<template>
	<fieldset class="main">
		<legend class="main__heading">Основные данные</legend>
		<div class="main__surname field"
				 :class="{'field_valid' : $v.surname.required, 'field_invalid' : $v.surname.$error}">
			<input type="text" id="surname" v-model.trim="$v.surname.$model">
			<label for="surname">Фамилия</label>

			<p class="field__error" v-if="$v.surname.$error">Пожалуйста напишите корректное имя</p>
			<p class="field__warning" v-if="!$v.surname.required && send">Пожалуйста напишите имя</p>
		</div>
		<div class="main__name field"
				 :class="{'field_valid' : $v.name.required, 'field_invalid' : $v.name.$error}">
			<input type="text" id="name" v-model.trim="$v.name.$model">
			<label for="name">Имя</label>

			<p class="field__error" v-if="$v.name.$error">Пожалуйста напишите корректную фамилию</p>
			<p class="field__warning" v-if="!$v.name.required && send">Пожалуйста напишите фамилию</p>
		</div>
		<div class="main__middle-name field"
				 :class="{'field_valid' : $v.middleName.required, 'field_invalid' : $v.middleName.$error}">
			<input type="text" id="middle-name" v-model.trim="$v.middleName.$model">
			<label for="middle-name">Отчество</label>

			<p class="field__error" v-if="$v.middleName.$error">Пожалуйста напишите корректное отчество</p>
			<p class="field__warning" v-if="!$v.middleName.required && send">Пожалуйста напишите отчество</p>
		</div>
		<div class="main__birthday field field_valid"
				 :class="{'field_invalid' : $v.birthday.$error}">
			<input type="date" id="birthday" v-model.trim="$v.birthday.$model">
			<label for="birthday">Дата рождения</label>

			<p class="field__warning" v-if="!$v.birthday.required && send">Пожалуйста напишите дату рождения</p>
		</div>
		<div class="main__phone field"
				 :class="{'field_valid' : $v.phone.required, 'field_invalid' : $v.phone.$error}">
			<input type="tel" id="phone" v-model.trim="$v.phone.$model">
			<label for="phone">Номер телефона</label>

			<p class="field__error" v-if="$v.phone.$error">Пожалуйста напишите корректный номер телефона</p>
			<p class="field__warning" v-if="!$v.phone.required && send">Пожалуйста напишите номер телефона</p>
		</div>
		<div class="main__gender radio">
			<input type="radio" id="male" name="gender" value="male">
			<label for="male">Мужчина</label>

			<input type="radio" id="female" name="gender" value="female">
			<label for="female">Женщина</label>
		</div>
		<div class="main__client-group select" >
			<div class="main__client-group-container select__container"
					 :class="{'select__container_show': showClientGroup}"
					 @click="showClientGroup = !showClientGroup"> Группа клиентов
				<div class="main__client-group-elements checkbox select__elements">
					<input type="checkbox" id="vip" name="client-group" value="vip"
								 v-model="$v.clientGroup.vip.$model">
					<label for="vip">VIP</label>

					<input type="checkbox" id="problem" name="client-group" value="problem"
								 v-model="$v.clientGroup.problem.$model">
					<label for="problem">Проблемные</label>

					<input type="checkbox" id="oms" name="client-group" value="oms"
								 v-model="$v.clientGroup.oms.$model">
					<label for="oms">ОМС</label>
				</div>
			</div>
			<p class="select__warning" v-if="(!$v.clientGroup.$model.vip && !$v.clientGroup.$model.problem && !$v.clientGroup.$model.oms) && send">Пожалуйста выберите группу</p>
		</div>
		<div class="main__therapist-container select__container"
				 :class="{'select__container_show': showTherapist}"
				 @click="showTherapist = !showTherapist"> Лечащий врач
			<div class="main__therapist-elements radio select__elements">
				<input type="radio" id="ivanov" name="therapist" value="ivanov">
				<label for="ivanov">Иванов</label>

				<input type="radio" id="zaharov" name="therapist" value="zaharov">
				<label for="zaharov">Захаров</label>

				<input type="radio" id="chernashova" name="therapist" value="chernashova">
				<label for="chernashova">Чернышева</label>
			</div>
		</div>
		<div class="main__sms checkbox">
			<input id="sms" type="checkbox" value="dont-sent-sms">
			<label for="sms"> Не отправлять СМС</label>
		</div>
	</fieldset>
</template>

<script>
import {required, minLength, maxLength,alpha, numeric} from 'vuelidate/lib/validators'

export default {
	name: "Main",
	data() {
		return {
			showTherapist: false,
			showClientGroup: false,

			surname: '',
			name: '',
			middleName: '',
			birthday: '',
			phone: 7,
			clientGroup: {vip: false, problem: false, oms: false}
		}
	},
	props: {
		send: {
			type: Boolean,
			default: false
		},
	},
	validations: {
		surname: {
			required,
			alpha: val => /^[а-яё]*$/i.test(val),
			minLength: minLength(3)
		},
		name : { required, alpha: val => /^[а-яё]*$/i.test(val), minLength: minLength(3) },
		middleName : { required, alpha: val => /^[а-яё]*$/i.test(val), minLength: minLength(3) },
		birthday: {
			required,
		},
		phone: {
			required,
			numeric,
			minLength: minLength(11),
			maxLength: maxLength(11)
		},
		clientGroup: {
			required,
			vip: {required},
			problem: {required},
			oms: {required}
		}
	}
}
</script>

<style lang="sass">

.main
	display: flex
	flex-direction: column
	border: 3px solid #768eed

	div:nth-child(n + 1):not(:last-child)
		margin-bottom: 20px

</style>