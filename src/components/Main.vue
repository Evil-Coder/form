<template>
	<fieldset class="main-fields">
		<legend>Основные данные</legend>
		<label> Фамилия
			<input type="text">
		</label>
		<label> Имя
			<input type="text">
		</label>
		<label> Отчество
			<input type="text">
		</label>
		<label> Дата рождения
			<input type="text">
		</label>
		<label> Номер телефона
			<input type="tel">
		</label>
		<label> Пол
			<input type="radio" name="genre" value="male">
			<input type="radio" name="genre" value="female">
		</label>
<!--TODO Сделать выбор нескольких вариантов без зажатий клавиши-->
		<label> Группа клиентов
			<select multiple>
				<option name="client-group" value="vip">VIP</option>
				<option name="client-group" value="problem">Проблемные</option>
				<option name="client-group" value="oms">ОМС</option>
			</select>
		</label>
		<label> Лечащий врач
			<select name="therapist">
				<option>Иванов</option>
				<option>Захаров</option>
				<option>Чернышева</option>
			</select>
		</label>
		<label> Не отправлять СМС
			<input type="checkbox">
		</label>
	</fieldset>
</template>

<script>
export default {
	name: "Main",

}
</script>

<style lang="sass">
@import url(~@/assets/fields.sass)
@import url(~@/assets/radio.sass)
@import url(~@/assets/checkbox.sass)

.main-fields
	display: flex
	flex-direction: column
	justify-content: space-around
	height: 80vh

</style>