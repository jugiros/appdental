<template>
  <div id="citas">
    <v-container grid-list-xl="" fluid="">
      <v-layout row="" wrap="">
        <form style="width: 100%;">
          <v-layout row="" wrap="">
            <v-flex sm3="sm3">
              <v-text-field prepend-icon="how_to_reg" v-model="name" label="Código" required=""></v-text-field>
            </v-flex>
            <v-flex sm3="sm3">
              <v-text-field prepend-icon="how_to_reg" v-model="name" label="Cedula" required=""></v-text-field>
            </v-flex>
            <v-flex sm3="sm3">
              <v-text-field prepend-icon="assignment_ind" v-model="email" label="Nombres" required=""></v-text-field>
            </v-flex>
            <v-flex sm3="sm3">
              <v-text-field prepend-icon="assignment_ind" v-model="email" label="Apellidos" required=""></v-text-field>
            </v-flex>
            <v-flex sm4="sm4">
              <v-menu ref="menu" :close-on-content-click="false" v-model="menuRegistro" :nudge-right="40" :return-value.sync="date" lazy="" transition="scale-transition" offset-y="" full-width="" min-width="290px">
                <v-text-field slot="activator" v-model="dateRegister" label="Fecha de Registro" prepend-icon="event" readonly=""></v-text-field>
                <v-date-picker v-model="date" no-title="" scrollable="">
                  <v-spacer></v-spacer>
                  <v-btn flat="" color="primary" @click="menu = false">Cancelar</v-btn>
                  <v-btn flat="" color="red" @click="$refs.menu.save(date)">Guardar</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex sm4="sm4">
              <v-menu ref="menu" :close-on-content-click="false" v-model="menuNacimiento" :nudge-right="40" :return-value.sync="date" lazy="" transition="scale-transition" offset-y="" full-width="" min-width="290px">
                <v-text-field slot="activator" v-model="dateRegister" label="Fecha de Nacimiento" prepend-icon="event" readonly=""></v-text-field>
                <v-date-picker v-model="date" no-title="" scrollable="">
                  <v-spacer></v-spacer>
                  <v-btn flat="" color="primary" @click="menu = false">Cancelar</v-btn>
                  <v-btn flat="" color="red" @click="$refs.menu.save(date)">Guardar</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex sm2="sm2">
              <v-select prepend-icon="account_balance" v-model="select" label="País" required=""></v-select>
            </v-flex>
            <v-flex sm2="sm2">
              <v-select prepend-icon="location_city" v-model="select" label="Ciudad" required=""></v-select>
            </v-flex>
            <v-flex sm4="sm4">
              <v-text-field prepend-icon="phone_android" v-model="email" label="Celular" required=""></v-text-field>
            </v-flex>
            <v-flex sm4="sm4">
              <v-text-field prepend-icon="phone" v-model="email" label="Teléfono" required=""></v-text-field>
            </v-flex>
            <v-flex sm4="sm4">
              <v-text-field prepend-icon="settings_phone" v-model="email" label="Fax" required=""></v-text-field>
            </v-flex>
            <v-flex md12="md12">
              <v-btn @click="submit" color="primary" flat="flat">GUARDAR</v-btn>
              <v-btn @click="clear" color="red" flat="flat">CANCELAR</v-btn>
            </v-flex>
            <v-flex md12="md12">
              <v-toolbar class="elevation-1" flat="" color="primary">
                <v-toolbar-title>Información del Paciente</v-toolbar-title>
              </v-toolbar>
              <v-data-table
                      v-model="selected"
                      :headers="headers"
                      :items="desserts"
                      :pagination.sync="pagination"
                      select-all
                      item-key="name"
                      class="elevation-1"
              >
                <template slot="headers" slot-scope="props">
                  <tr>
                    <th>
                      <v-checkbox
                              :input-value="props.all"
                              :indeterminate="props.indeterminate"
                              primary
                              hide-details
                              @click.native="toggleAll"
                      ></v-checkbox>
                    </th>
                    <th
                            v-for="header in props.headers"
                            :key="header.text"
                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                            @click="changeSort(header.value)"
                    >
                      <v-icon small>arrow_upward</v-icon>
                      {{ header.text }}
                    </th>
                  </tr>
                </template>
                <template slot="items" slot-scope="props">
                  <tr :active="props.selected" @click="props.selected = !props.selected">
                    <td>
                      <v-checkbox
                              :input-value="props.selected"
                              primary
                              hide-details
                      ></v-checkbox>
                    </td>
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      dateRegister: null,
      menuRegistro: false,
      menuNacimiento: false,
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      },

      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]

    }),

    mounted () {
      this.$validator.localize('en', this.dictionary);
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = '';
        this.email = '';
        this.select = null;
        this.checkbox = null;
        this.$validator.reset()
      },

      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  };
</script>
