<template>
  <v-app id="login">

    <v-container fluid grid-list-0>   <!--contenedor global-->
      <v-layout row wrap>

        <!--contenedir del carrusel y footer-->
        <v-flex v-show="$vuetify.breakpoint.lg">
          <v-layout row wrap>

            <!--carrusel-->
            <v-flex d-flex xs1 sm1 md8 lg12>
              <v-carousel class="elevation-5" hide-delimiters hidden-md-and-down>
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
              </v-carousel>
            </v-flex>

            <!--footer-->
            <v-flex d-flex xs1 sm1 md8 lg12 hidden-xs-only>
              <v-footer class="elevation-5" height="auto" color="primary lighten-1">
                  <!--v-layout justify-center row wrap-->
                    <!--v-btn v-for="link in links" :key="link" color="white" flat round>
                      {{ link }}
                    </v-btn-->
                    <v-flex light-blue darken-3 py-4 text-xs-center white--text font-weight-black >
                      &copy;2019 — <strong>DENTAL PRIME</strong>
                    </v-flex>
                  <!--/v-layout-->
                </v-footer>
            </v-flex>
          </v-layout>
        </v-flex>

        <!--caja de login-->
        <v-flex d-flex xs12 sm6 md3 lg4 fill-height child-flex>
          <v-layout align-center justify-end>
              <v-card class="elevation-5 pa-3" color="white" height="100%">
                <v-card-text>
                  <div class="layout column align-center py-2">
                    <img src="/static/q.png" alt="Vue Material Admin" width="250" height="164">
                    <h1 class="flex my-4 black--text font-weight-black font-italic display-1">DENTAL PRIME</h1>
                  </div>
                  <v-form>
                    <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="model.username"></v-text-field>
                    <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="model.password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <div class="layout align-center py-4">
                    <v-btn icon @click="onSigninFacebook">
                      <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                    </v-btn>
                    <v-btn icon @click="onSigninGoogle">
                      <v-icon color="red">fa fa-google fa-lg</v-icon>
                    </v-btn>
                    <v-btn icon @click="onSigninTwitter">
                      <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                    </v-btn>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn color="light-blue darken-3" @click="login" :loading="loading" dark >Iniciar Sesión</v-btn>                </v-card-actions>
              </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: 'admin@isockde.com',
      password: 'password'
    },
    items: [
      {
        src: 'https://www.iais.org/wp-content/uploads/2018/10/New-State-Of-The-Art-In-Den.jpg'
      },
      {
        src: 'https://www.dentistry.co.uk/app/uploads/2017/08/Digital_349400798-e1503489438244-1024x546.jpg'
      },
      {
        src: 'https://www.imagetext.co.nz/wp-content/uploads/2016/07/Bring-a-little-variety-to-your-office-computers_708_6039572_0_14105000_1000.jpg'
      },
      {
        src: 'https://www.oraleye.com/img/sections/slider/dentist.jpg'
      }
    ]
    /* ,links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ] */
  }),
  methods: {
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle');
    },
    onSigninFacebook () {
      this.$store.dispatch('signUserInFacebook');
    },
    onSigninTwitter () {
      this.$store.dispatch('signUserInTwitter');
    },
    login () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 1000);
    }
  }
};

</script>

<style scoped lang="css">
  #login {
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>
