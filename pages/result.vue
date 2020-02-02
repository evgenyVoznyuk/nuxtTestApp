<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Поле</th>
        <th class="text-left">Результат</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ 'Сумма' }}</td>
        <td><sumres/></td>
      </tr>
      <tr v-for="(res, name) in resData" :key="name">
        <td>{{ res.label }}</td>
        <td>{{ res.value }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import { mapState } from 'vuex';
import Sumres from '~/components/sumres'

export default {
  components: {
		Sumres
  },
  
  middleware: ['result'],

  computed: {
    ...mapState({
      resData: state => state.user.formData
    })
	}
}
</script>