<template>
  <v-flex xs12 sm6 md5 lg4>
    <v-form ref="userForm">
      <v-text-field
        name="surname"
        key="surname"
        :value="formData.surname.value"
        :label="formData.surname.label"
        outlined
        :rules="[rules.required, rules.surname]"
        autocomplete="off"
        @change.native="change($event.target)"
        v-if="!isSurname"
      ></v-text-field> 
      <v-text-field
        name="name"
        key="name"
        :value="formData.name.value"
        :label="formData.name.label"
        outlined
        :rules="[rules.required, rules.name]"
        autocomplete="off"
        @change.native="change($event.target)"
        v-if="isSurname && !isName"
      ></v-text-field>
      <v-row justify="center">
        <v-dialog v-model="isName" persistent max-width="400px">
          <v-card>
            <v-card-actions>
              <v-text-field
                name="phone"
                key="phone"
                ref="phone"
                :value="formData.phone.value"
                :label="formData.phone.label"
                outlined
                :rules="[rules.required, rules.phone]"
                autocomplete="off"
              ></v-text-field>
            </v-card-actions>
            <v-btn 
              color="blue darken-1" 
              text 
              type="submit"
              @click.prevent="submit"
            >Закончить</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </v-form>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  middleware: ['user'],
    
  data: () => ({
    rules: {
      required: v => !!v || 'Введите данные.',
      surname: v => /^[аА-яЯёЁ]{2,30}|[aA-zZ]{2,30}$/.test(v) || 'От 2 до 30 букв',
      name: v => /^[аА-яЯёЁ]{2,30}|[aA-zZ]{2,30}$/.test(v) || 'От 2 до 30 букв',
      phone: v => /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(v) || 'От 7 цифр',
    }
  }),

  computed: {
    ...mapState({
      formData: state => state.user.formData
    }),
    isSurname(){
      return this.formData.surname.value !== ""
    },
    isName(){
      return this.formData.name.value !== ""
    }
	},

  methods: {
    ...mapActions({
      changeVal: 'user/changeVal'
    }),
    submit(){
      if(this.$refs.userForm.validate()){
        let item = this.$refs.phone
        this.changeVal({
          name: item.$attrs.name,
          value: item.lazyValue
        });
        this.$router.push('/result');
      }
    },
    change(val){
      if(this.$refs.userForm.validate()){
        this.changeVal(val);
      }
    }
  }
}
</script>
