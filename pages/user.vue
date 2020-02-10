<template>
  <v-flex xs12 sm6 md5 lg4>
    <v-form ref="userForm" @submit.prevent>
      <userfield
        name="surname"
        @change.native="showName"
        v-if="!hasSurname"
      ></userfield> 
      <userfield
        name="name"
        @change.native="showPhone"
        v-if="hasSurname && !hasName"
      ></userfield>
      <v-row justify="center">
        <v-dialog v-model="hasName" persistent max-width="400px">
          <v-card>
            <v-card-actions>
              <userfield
                name="phone"
              ></userfield>
            </v-card-actions>
            <v-card-actions>
              <v-btn 
                color="blue"
                nuxt
                to="/result"
              >Закончить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-form>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';
import Userfield from '~/components/userfield';

export default {
  //middleware: ['user'],

  components: {
		Userfield
  },
    
  data: () => ({
    surnameDone: false,
    nameDone: false
  }),

  computed: {
    ...mapGetters({
      getField: 'user/getFieldByName'
    }),
    hasSurname(){
      return this.surnameDone
    },
    hasName(){
      return this.nameDone
    }
	},

  methods: {
    showName(){
      this.surnameDone = true;
    },
    showPhone(){
      this.nameDone = true;
    }
  }
}
</script>
