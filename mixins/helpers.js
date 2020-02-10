// use mixins!?

export default {
	computed: {
		mapFields(){
			return function({path, arr, action}){
				let obj = {};
				let fields = this.$store.state[path][arr];
				fields.forEach(function(field){
					obj[field.name] = {
						get() {
							return this.$store.state[path][arr][field].value;
						},
						set(value) {
							this.$store.state[path].dispatch(action, {
							name: [field.name],
							value 
							});
						}
					};
				});
				return obj;
			}
		}
	}
}