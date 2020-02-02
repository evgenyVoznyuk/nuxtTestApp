export default function({store, redirect}){
	if(!store.state.user.formData.phone.value){
		redirect('/?message=noSum_noUser')
	}
}