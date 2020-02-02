export const state = () => ({
	formData: {
    surname: {
      label: 'Фамилия',
      value: ''
    },
    name: {
      label: 'Имя',
      value: ''
    },
    phone: {
      label: 'Телефон',
      value: ''
    }
	}
})

export const mutations = {
  changeVal(state,payload) {
    state.formData[payload.name].value = payload.value;
  }
}

export const actions = {
  changeVal(store,payload){
    store.commit('changeVal', payload);
  }
}
