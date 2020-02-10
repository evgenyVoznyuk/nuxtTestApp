export const state = () => ({
	formData: [
    {
      name: 'surname',
      label: 'Фамилия',
      value: ''
    },
    {
      name: 'name',
      label: 'Имя',
      value: ''
    },
    {
      name: 'phone',
      label: 'Телефон',
      value: ''
    }
	]
})

export const getters = {
  getFieldInd: ({formData}) => (name) => formData.findIndex(field => field.name === name),
  getFieldByName: ({formData},{getFieldInd}) => (name) => formData[getFieldInd(name)],
}

export const mutations = {
  changeValue(state,{ind, value}) {
    state.formData[ind].value = value;
  }
}

export const actions = {
  changeVal(store,{name, value}){
    let ind = store.getters.getFieldInd(name);
    store.commit('changeValue', {ind, value});
  }
}
