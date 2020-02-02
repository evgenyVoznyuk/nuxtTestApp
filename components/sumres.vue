<template>
  <div>
    {{ allValStr }} = {{ sum }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data: () => ({}),

  computed: {
		...mapState({
      values: state => state.values.strValues
    }),
    ...mapGetters({
      numValues: 'values/numValues',
      sum: 'values/sum'
    }),

    allValStr(){
			return this.numValues.join(' + ');
    } 
	}
}
</script>
