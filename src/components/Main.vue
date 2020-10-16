<template>
	<fieldset class="main">
		<legend class="main__heading">Основные данные</legend>
		<div class="main__surname field">
			<input type="text"  id="surname" class="field" required>
			<label for="surname">Фамилия</label>
		</div>
		<div class="main__name field">
			<input type="text" id="name" required>
			<label for="name"> Имя</label>
		</div>
		<div class="main__middle-name field">
			<input type="text" id="middle-name" required>
			<label for="middle-name"> Отчество</label>
		</div>
		<div class="main__birthday field">
			<input type="number" id="birthday" required>
			<label for="birthday"> Дата рождения</label>
		</div>
		<div class="main__phone field">
			<input type="tel" id="phone" required>
			<label for="phone"> Номер телефона</label>
		</div>
		<div class="main__gender radio">
			<input type="radio" id="male" name="gender" value="male">
			<label for="male">Мужчина</label>

			<input type="radio" id="female" name="gender" value="female">
			<label for="female">Женщина</label>
		</div>
		<div class="main__client-group select" :class="{'select_show': showClientGroup}" @click="showClientGroup = !showClientGroup"> Группа клиентов
			<div class="main__client-group-container checkbox select__container">
				<input type="checkbox" id="vip" name="client-group" value="vip">
				<label for="vip">VIP</label>

				<input type="checkbox" id="problem" name="client-group" value="problem">
				<label for="problem">Проблемные</label>

				<input type="checkbox" id="oms" name="client-group" value="oms">
				<label for="oms">ОМС</label>
			</div>
		</div>
		<div class="main__therapist select" :class="{'select_show': showTherapist}" @click="showTherapist = !showTherapist" > Лечащий врач
			<div class="main__therapist-container radio select__container">
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
export default {
	name: "Main",
	data() {
		return {
			showTherapist: false,
			showClientGroup: false,
		}
	},
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