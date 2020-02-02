export default function({store, redirect}){
	if(store.state.values.strValues.length < 3){
		redirect('/?message=noSum')
	}
}