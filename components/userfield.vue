<template>
  <v-text-field
    :name="name"
    :key="name"
    :label="field.label"
    outlined
    v-model="fieldVal"
  ></v-text-field>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  props: {
    name: String
  },

  computed: {
    ...mapGetters({
      getField: 'user/getFieldByName'
    }),
    field(){
      return this.getField(this.name)
    },
    fieldVal: {
      get () {
        return this.getField(this.name).value;
      },
      set (value) {
        this.$store.dispatch('user/changeVal', {
          name: this.name,
          value
        });
      }
    }
  }
}
</script>