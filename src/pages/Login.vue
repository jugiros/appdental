<template>
  <v-app id="login">

    <v-snackbar
            :timeout="3000"
            top
            right
            :color="snackbar.color"
            v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>

    <v-container fluid grid-list-0>   <!--contenedor global-->
      <v-layout row wrap>

        <!--contenedor del carrusel y footer-->
        <v-flex v-show="$vuetify.breakpoint.lg">  <!--permite que el footer y contenedor solo se muestren para dispositivos grandes-->

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
        </v-flex>

        <!--caja de login-->
        <v-flex d-flex xs12 sm6 md3 lg4 fill-height child-flex>
          <v-layout align-center justify-end>
              <v-card class="elevation-5 pa-3" color="white" height="100%" style="overflow-y: scroll; max-height: 570px; width: 100%;">
                <v-card-text>
                  <div class="layout column align-center py-2">
                    <img src="/static/r.png" alt="Vue Material Admin" width="164" height="164">
                    <h1 class="flex my-4 black--text font-weight-black font-italic display-1">DENTAL PRIME</h1>
                  </div>
                  <v-form v-show="register" ref="formLogin" v-model="validLogin" lazy-validation>
                    <v-text-field :rules="[rules.required]" append-icon="person" name="login" label="Usuario" type="text" v-model="model.username"></v-text-field>
                    <v-text-field :rules="[rules.required, rules.min]" append-icon="lock" name="password" label="Contraseña" id="password" type="password" v-model="model.password"></v-text-field>
                    <a @click="changeRegister(false)">Registrarse</a>
                  </v-form>
                  <v-form v-show="!register" ref="formRegister" v-model="validRegister" lazy-validation>
                    <v-text-field :rules="[rules.required]" append-icon="person" name="login" label="Usuario" type="text" v-model="modelRegister.username"></v-text-field>
                    <v-text-field :rules="emailRules" append-icon="email" name="login" label="Correo" type="text" v-model="modelRegister.email"></v-text-field>
                    <v-text-field :rules="[rules.required]" append-icon="create" name="login" label="Nombres" type="text" v-model="modelRegister.firstName"></v-text-field>
                    <v-text-field :rules="[rules.required]" append-icon="create" name="login" label="Apellidos" type="text" v-model="modelRegister.lastName"></v-text-field>
                    <v-text-field :rules="[rules.required, rules.min]" append-icon="vpn_key" name="password" label="Contraseña" id="password" type="password" v-model="modelRegister.password"></v-text-field>
                    <v-text-field :rules="[rules.required, rules.min]" append-icon="lock" name="password" label="Confirmar Contraseña" id="password" type="password" v-model="passwordConfirm"></v-text-field>
                    <a @click="changeRegister(true)">Iniciar Sesión</a>
                  </v-form>
                </v-card-text>
                <v-card-actions v-show="register">
                  <!--<div class="layout align-center py-4">-->
                    <!--<v-btn icon @click="onSigninFacebook">-->
                      <!--<v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>-->
                    <!--</v-btn>-->
                    <!--<v-btn icon @click="onSigninGoogle">-->
                      <!--<v-icon color="red">fa fa-google fa-lg</v-icon>-->
                    <!--</v-btn>-->
                    <!--<v-btn icon @click="onSigninTwitter">-->
                      <!--<v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>-->
                    <!--</v-btn>-->
                  <!--</div>-->
                  <v-spacer></v-spacer>
                  <v-btn color="light-blue darken-3" @click="login" :loading="loading" dark >Iniciar Sesión</v-btn>
                </v-card-actions>
                <v-card-actions v-show="!register">
                  <v-spacer></v-spacer>
                  <v-btn color="light-blue darken-3" @click="registrar" :loading="loading" dark >Registrarse</v-btn>
                </v-card-actions>
              </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import $ from 'jquery';
export default {
  data: () => ({
    loading: false,
    validLogin: true,
    validRegister: true,
    model: {
      grant_type: 'password',
      username: '',
      password: ''
    },
    modelRegister: {
      id: null,
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      persona: {
        id: null
      }
    },
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
    rules: {
      required: value => !!value || 'Requerido.',
      min: v => v.length >= 6 || 'Mínimo 6 Caracteres.',
      emailMatch: () => ('The email and password you entered don\'t match')
    },
    emailRules: [
      v => !!v || 'Email Requerido.',
      v => /.+@.+.+/.test(v) || 'Email invalido.'
    ],
    passwordConfirm: '',
    register: true,
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
        src: 'https://www.graphenanodental.com/uploads/2018/09/video-graphenano-dental.jpg'
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
  created () {
    if (!localStorage.getItem('userToken')) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    changeRegister(ban) {
      this.register = ban;
    },
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
      if (this.$refs.formLogin.validate()) {
        this.loading = true;
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA='
        };
        this.$axios.post(this.$ws.login.login, $.param(this.model), {headers}).then((res) => {
          console.log('RESPONSE RECEIVED: ', JSON.stringify(res));
          console.log('RESPUESTA: ', res);
          if (res) {
            localStorage.setItem('userToken', res['data']['access_token']);
            this.$router.push('/dashboard');
          }
          this.loading = false;
        }).catch(error => {
          this.snackbar = {
            show: true,
            color: 'red',
            text: 'Credenciales Incorrectas.'
          };
          this.loading = false;
        });
      };
    },
    registrar () {
      if (this.$refs.formRegister.validate()) {
        if (this.passwordConfirm == this.modelRegister.password) {
          this.loading = true;
          const headers = {
            'Content-Type': 'application/json'
          };
          this.$axios.post(this.$ws.login.register, this.modelRegister, {headers}).then((res) => {
            console.log('RESPONSE RECEIVED: ', JSON.stringify(res));
            console.log('RESPUESTA: ', res);
            if (res) {
              this.snackbar = {
                show: true,
                color: 'green',
                text: 'Registro Realizado de manera Correcta.'
              };
            }
            this.loading = false;
          }).catch(error => {
            this.snackbar = {
              show: true,
              color: 'red',
              text: 'El Usuario Ingresado ya Existe.'
            };
            this.loading = false;
          });
        } else {
          this.snackbar = {
            show: true,
            color: 'red',
            text: 'La contraseña y so confirmación deben coincidir.'
          };
        }
      }
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
