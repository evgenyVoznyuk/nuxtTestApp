<template>
  <v-flex xs12 sm6 md5 lg4>
    <v-form ref="valForm" @submit.prevent>
      <v-text-field
        v-for="(item,i) in values"
        :key=i
        :value="item"
        placeholder="Целое число или дробь"
        outlined
        :rules="[validateVal]"
        autofocus
        autocomplete="off"
        @change.native="addfield($event.target.value, i)" 
      ></v-text-field> 
    </v-form>
    <sumres v-if="hasSum" my-5/>
    <v-btn 
      color="blue"
      v-if="hasSum"
      nuxt
      to="/user"
    >
      Далее
    </v-btn>
  </v-flex>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Sumres from '~/components/sumres'

export default {
  components: {
		Sumres
  },
    
  data: () => ({
    pattern: /^[1-9]\d*(\/[1-9]\d*)?$/
  }),

  computed: {
    ...mapState({
      values: state => state.values.strValues
    }),
    ...mapGetters({
      numValues: 'values/numValues'
    }),
    hasSum(){
      return this.numValues.length >= 2
    }
	},

  methods: {
    ...mapActions({
      addVal: 'values/addVal',
      addStartField: 'values/addStartField'
    }),
    addfield(newVal, i) {
      if (this.values.length-1 === i) {
        if (this.$refs.valForm.validate()) {
          this.addVal({newVal, i});
        }
      }
      else if(this.pattern.test(newVal.trim())){
        this.$refs.valForm.resetValidation();
        this.addVal({newVal, i});
      }  
    },
    validateVal(v){
      if(!(!!v.trim())){
        return 'Введите данные'
      } else if(!this.pattern.test(v.trim())){
        return 'Необходимо целое число больше нуля или дробь'
      } else {
        return true
      }
    }
  },
  mounted(){
    this.addStartField();
  }
}
</script>

<style scoped>
  .v-btn{
    margin-top: 24px;
  }
</style>
