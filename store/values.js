export const state = () => ({
	strValues: []
})

export const getters = {
  numValues({strValues}){
    return strValues.filter(val => val!=="")
  },
  
  sum(state,getters){
    return getters.numValues.reduce((sum,val) => {
      let numVal;
      if(/\//.test(val)){
        let split = val.split('/');
        numVal = parseFloat(split[0]) / parseFloat(split[1]);
      }
      else{
        numVal = parseFloat(val);
      }
      return sum + numVal;
    }, 0);
  }
}
 
export const mutations = {
  addField({strValues}) {
    strValues.push("");
  },
  changeVal({strValues}, {newVal,i}) {
    strValues.splice(i, 1, newVal);
  }
}

export const actions = {
  addVal(store, payload) {
    if(store.state.strValues.length-1 === payload.i){
      store.commit('addField');
      store.commit('changeVal', payload);
    }
    else{
      store.commit('changeVal', payload);
    }
  },
  addStartField(store){
    store.commit('addField');
  }
}