<style>

.posicion18{
  position : absolute;
  top : 90px;
  left : 5px;

}

.posicion17{
  position : absolute;
  top : 90px;
  left : 40px;
}

.posicion16{
  position : absolute;
  top : 90px;
  left : 80px;
}

.posicion15{
  position : absolute;
  top : 90px;
  left : 120px;
}

.posicion14{
  position : absolute;
  top : 90px;
  left : 155px;
}

.posicion13{
  position : absolute;
  top : 90px;
  left : 190px;
}

.posicion12{
  position : absolute;
  top : 90px;
  left : 230px;
}

.posicion11{
  position : absolute;
  top : 90px;
  left : 270px;
}

.posicion21{
  position : absolute;
  top : 90px;
  left : 315px;
}

.posicion22{
  position : absolute;
  top : 90px;
  left : 355px;
}

.posicion23{
   position : absolute;
   top : 90px;
   left : 395px;
 }

.posicion24{
  position : absolute;
  top : 90px;
  left : 430px;
}

.posicion25{
  position : absolute;
  top : 90px;
  left : 465px;
}

.posicion26{
  position : absolute;
  top : 90px;
  left : 505px;
}

.posicion27{
  position : absolute;
  top : 90px;
  left : 545px;
}

.posicion28{
  position : absolute;
  top : 90px;
  left : 585px;
}

.posicion48{
  position : absolute;
  top : 330px;
  left : 5px;
}

.posicion47{
  position : absolute;
  top : 330px;
  left : 40px;
}

.posicion46{
  position : absolute;
  top : 330px;
  left : 80px;
}

.posicion45{
  position : absolute;
  top : 330px;
  left : 120px;
}

.posicion44{
  position : absolute;
  top : 330px;
  left : 155px;
}

.posicion43{
  position : absolute;
  top : 330px;
  left : 190px;
}

.posicion42{
  position : absolute;
  top : 330px;
  left : 230px;
}

.posicion41{
  position : absolute;
  top : 330px;
  left : 270px;
}

.posicion31{
  position : absolute;
  top : 330px;
  left : 315px;
}

.posicion32{
  position : absolute;
  top : 330px;
  left : 355px;
}

.posicion33{
  position : absolute;
  top : 330px;
  left : 395px;
}

.posicion34{
  position : absolute;
  top : 330px;
  left : 430px;
}

.posicion35{
  position : absolute;
  top : 330px;
  left : 465px;
}

.posicion36{
  position : absolute;
  top : 330px;
  left : 505px;
}

.posicion37{
  position : absolute;
  top : 330px;
  left : 545px;
}

.posicion38{
  position : absolute;
  top : 330px;
  left : 585px;
}


/*.myborder {
 border : 2px solid #ff2929;
}
.noborder {
  border : 2px solid #fff;
}*/

</style>
<template>
  <div id="pageDashboard">
    <!--{{$data}}-->
    <v-container grid-list-xl fluid>    <!--separacion entre las cajas de la malla-->
      <v-layout row wrap>

        <!--informacion del paciente-->
        <v-flex lg14 sm14 xs14>
          <v-toolbar flat color="teal lighten-3" class="elevation-1">
            <v-toolbar-title>Información del Paciente</v-toolbar-title>
            <v-dialog v-model="infoDialog" max-width="500px"> <!--comienzo del cuadro de dialogo de edicion-->
              <v-card>
                <v-card-title>
                  <span class="headline">{{ infoTitle }}</span> <!--titulo del cuadro de dialogo de edicion-->
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm8 md8>   <!--se modifica el tamaño de la linea de ingreso de datos-->
                        <v-text-field v-model="editedInfoItem.dato" label="Datos"></v-text-field>   <!--permite editar solo los datos del paciente-->
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" flat @click="closeInfo">Cancelar</v-btn>
                  <v-btn color="blue darken-1" flat @click="saveInfo">Guardar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table :items="info" class="elevation-1" hide-headers> <!--comienzo de datos de tabla-->
            <template slot="items" slot-scope="props" class="py-5">
              <td class="text-lg-left">{{ props.item.categoria }}</td>
              <td class="text-lg-left">{{ props.item.dato }}</td>
              <td class="justify-center layout pl-5">
                <v-icon small class="mx-5" @click="editInfoItem(props.item)">edit</v-icon>
              </td>
            </template>
          </v-data-table>
        </v-flex>

        <!--odontograma-->
        <v-flex lg8 sm12 xs12>
          <v-card color="white" height="490" class="elevation-2">
            <v-card-title primary class="title">Odontograma</v-card-title>

            <!--botones de niño y adulto-->
            <table align="center">
              <td>
                <!--fieldset style="border:1px solid red;padding:5px; margin-bottom:10px; width:50px; height:20px; position:absolute; top:400px; left:250px"></fieldset-->
                <!--a onclick ="javascript:ShowHideOdont('Mayor')" href="#Adulto">Adulto</a-->
                <a @click="displayAdult()" href="#Adulto" style="width:50px; height:20px; position:absolute; top:460px; left:250px">Adulto</a>
              </td>
              <td>
                <!--fieldset style="border:1px solid red;padding:5px; margin-bottom:10px; width:50px; height:20px; position:absolute; top:400px; left:350px"></fieldset-->
                <!--a onclick ="javascript:ShowHideOdont('Menor')" href="#Ninio">Niño</a-->
                <a @click="displayChild()" href="#Ninio" style="width:50px; height:20px; position:absolute; top:460px; left:350px">Niño</a>
              </td>
            </table>

            <!--imagenes y odontograma de dientes de adulto-->
            <v-card-actions v-if="adultOdonto">
              <v-flex xs12 sm12 lg12>

                <!--izquierda primera fila-->
                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:5px" value="18"></v-checkbox>
                <img src="@/images/dentadura-sup-18.png" width="27" height="85" class="posicion18">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:40px" value="17"></v-checkbox>
                <img src="@/images/dentadura-sup-17.png" width="27" height="85" class="posicion17">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:80px" value="16"></v-checkbox>
                <img src="@/images/dentadura-sup-16.png" width="27" height="85" class="posicion16">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:120px" value="15"></v-checkbox>
                <img src="@/images/dentadura-sup-15.png" width="27" height="85" class="posicion15">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:155px" value="14"></v-checkbox>
                <img src="@/images/dentadura-sup-14.png" width="27" height="85" class="posicion14">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:190px" value="13"></v-checkbox>
                <img src="@/images/dentadura-sup-13.png" width="27" height="85" class="posicion13">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:230px" value="12"></v-checkbox>
                <img src="@/images/dentadura-sup-12.png" width="27" height="85" class="posicion12">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:270px" value="11"></v-checkbox>
                <img src="@/images/dentadura-sup-11.png" width="27" height="85" class="posicion11">


                <!--derecha primera fila-->
                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:315px" value="21"></v-checkbox>
                <img src="@/images/dentadura-sup-21.png" width="27" height="85" class="posicion21">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:355px" value="22"></v-checkbox>
                <img src="@/images/dentadura-sup-22.png" width="27" height="85" class="posicion22">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:395px" value="23"></v-checkbox>
                <img src="@/images/dentadura-sup-23.png" width="27" height="85" class="posicion23">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:430px" value="24"></v-checkbox>
                <img src="@/images/dentadura-sup-24.png" width="27" height="85" class="posicion24">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:465px" value="25"></v-checkbox>
                <img src="@/images/dentadura-sup-25.png" width="27" height="85" class="posicion25">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:505px" value="26"></v-checkbox>
                <img src="@/images/dentadura-sup-26.png" width="27" height="85" class="posicion26">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:545px" value="27"></v-checkbox>
                <img src="@/images/dentadura-sup-27.png" width="27" height="85" class="posicion27">

                <v-checkbox v-model="seleccionAdultSup" style="position:absolute; top:40px; left:585px" value="28"></v-checkbox>
                <img src="@/images/dentadura-sup-28.png" width="27" height="85" class="posicion28">

                <!--izquierda segunda fila-->
                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:5px" value="48"></v-checkbox>
                <img src="@/images/dentadura-inf-48.png" width="27" height="85" class="posicion48">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:40px" value="47"></v-checkbox>
                <img src="@/images/dentadura-inf-47.png" width="27" height="85" class="posicion47">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:80px" value="46"></v-checkbox>
                <img src="@/images/dentadura-inf-46.png" width="27" height="85" class="posicion46">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:120px" value="45"></v-checkbox>
                <img src="@/images/dentadura-inf-45.png" width="27" height="85" class="posicion45">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:155px" value="44"></v-checkbox>
                <img src="@/images/dentadura-inf-44.png" width="27" height="85" class="posicion44">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:190px" value="43"></v-checkbox>
                <img src="@/images/dentadura-inf-43.png" width="27" height="85" class="posicion43">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:230px" value="42"></v-checkbox>
                <img src="@/images/dentadura-inf-42.png" width="27" height="85" class="posicion42">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:270px" value="41"></v-checkbox>
                <img src="@/images/dentadura-inf-41.png" width="27" height="85" class="posicion41">

                <!--derecha segunda fila-->
                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:315px" value="31"></v-checkbox>
                <img src="@/images/dentadura-inf-31.png" width="27" height="85" class="posicion31">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:355px" value="32"></v-checkbox>
                <img src="@/images/dentadura-inf-32.png" width="27" height="85" class="posicion32">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:395px" value="33"></v-checkbox>
                <img src="@/images/dentadura-inf-33.png" width="27" height="85" class="posicion33">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:430px" value="34"></v-checkbox>
                <img src="@/images/dentadura-inf-34.png" width="27" height="85" class="posicion34">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:465px" value="35"></v-checkbox>
                <img src="@/images/dentadura-inf-35.png" width="27" height="85" class="posicion35">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:505px" value="36"></v-checkbox>
                <img src="@/images/dentadura-inf-36.png" width="27" height="85" class="posicion36">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:545px" value="37"></v-checkbox>
                <img src="@/images/dentadura-inf-37.png" width="27" height="85" class="posicion37">

                <v-checkbox v-model="seleccionAdultInf" style="position:absolute; top:400px; left:585px" value="38"></v-checkbox>
                <img src="@/images/dentadura-inf-38.png" width="27" height="85" class="posicion38">

                <img v-for="n in posTratSup.length" :key="n.value" :class="`posicion${posTratSup[n-1]}`" width="27" height="85" src="@/images/blanc_casero_sup.png" v-if="tratSup">
                <img v-for="m in posTratInf.length" :key="m.value" :class="`posicion${posTratInf[m-1]}`" width="27" height="85" src="@/images/blanc_casero_inf.png" v-if="tratInf">

                <img v-for="n in posTratConsulSup.length" :key="n.value" :class="`posicion${posTratConsulSup[n-1]}`" width="27" height="85" src="@/images/blanc_casero_sup.png" v-if="tratConsulSup">
                <img v-for="m in posTratConsulInf.length" :key="m.value" :class="`posicion${posTratConsulInf[m-1]}`" width="27" height="85" src="@/images/blanc_casero_inf.png" v-if="tratConsulInf">

                <!--li style="position:absolute; top: 170px;">{{ seleccionAdultSup }}</li-->
                <!--li v-if="!seleccionAdultSup.length">ningun elemento</li-->

              </v-flex>
            </v-card-actions>

            <!--izquierda primera fila de poligonos-->
            <svg version="1.1" height="100%" width="100%" v-if="adultOdonto">
              <g transform="scale(1.5)">
                <!--izquierda primera fila-->
                <g id="P18" transform="translate(1,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">18</text>
                </g>
                <g id="P17" transform="translate(25,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">17</text>
                </g>
                <g id="P16" transform="translate(50,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">16</text>
                </g>
                <g id="P15" transform="translate(75,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">15</text>
                </g>
                <g id="P14" transform="translate(100,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">14</text>
                </g>
                <g id="P13" transform="translate(125,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">13</text>
                </g>
                <g id="P12" transform="translate(150,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">12</text>
                </g>
                <g id="P11" transform="translate(175,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">11</text>
                </g>

                <!-- Derecha primera fila -->
                <g id="P21" transform="translate(210,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">21</text>
                </g>
                <g id="P22" transform="translate(235,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">22</text>
                </g>
                <g id="P23" transform="translate(260,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">23</text>
                </g>
                <g id="P24" transform="translate(285,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">24</text>
                </g>
                <g id="P25" transform="translate(310,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">25</text>
                </g>
                <g id="P26" transform="translate(335,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">26</text>
                </g>
                <g id="P27" transform="translate(360,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">27</text>
                </g>
                <g id="P28" transform="translate(385,60)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">28</text>
                </g>

                <!-- Izquierda segunda fila -->
                <g id="P48" transform="translate(1,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">48</text>
                </g>
                <g id="P47" transform="translate(25,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">47</text>
                </g>
                <g id="P46" transform="translate(50,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">46</text>
                </g>
                <g id="P45" transform="translate(75,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">45</text>
                </g>
                <g id="P44" transform="translate(100,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">44</text>
                </g>
                <g id="P43" transform="translate(125,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">43</text>
                </g>
                <g id="P42" transform="translate(150,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">42</text>
                </g>
                <g id="P41" transform="translate(175,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">41</text>
                </g>

                <!-- Derecha segunda fila -->
                <g id="P31" transform="translate(210,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">31</text>
                </g>
                <g id="P32" transform="translate(235,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">32</text>
                </g>
                <g id="P33" transform="translate(260,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">33</text>
                </g>
                <g id="P34" transform="translate(285,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">34</text>
                </g>
                <g id="P35" transform="translate(310,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">35</text>
                </g>
                <g id="P36" transform="translate(335,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">36</text>
                </g>
                <g id="P37" transform="translate(360,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">37</text>
                </g>
                <g id="P38" transform="translate(385,120)" cursor="pointer">
                  <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                  <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">38</text>
                </g>
              </g>
            </svg>

            <!--dientes de Niño-->
            <!--imagenes de dientes de niño-->
            <v-card-actions v-if="childOdonto">
              <v-flex lg12 sm12 xs12>
                <!--izquierda primera fila-->
                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:115px" value="55"></v-checkbox>
                <img src="@/images/dentadura-sup-55.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px;; left:115px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:155px" value="54"></v-checkbox>
                <img src="@/images/dentadura-sup-54.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:155px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:190px" value="53"></v-checkbox>
                <img src="@/images/dentadura-sup-53.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:190px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:230px" value="52"></v-checkbox>
                <img src="@/images/dentadura-sup-52.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:230px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:265px" value="51"></v-checkbox>
                <img src="@/images/dentadura-sup-51.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:265px">
                <!--derecha primera fila-->
                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:315px" value="61"></v-checkbox>
                <img src="@/images/dentadura-sup-61.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:315px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:355px" value="62"></v-checkbox>
                <img src="@/images/dentadura-sup-62.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:355px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:390px" value="63"></v-checkbox>
                <img src="@/images/dentadura-sup-63.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:390px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:430px" value="64"></v-checkbox>
                <img src="@/images/dentadura-sup-64.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:430px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:40px; left:465px" value="65"></v-checkbox>
                <img src="@/images/dentadura-sup-65.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:90px; left:465px">
                <!--izquierda segunda fila-->
                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:115px" value="85"></v-checkbox>
                <img src="@/images/dentadura-inf-85.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:115px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:155px" value="84"></v-checkbox>
                <img src="@/images/dentadura-inf-84.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:155px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:190px" value="83"></v-checkbox>
                <img src="@/images/dentadura-inf-83.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:190px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:230px" value="82"></v-checkbox>
                <img src="@/images/dentadura-inf-82.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:230px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:265px" value="81"></v-checkbox>
                <img src="@/images/dentadura-inf-81.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:265px">
                <!--derecha segunda fila-->
                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:315px" value="71"></v-checkbox>
                <img src="@/images/dentadura-inf-71.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:315px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:355px" value="72"></v-checkbox>
                <img src="@/images/dentadura-inf-72.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:355px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:390px" value="73"></v-checkbox>
                <img src="@/images/dentadura-inf-73.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:390px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:430px" value="74"></v-checkbox>
                <img src="@/images/dentadura-inf-74.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:430px">

                <v-checkbox v-model="seleccionChild" style="position:absolute; top:400px; left:465px" value="75"></v-checkbox>
                <img src="@/images/dentadura-inf-75.png" alt="Smiley face" width="27" height="85" style="position:absolute; top:330px; left:465px">
              </v-flex>
            </v-card-actions>

            <!--dibujo de odontograma-->
            <svg version="1.1" height="100%" width="100%" v-if="childOdonto">
              <a name = "Ninio">
                <g transform="scale(1.5)">
                  <!-- Izquierda Primera Fila -->
                  <g id="P55" transform="translate(75,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">55</text>
                  </g>
                  <g id="P54" transform="translate(100,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">54</text>
                  </g>
                  <g id="P53" transform="translate(125,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">53</text>
                  </g>
                  <g id="P52" transform="translate(150,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">52</text>
                  </g>
                  <g id="P51" transform="translate(175,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">51</text>
                  </g>

                  <!-- Izquierda segunda fila -->
                  <g id="P85" transform="translate(75,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">85</text>
                  </g>
                  <g id="P84" transform="translate(100,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">84</text>
                  </g>
                  <g id="P83" transform="translate(125,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">83</text>
                  </g>
                  <g id="P82" transform="translate(150,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">82</text>
                  </g>
                  <g id="P81" transform="translate(175,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">81</text>
                  </g>

                  <!-- Derecha primera fila -->
                  <g id="P61" transform="translate(210,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">61</text>
                  </g>
                  <g id="P62" transform="translate(235,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">62</text>
                  </g>
                  <g id="P63" transform="translate(260,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">63</text>
                  </g>
                  <g id="P64" transform="translate(285,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">64</text>
                  </g>
                  <g id="P65" transform="translate(310,60)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">65</text>
                  </g>

                  <!-- Derecha segunda fila -->
                  <g id="P71" transform="translate(210,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">71</text>
                  </g>
                  <g id="P72" transform="translate(235,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">72</text>
                  </g>
                  <g id="P73" transform="translate(260,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">73</text>
                  </g>
                  <g id="P74" transform="translate(285,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">74</text>
                  </g>
                  <g id="P75" transform="translate(310,120)" cursor="pointer">
                    <polygon v-for="diente in poligono" :key="diente.points2" :points="[diente.points2]" :fill="[diente.fill2]" :stroke="[diente.stroke2]" stroke-width="0.5" :id="[diente.id2]" opacity="1"></polygon>
                    <text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">75</text>
                  </g>
                </g>
              </a>
            </svg>
          </v-card>
        </v-flex>

        <!--bucle para pruebas-->
        <!--v-flex xs1>
          <span>hola</span>
          <ul>
            <li v-for="selecciones in seleccionChild">{{ selecciones }}</li>
          </ul>

        </v-flex-->

        <!--cuadro de dialogo de error campo vacio-->
        <v-dialog v-model="errorVacio" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>ERROR</v-card-title>
            <v-card-text>Seleccione primero una pieza</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="errorVacio = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


        <!--cuadro de dialogo de registro financiero-->
        <v-dialog v-model="finanCase" scrollable max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Reporte Financiero</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>

                  <!--ingreso del nombre del doctor que trato al paciente-->
                  <v-flex xs5 sm5 lg5>
                    <v-select :items="['Perez', 'Lopez', 'Zambrano', 'Rodriguez']" label="Doctor*" required></v-select>
                  </v-flex>

                  <!--menu para elegir la fecha-->
                  <v-flex xs6 sm6 lg6>
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                    >
                      <template slot="activator">
                        <v-text-field
                          v-model="computedDateFormatted"
                          label="Fecha"
                          hint="Mes/Día/Año"
                          persistent-hint
                          prepend-icon="event"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-flex>

                  <v-flex xs5 sm5 lg5>
                    <v-text-field label="Monto*" prefix="$"></v-text-field>
                  </v-flex>

                  <!--estado del tratamiento-->
                  <v-flex xs4 sm4>
                    <v-select :items="['Pendiente', 'Realizado', 'En curso']" label="Estado*" required></v-select>
                  </v-flex>

                  <!--Observaciones-->
                  <v-flex xs0 sm12>
                    <v-textarea outline name="observa" label="Observaciones" value=""></v-textarea>
                  </v-flex>

                </v-layout>
              </v-container>
              <small class="ml-4">* Indica campo requerido</small>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red accent-1" flat @click="finanCase = false">Cerrar</v-btn>
              <v-btn color="blue darken-1" flat @click="finanCase = false">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


        <!--seccion de tratamientos-->
        <v-flex lg4 sm12 xs12>
          <v-card color="white" height="490" class="elevation-2">
            <v-card-title primary class="title">Tratamientos</v-card-title>
            <v-card-actions>
              <!--iconos de tratamientos ordenados por columnas (3 columnas cada una con 4 elementos)-->
              <v-flex xs3>
                <v-dialog v-model="dialogBlanc" scrollable max-width="600px">
                  <!--Tooltip de blanqueamiento-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#blanc">
                      <img src="@/images/blanqueamiento.png" style="position:relative; height:80px">
                    </a>
                    <span>Blanqueamiento</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamiento de blanqueamiento</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height:500px;">
                      <v-radio-group column v-model="blancGroup">
                        <!--span>Picked: {{ blancGroup }}</span-->
                        <v-radio label="Blanqueamiento dentario casero" value="blanc_case" color="cyan darken-1"></v-radio>
                        <v-radio label="Blanqueamiento dentario en consultorio con laser" value="blanc_denta_consul" color="cyan darken-1"></v-radio>
                        <v-radio label="Carilla de cerámica E-max" value="cari_ceram_emax" color="cyan darken-1"></v-radio>
                        <v-radio label="Carilla directa de Composite" value="cari_compos" color="cyan darken-1"></v-radio>
                        <v-radio label="Carilla directa de composite en diente temporario" value="cari_compos_tempo" color="cyan darken-1"></v-radio>
                        <v-radio label="Provisional para carilla" value="provi_cari" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogBlanc = false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat v-on:click="selectBlanc">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogDiag" scrollable max-width="600px">
                  <!--Tooltip de diagnostico-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#diag">
                      <img src="@/images/diagnostico.png" style="position:relative; height:80px">
                    </a>
                    <span>Diagnóstico</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Diagnóstico</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="diagGroup">
                        <!--span>Picked: {{ diagGroup }}</span-->
                        <v-radio label="Consulta Odontológica" value="consul_odont" color="cyan darken-1"></v-radio>
                        <v-radio label="Diagnóstico y plan de tratamiento para rehabilitación" value="diag_plan_trat_rehabil" color="cyan darken-1"></v-radio>
                        <v-radio label="Profilaxis" value="profil" color="cyan darken-1"></v-radio>
                        <v-radio label="Profilaxis y aplicación de fluor" value="porfil_apli_flu" color="cyan darken-1"></v-radio>
                        <v-radio label="Raspado y alizado por sextante" value="rasp_aliz_sext" color="cyan darken-1"></v-radio>
                        <v-radio label="Remineralización + profilaxis" value="reminer_profil" color="cyan darken-1"></v-radio>
                        <v-radio label="Terapia musculares" value="terap_musc" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogDiag = false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat v-on:click="select">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogImp" scrollable max-width="600px">
                  <!--Tooltip de implante-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#implant">
                      <img src="@/images/implante.png" style="position:relative; height:80px">
                    </a>
                    <span>Implante</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamiento de implante</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="impGroup">
                        <!--span>picked: {{ impGroup }}</span-->
                        <v-radio label="Implante óseo integrado por unidad" value="implan_integr_unid" color="cyan darken-1"></v-radio>
                        <v-radio label="Injero de hueso" value="injer_hues" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis de carga inmediato soportada" value="protes_carg_soport" color="cyan darken-1"></v-radio>
                        .....<v-radio label="Protocolo branemark en carga inmediata para 4 implantes - parte protética" value="branem_carg_4implan" color="cyan darken-1"></v-radio>
                        .....<v-radio label="Protocolo branemark para 4 implantes - parte quirúrgica" value="branem_4implan_quirur" color="cyan darken-1"></v-radio>
                        .....<v-radio label="Protocolo branemark para 5 implantes - protético + quirúrgico" value="branem_5implan" color="cyan darken-1"></v-radio>
                        .....<v-radio label="Regeneración ósea guaida con aloinjerto y malla de titanio" value="rege_ose_mall_titan" color="cyan darken-1"></v-radio>
                        <v-radio label="Remoción de implante dentário no óseo integrado" value="remo_implan_no_ose" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogImp = false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat v-on:click="select">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogRay" scrollable max-width="600px">
                  <!--Tooltip de rayos X-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#ray">
                      <img src="@/images/rayosx.png" style="position:relative; height:80px">
                    </a>
                    <span>Rayos X</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Rayos X</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="rayGroup">
                        <!--span>picked: {{ rayGroup }}</span-->
                        <v-radio label="Radiografía coronal - bite-wing" value="radio_bite_wing" color="cyan darken-1"></v-radio>
                        <v-radio label="Radiografía oclusal" value="radio_oclu" color="cyan darken-1"></v-radio>
                        <v-radio label="Radiografía periapical digital" value="radio_peria" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogRay = false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogRay = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex >

              <v-flex xs3>
                <v-dialog v-model="dialogCirug" scrollable max-width="600px">
                  <!--Tooltip de cirugia-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#cirug">
                      <img src="@/images/cirugia.png" style="position:relative; height:80px">
                    </a>
                    <span>Cirugía</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Cirugía</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="cirugGroup">
                        <!--span>picked: {{ cirugGroup }}</span-->
                        <v-radio label="Apisectomía unirradicular sin obturacion retrograda" value="apisec_uni_sin_obtura" color="cyan darken-1"></v-radio>
                        <v-radio label="Apisectomía birradicular con obturacion retrograda" value="apisec_bi_con_obtura" color="cyan darken-1"></v-radio>
                        <v-radio label="Apisectomía birradicular sin obturacion retrograda" value="apisec_bi_sin_obtura" color="cyan darken-1"></v-radio>
                        <v-radio label="Apisectomía unirradicular con obturacion retrograda" value="apisec_uni_con_obtura" color="cyan darken-1"></v-radio>
                        <v-radio label="Biopsia" value="biop" color="cyan darken-1"></v-radio>
                        ....<v-radio label="Bridectomia" value="bridec" color="cyan darken-1"></v-radio>
                        <v-radio label="Cirugía de dientes incluidos / impactados por pieza" value="cirug_impact" color="cyan darken-1"></v-radio>
                        <v-radio label="Cirugía-remosion de tumores benignos de tejidos blandos" value="cirug_tumor" color="cyan darken-1"></v-radio>
                        <v-radio label="Cirugía de hiperplagias en tejidos blandos en la región buco-maxilo-facial" value="cirug_hiperpla" color="cyan darken-1"></v-radio>
                        <v-radio label="Cirugía para tratamientos de pericoronaritis" value="cirug_perico" color="cyan darken-1"></v-radio>
                        <v-radio label="Cirugía para remoción de odontoma" value="cirug_odontom" color="cyan darken-1"></v-radio>
                        <v-radio label="Excisión de cálculo salival" value="excis_calc" color="cyan darken-1"></v-radio>
                        <v-radio label="Exodoncia de raiz recidual" value="exod_raiz" color="cyan darken-1"></v-radio>
                        <v-radio label="Exodoncia de restos radiculares temporarios" value="exod_tempo" color="cyan darken-1"></v-radio>
                        <v-radio label="Exodoncia por piezas" value="exod_piez" color="cyan darken-1"></v-radio>
                        <v-radio label="Exodoncia simple de diente decíduo" value="exod_deci" color="cyan darken-1"></v-radio>
                        <v-radio label="Frenectomia labial" value="fren_lab" color="cyan darken-1"></v-radio>
                        <v-radio label="Frenectomia lingual" value="fren_lin" color="cyan darken-1"></v-radio>
                        <v-radio label="Levantamiento de seno maxilar con hueso homólogo" value="levan_homo" color="cyan darken-1"></v-radio>
                        <v-radio label="Levantamiento de seno maxilar con hueso liofilizado" value="levan_liof" color="cyan darken-1"></v-radio>
                        <v-radio label="Odonto-sección" value="odon_sec" color="cyan darken-1"></v-radio>
                        <v-radio label="Profundización de vestíbulo" value="prof_vesti" color="cyan darken-1"></v-radio>
                        <v-radio label="Regularización de reborde alveolar (alveoloplastia) por elemento" value="regul_rebor" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogCirug = false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogCirug = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>


                <v-dialog v-model="dialogEndo" scrollable max-width="600px">
                  <!--Tooltip de endodoncia-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#endo">
                      <img src="@/images/endodoncia.png" style="position:relative; height:80px">
                    </a>
                    <span>Endodoncia</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamientos de endodoncia</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="endoGroup">
                        <!--span>picked: {{ endoGroup }}</span-->
                        <v-radio label="Descensibilización por pieza" value="descen" color="cyan darken-1"></v-radio>
                        <v-radio label="Placa de acetato para blanqueamiento casero - repuesto" value="plac_acet_rep" color="cyan darken-1"></v-radio>
                        <v-radio label="Preparo para núcleo intrarradicular" value="prep_nucle" color="cyan darken-1"></v-radio>
                        <v-radio label="Protección pulpar directa" value="protec_pulp" color="cyan darken-1"></v-radio>
                        <v-radio label="Pulpectomía en diente deciduo - temporal" value="pulpec_deci" color="cyan darken-1"></v-radio>
                        <v-radio label="Pulpectomía multirradicular" value="pulpec_multi" color="cyan darken-1"></v-radio>
                        <v-radio label="Pulpectomía unirradicular" value="pulpec_uni" color="cyan darken-1"></v-radio>
                        <v-radio label="Retratamiento endodóntico birradicular" value="retrat_bi" color="cyan darken-1"></v-radio>
                        <v-radio label="Retratamiento endodóntico multirradicular" value="retrat_multi" color="cyan darken-1"></v-radio>
                        <v-radio label="Retratamiento endodóntico unirradicular" value="retrat_uni" color="cyan darken-1"></v-radio>
                        <v-radio label="Transpalatino" value="transpa" color="cyan darken-1"></v-radio>
                        <v-radio label="Tratamiento endodóntico birradicular pimer premolar" value="trat_bi_prim" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogEndo= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogEndo = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>


                <v-dialog v-model="dialogOrto" scrollable max-width="600px">
                  <!--Tooltip de ortodoncia-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#ortodo">
                      <img src="@/images/ortodoncia.png" style="position:relative; height:80px">
                    </a>
                    <span>Ortodoncia</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamientos de ortodoncia</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="ortoGroup">
                        <!--span>picked: {{ ortoGroup }}</span-->
                        <v-radio label="Arco lingual" value="arc_ling" color="cyan darken-1"></v-radio>
                        <v-radio label="Bi - Helix" value="bi_he" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona de acrílico rápido en diente deciduo" value="coro_deci" color="cyan darken-1"></v-radio>
                        <v-radio label="Extracción seriada" value="extra_seria" color="cyan darken-1"></v-radio>
                        <v-radio label="Férula" value="feru" color="cyan darken-1"></v-radio>
                        <v-radio label="Férula plástica" value="feru_plast" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia unimaxilar convencional cerámicos" value="ortod_uni_conv" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia parcial Autoligado cerámica" value="ortod_auto_ceram" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia parcial Autoligado metálico" value="ortod_auto_meta" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia parcial convencional metálicos" value="ortod_conv_meta" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia parcial convencional cerámica" value="ortod_conv_ceram" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia unimaxilar autoligado linguales" value="ortod_auto_ling" color="cyan darken-1"></v-radio>
                        <v-radio label="Ortodoncia unimaxilar autoligado safiro" value="ortod_auto_safir" color="cyan darken-1"></v-radio>
                        <v-radio label="Pistas planas" value="pist_plan" color="cyan darken-1"></v-radio>
                        <v-radio label="Placa con levante mordida" value="plac_levan" color="cyan darken-1"></v-radio>
                        <v-radio label="Placa de Hawley" value="plac_haw" color="cyan darken-1"></v-radio>
                        <v-radio label="Plano inclinado" value="plan_incli" color="cyan darken-1"></v-radio>
                        <v-radio label="Quad - Helix" value="quad" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogOrto= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogOrto = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogRest" scrollable max-width="600px">
                  <!--Tooltip de restauracion-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#rest">
                      <img src="@/images/restauracion.png" style="position:relative; height:80px">
                    </a>
                    <span>Restauración</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamientos de restauración</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="restGroup">
                        <!--span>picked: {{ restGroup }}</span-->
                        <v-radio label="Ajuste oclusal" value="ajust_oclu" color="cyan darken-1"></v-radio>
                        <v-radio label="Ajuste oclusal con restauraciones para guias caninas" value="ajust_rest" color="cyan darken-1"></v-radio>
                        <v-radio label="Obturación provicional eugenolato" value="obtur_prov" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de amalgama compuesta" value="rest_amal_compues" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de amalgama simple" value="rest_amal_simpl" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de ionomero de vidrio - compuesta" value="rest_io_compue" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de ionomero de vidrio - compleja" value="rest_io_comple" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de amalgama compleja" value="rest_amal_comple" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de ángulos en resina" value="rest_ang" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración de borde incisal" value="rest_inci" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración en resina fotopolimerizable compleja" value="rest_foto_comple" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración en resina fotopolimerizable compuesta" value="rest_foto_compue" color="cyan darken-1"></v-radio>
                        <v-radio label="Restauración en resina fotopolimerizable simple" value="rest_foto_simpl" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogRest= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogRest = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>

              <v-flex xs3>
                <v-dialog v-model="dialogCoro" scrollable max-width="600px">
                  <!--Tooltip de coronas-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#coron">
                      <img src="@/images/coronas.png" style="position:relative; height:80px">
                    </a>
                    <span>Corona</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Coronas</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="coroGroup">
                        <!--span>picked: {{ coroGroup }}</span-->
                        <v-radio label="Corona acrílica autocurado en diente decíduo" value="coro_acri_deci" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona de acero en diente decíduo" value="coro_ace_deci" color="cyan darken-1">></v-radio>
                        <v-radio label="Corona de acero" value="coro_ace" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona de acero en diente permanente" value="coro_ace_perma" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona de acrílico termocurado" value="coro_acri_termo" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona de zircónio" value="coro_zirco" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona con E - max" value="coro_emax" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona libre de metal sobre implante de cerámica por pieza" value="coro_meta_impla" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona provisional sobre implante" value="coro_prov_implan" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona provisional con perno" value="coro_prov_per" color="cyan darken-1"></v-radio>
                        <v-radio label="Corona provisional de acrílico autocurable" value="coro_prov_acri" color="cyan darken-1"></v-radio>
                        <v-radio label="Incrustación de cerámica E-max overlay" value="incrus_ceram" color="cyan darken-1"></v-radio>
                        <v-radio label="Incrustación de metal" value="incrus_meta" color="cyan darken-1"></v-radio>
                        <v-radio label="Incrustación en resina (indirecta) - inlay" value="incrus_resi_in" color="cyan darken-1"></v-radio>
                        <v-radio label="Incrustación en resina (indirecta) - onlay" value="incrus_resi_on" color="cyan darken-1"></v-radio>
                        <v-radio label="Malla adicional para prótesis" value="mall_prot" color="cyan darken-1"></v-radio>
                        <v-radio label="Onlay de resina indirecta" value="on_resi_indi" color="cyan darken-1"></v-radio>
                        <v-radio label="Placa oclusal estabilizadora" value="plac_estab" color="cyan darken-1"></v-radio>
                        <v-radio label="Placa oclusal posicionadora" value="plac_posi" color="cyan darken-1"></v-radio>
                        <v-radio label="Profilaxis - tratectomía" value="profil_trat" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis fija adhesiva en cerámica e-max press por pieza (metal free)" value="prot_fij_emax" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis fija adhesiva directa (provisional)" value="prot_fij_direc" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis fija metal cerámica" value="prot_meta" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis parcial fija provisioria por pieza" value="prot_fij_piez" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis parcial removible acrílica inferior" value="prot_par_inf" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis parcial removible acrílica superior" value="prot_par_sup" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis parcial removible de cromo-cobalto sup/inf" value="prot_par_crom" color="cyan darken-1"></v-radio>
                        <v-radio label="Prótesis total inmediata" value="prot_inme" color="cyan darken-1"></v-radio>
                        <v-radio label="Provisional para inlay/onlay" value="provi_inon" color="cyan darken-1"></v-radio>
                        <v-radio label="Proviorio para restauración metálica fundida" value="provi_meta" color="cyan darken-1"></v-radio>
                        <v-radio label="Puente fijo metal cerámica" value="puen_meta_ceram" color="cyan darken-1"></v-radio>
                        <v-radio label="Puente fijo metal zirconio" value="puen_meta_zirco" color="cyan darken-1"></v-radio>
                        <v-radio label="Reparación de prótesis total (exclusivamente en consultorio)" value="repa_prot" color="cyan darken-1"></v-radio>
                        <v-radio label="Rebase de prótesis total o parcial - inmediato (en consultorio)" value="rebas_prot_inme_consul" color="cyan darken-1"></v-radio>
                        <v-radio label="Rebase de prótesis total o parcial en termocurado - mediato (en laboratorio)" value="rebas_prot_inme_lab" color="cyan darken-1"></v-radio>
                        <v-radio label="Recementación o atornillado de elementos protéticos por pieza" value="remo_ator" color="cyan darken-1"></v-radio>
                        <v-radio label="Remoción de perno intrarradicular" value="remo_per" color="cyan darken-1"></v-radio>
                        <v-radio label="Reparación de corona acrílico autocurado" value="repa_coro" color="cyan darken-1"></v-radio>
                        <v-radio label="Reparación de prótesis parcial removible (en consultorio y laboratorio)" value="repa_prot_par_remo" color="cyan darken-1"></v-radio>
                        <v-radio label="Reparación de prótesis total (en consultorio y laboratorio)" value="repa_prot_tot" color="cyan darken-1"></v-radio>
                        <v-radio label="Retenedor acker" value="rete_ack" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogCoro= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogCoro = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogHigie" scrollable max-width="600px">
                  <!--Tooltip de higiene-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#higie">
                      <img src="@/images/higienizacion.png" style="position:relative; height:80px">
                    </a>
                    <span>Higiene</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamientos de higiene</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="higieGroup">
                        <!--span>picked: {{ higieGroup }}</span-->
                        <v-radio label="Higienización de prótesis protocolo" value="higie_prot" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogHigie= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogHigie = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogPerio" scrollable max-width="600px">
                  <!--Tooltip de periodoncia-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#perio">
                      <img src="@/images/periodoncia.png" alt="" style="position:relative; top:300; left:750; height:80px">
                    </a>
                    <span>Periodoncia</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Tratamientos de periodoncia</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="perioGroup">
                        <!--span>picked: {{ perioGroup }}</span-->
                        <v-radio label="Alargamiento de corona por pieza" value="alarg_coro" color="cyan darken-1"></v-radio>
                        <v-radio label="Cirugía periodontal menor por pieza" value="cirug_perio" color="cyan darken-1">></v-radio>
                        <v-radio label="Gingivectomía por pieza" value="gingiv" color="cyan darken-1"></v-radio>
                        <v-radio label="Injerto de tejido conectivo por pieza" value="injer_teji" color="cyan darken-1"></v-radio>
                        <v-radio label="Injerto gingival libre" value="injer_gingiv" color="cyan darken-1"></v-radio>
                        <v-radio label="Raspado y alisado radicular por pieza" value="rasp_radic" color="cyan darken-1"></v-radio>
                        <v-radio label="Regeneración ósea guiada con aloinjerto óseo" value="rege_alo" color="cyan darken-1"></v-radio>
                        <v-radio label="Regeneración ósea guiada con hueso autólogo" value="rege_auto" color="cyan darken-1"></v-radio>
                        <v-radio label="Tratamiento de absceso periodontal agudo" value="trat_abse" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogPerio= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogPerio = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogSell" scrollable max-width="600px">
                  <!--Tooltip de sellante-->
                  <v-tooltip slot="activator" bottom color="cyan darken-1">
                    <a slot="activator" href="#sell">
                      <img src="@/images/sellante.png" style="position:relative; height:80px">
                    </a>
                    <span>Sellante</span>
                  </v-tooltip>
                  <v-card>
                    <v-card-title>Sellantes</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 500px;">
                      <v-radio-group column v-model="sellGroup">
                        <!--span>picked: {{ sellGroup }}</span-->
                        <v-radio label="Aplicación de barniz fluorado" value="aplic_barni" color="cyan darken-1"></v-radio>
                        <v-radio label="Aplicación de sellante - técnica invasiva" value="aplic_inv" color="cyan darken-1">></v-radio>
                        <v-radio label="Aplicación de sellantes de fosas y fisuras" value="aplic_fisur" color="cyan darken-1"></v-radio>
                        <v-radio label="Mantenedor de espacio removible" value="mante_removi" color="cyan darken-1"></v-radio>
                        <v-radio label="Mantenedor de espacio fijo (anza distal / mesial)" value="mante_fijo" color="cyan darken-1"></v-radio>
                        <v-radio label="Parrilla hábitos / dedo - deglusión atípica" value="parrill_habit" color="cyan darken-1"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="red accent-1" flat @click="dialogSell= false">Cancelar</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialogSell = false">Seleccionar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>

            </v-card-actions>
          </v-card>
        </v-flex>

        <!--tratamientos actuales-->
        <v-flex lg12 sm12 xs12>
          <v-card>
            <v-toolbar color="blue-grey lighten-2">
              <v-toolbar-title>Tratamientos Actuales</v-toolbar-title>
            </v-toolbar>

            <v-list two-line subheader>
              <!--v-subheader inset>Folders</v-subheader-->
              <v-list-tile v-for="item in trat_act" :key="item.title" avatar @click="">   <!--v-for comienza de item=1-->
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>

              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <!-- historial -->
        <v-flex lg12 sm12 xs12>
          <!--div-->
            <v-toolbar flat color="blue lighten-3" class="elevation-1">
              <v-toolbar-title>Historial</v-toolbar-title>
            </v-toolbar>
            <v-data-table :headers="headersHist" :items="hist" class="elevation-1"> <!--comienzo de tabla-->
              <template slot="items" slot-scope="props">    <!--cabecera de cada columna-->
                <td>{{ props.item.fecha }}</td>
                <td class="text-xs-right">{{ props.item.odontologo }}</td>
                <td class="text-xs-right">{{ props.item.pieza }}</td>
                <td class="text-xs-center">{{ props.item.procedimiento }}</td>
                <!--td class="justify-center layout px-0"--> <!--botones de acciones de editar y borrar-->
                  <!--v-icon small class="mr-2" @click="editHistItem(props.item)">edit</v-icon>
                  <v-icon small @click="deleteHistItem(props.item)">delete</v-icon>
                </td-->
              </template>
            </v-data-table>
          <!--/div-->
        </v-flex>

        <!--descricion de iconos de tratamientos-->
        <!--v-flex lg6 sm12 xs12>
          <box-chart card-color="pink" title="Page views" sub-title="10%" icon="trending_up" :data="siteTrafficData" :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']" gradient type="area">
          </box-chart>
        </v-flex-->
        <!-- Procedimientos  realizados -->
        <!--v-flex lg6 sm12 xs12>
          <box-chart card-color="pink" title="Page views" sub-title="10%" icon="trending_up" :data="siteTrafficData" :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']" gradient type="area">
          </box-chart>
        </v-flex-->

      </v-layout>
    </v-container>
  </div>
</template>

<script>

import API from '@/api';
import EChart from '@/components/chart/echart';
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
import PostListCard from '@/components/widgets/card/PostListCard';
import ProfileCard from '@/components/widgets/card/ProfileCard';
import PostSingleCard from '@/components/widgets/card/PostSingleCard';
import WeatherCard from '@/components/widgets/card/WeatherCard';
import PlainTable from '@/components/widgets/list/PlainTable';
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
import VWidget from '@/components/VWidget';
import Material from 'vuetify/es5/util/colors';
import VCircle from '@/components/circle/VCircle';
import BoxChart from '@/components/widgets/chart/BoxChart';
import ChatWindow from '@/components/chat/ChatWindow';
import CircleStatistic from '@/components/widgets/statistic/CircleStatistic';
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic';
export default {
  components: {

    // VWidget,
    MiniStatistic,
    ChatWindow,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder
  },

  data: vm => ({

    //para el mensaje de error
    errorVacio: false,

    // para el calendario
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,


    finanCase: false,
    flagCase: false,


    // variable que guardara los dientes de daulto seleccionados
    seleccionAdultSup: [],
    seleccionAdultInf: [],

    posTratSup: [],
    posTratInf: [],
    posTratConsulSup: [],
    posTratConsulInf: [],
    // variable que guardara los dientes de niño seleccionados
    seleccionChild: [],


    // variables de cada tipo de tratamiento
    blancGroup: 'none',
    diagGroup: 'none',
    impGroup: 'none',
    rayGroup: 'none',
    cirugGroup: 'none',
    endoGroup: 'none',
    ortoGroup: 'none',
    restGroup: 'none',
    coroGroup: 'none',
    higieGroup: 'none',
    perioGroup: 'none',
    sellGroup: 'none',

    // cuadros de dialogo de los tratamientos
    dialogBlanc: false,
    dialogDiag: false,
    dialogImp: false,
    dialogRay: false,
    dialogCirug: false,
    dialogEndo: false,
    dialogOrto: false,
    dialogRest: false,
    dialogCoro: false,
    dialogHigie: false,
    dialogPerio: false,
    dialogSell: false,

    // variables de estado inicial de dialogos despues de seleccionar un tratamiento
    /* dialogPieza: false,
    dialogTodo: false,
    dialogSec: false,
    dialogMaxi: false, */

    // variables para mostrar u ocultar a odontograma de niño y adulto
    adultOdonto: true,
    childOdonto: false,

    // variable para mostrar imagen de tratamiento de prueba
    tratSup: false,
    tratInf: false,

    color: Material,
    selectedTab: 'tab-1',

    // comienzo del codigo de las tablas
    infoDialog: false,
    // histDialog: false,

    // encabezado para la tabla de historial del paciente
    headersHist: [
      { text: 'Fecha', align: 'center', sortable: true, value: 'fecha' },
      { text: 'Odontólogo', value: 'odontologo', align: 'right' },
      { text: 'Prieza(s)', value: 'pieza', align: 'right' },
      { text: 'Descripción  de procedimiento', value: 'procedimiento', align: 'center' },
    ],

    hist: [],
    info: [],
    editedHistIndex: -1,
    editedInfoIndex: -1,


    // datos que se cargan por defecto al crear un nuevo item
    editedHistItem: { fecha: '', odontologo: '', pieza: '', procedimiento: '' },
    editedInfoItem: { categoria: '', dato: '' },
    defaultHistItem: { fecha: '', odontologo: '', pieza: '', procedimiento: '' },
    defaultInfoItem: { categoria: '', dato: '' },

    // Lista de tratamientos actuales
    trat_act: [
      { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Fotos', subtitle: 'Jan 9, 2014' },
      { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recetas', subtitle: 'Jan 17, 2014' },
      { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Trabajo', subtitle: 'Jan 28, 2014' },
      { icon: 'assignment', iconClass: 'blue white--text', title: 'Itinerario de trabajo', subtitle: 'Jan 20, 2014' },
      { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Remodelacion de cocina', subtitle: 'Jan 10, 2014' }
    ],

    poligono: [
      { points2: '0,0 20,0 15,5 5,5', fill2: 'white', stroke2: 'navy', strokewidth: '0.5', opacity2: '0.4', id2: 'T' },
      { points2: '5,15 15,15 20,20 0,20', fill2: 'white', stroke2: 'navy', strokewidth: '0.5', opacity2: '0.4', id2: 'B' },
      { points2: '15,5 20,0 20,20 15,15', fill2: 'white', stroke2: 'navy', strokewidth: '0.5', opacity2: '0.4', id2: 'R' },
      { points2: '0,0 5,5 5,15 0,20', fill2: 'white', stroke2: 'navy', strokewidth: '0.5', opacity2: '0.4', id2: 'L' },
      { points2: '5,5 15,5 15,15 5,15', fill2: 'white', stroke2: 'navy', strokewidth: '0.5', opacity2: '0.4', id2: 'C' }
    ],

  }),

  computed: {

    // para el calendario
    computedDateFormatted () {
      return this.formatDate(this.date);
    },

    // funcion para poner o quitar borde a la imagen segun el checkbox
    /* check18 () {
      this.state18 = this.checkbox18 ? 'myborder' : 'noborder';
      return {
        [this.state18]:true
      }
    }, */

    // activity () { return API.getActivity(); },
    // posts () { return API.getPost(3); },
    // siteTrafficData () { return API.getMonthVisit },
    // locationData () { return API.getLocation; },
    // tabla de historial
    // histTitle () { return this.editedHistIndex === -1 ? 'Nuevo' : 'Editar' },
    infoTitle () { return this.editedInfoIndex === -1 ? 'Nuevo' : 'Editar' },   // condicion para mostrar el titulo en el cadro emergente de editar y nuevo

  },

  // para las tablas
  watch: {
    // histDialog (val) { val || this.closeHist() },
    infoDialog (val) { val || this.closeInfo() },
    // exp(){this.display},

    // para el calendario
    date (val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  // para las tablas
  created () { this.initialize() },



  methods: {

    // para el calendario
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`;
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },

    // bloque para las tablas
    initialize () {
      this.hist = [     // datos por defecto para la tabla historial
        { fecha: '01/01/2019', odontologo: 'odontolog1', pieza: '11', procedimiento: 'extraccion' },
        { fecha: '02/01/2019', odontologo: 'odontolog1', pieza: '44', procedimiento: 'amalgama' },
        { fecha: '03/01/2019', odontologo: 'odontolog1', pieza: '35', procedimiento: 'puente' },
        { fecha: '04/01/2019', odontologo: 'odontolog1', pieza: '39', procedimiento: 'implante' },
        { fecha: '05/01/2019', odontologo: 'odontolog1', pieza: '39', procedimiento: 'curacion' },
        { fecha: '06/01/2019', odontologo: 'odontolog1', pieza: '41', procedimiento: 'implante' },
        { fecha: '07/01/2019', odontologo: 'odontolog1', pieza: '30', procedimiento: 'implante' },
        { fecha: '08/01/2019', odontologo: 'odontolog1', pieza: '30', procedimiento: 'extraccion' },
        { fecha: '09/01/2019', odontologo: 'odontolog1', pieza: '30-56', procedimiento: 'extraccion' },
        { fecha: '10/01/2019', odontologo: 'odontolog1', pieza: 'todo', procedimiento: 'limpieza' }
      ];

      // datos por defecto de la tabla informacion del paciente
      this.info = [
        { categoria: 'Nombre', dato: 'Nombre 1' },
        { categoria: 'Apellido', dato: 'Apellido 1' },
        { categoria: 'Genero', dato: 'Masculino' },
        { categoria: 'Fecha de nacimiento', dato: '15/03/2000' },
        { categoria: 'Edad', dato: '19' },
        { categoria: 'Fecha de resgistro', dato: '16/01/2019' },
        { categoria: 'Estado (activo o inactivo)', dato: 'activo' },
        { categoria: 'Referido por', dato: 'dr.1 ' },
        { categoria: 'Ciudad', dato: 'machala' },
        { categoria: 'Direccion', dato: 'ciudadela los olivos' },
        { categoria: 'Teléfono 1', dato: '112345459' },
        { categoria: 'Teléfono 2', dato: '3467345' },
        { categoria: 'Teléfono 3', dato: '4645674' },
        { categoria: 'Imagen', dato: 'foto' }
      ];
    },

    // edicion de items de tabla de informacion de paciente
    editInfoItem (item) {
      this.editedInfoIndex = this.info.indexOf(item);
      this.editedInfoItem = Object.assign({}, item);
      this.infoDialog = true;
    },

    // cierra dialogo de tabla informacion del paciente
    closeInfo () {
      this.infoDialog = false;
      setTimeout(() =>
      {
        this.editedInfoItem = Object.assign({}, this.defaultInfoItem);
        this.editedInfoIndex = -1;
      }, 300);
    },

    // muesta el odontograma para adulto
    displayAdult () {

      if (this.adultOdonto === false) {
        this.adultOdonto = true;
        this.childOdonto = false;
      }
      else {
        this.adultOdonto = false;
      }
    },

    // mustra el odontograma para niño
    displayChild () {
      if (this.childOdonto === false) {
        this.childOdonto = true;
        this.adultOdonto = false;
      }
      else {
        this.childOdonto = false;
      }
    },

    // guarda cambios en dialogo de tabla informacion del paciente
    saveInfo () {
      if (this.editedInfoIndex > -1) {
        Object.assign(this.info[this.editedInfoIndex], this.editedInfoItem);
      } else {
        this.info.push(this.editedInfoItem);
      }
      this.closeInfo();
    },   // termina bloque de tablas

    // funcion para mostrar cuadro de dialog de transicion
    selectBlanc () {

      if (!this.seleccionAdultSup.length) {
        this.errorVacio = true;
        this.finanCase = false;
        this.dialogBlanc = false;
      }

      // funcion para que no se pueda elegir el mismo tratamiento mas de una vez en el mismo diente
      // elimina los elemento repetidos dentro de un array
      Array.prototype.unique = function (a) {
        return function () {
          return this.filter(a);
        };
      }(function (a, b, c) {
        return c.indexOf(a, b + 1) < 0;
      });

      this.dialogBlanc = false;
      //  this.dialogDiag = false;
      //  this.dialogImp = false;

      if (this.blancGroup === 'blanc_case') {

        this.flagCase = true;   // bandera para poder entrar a la siguiente ventana de financiero

        this.tratSup = true;   //  mostrar imagen de tratamiento
        this.tratInf = true;

        // todos los datos de seleccionAdultSup se copian en posTratSup
        for (let i = 0; i < this.seleccionAdultSup.length; i++) {
          this.posTratSup.push(this.seleccionAdultSup[i]);
        }

        // todos los datos de seleccionAdultInf se copian en posTratInf
        for (let i = 0; i < this.seleccionAdultInf.length; i++) {
          this.posTratInf.push(this.seleccionAdultInf[i]);
        }

        this.posTratSup = this.posTratSup.unique();
        this.posTratInf = this.posTratInf.unique();

        this.seleccionAdultSup = []; // se vacia la variable para que desaparezcan los vistos y poder elegir otro tratamiento
        this.seleccionAdultInf = [];
      }

      if (this.blancGroup === 'blanc_denta_consul') {

        this.tratConsulSup = true;   //  mostrar imagen de tratamiento
        this.tratConsulInf = true;

        // todos los datos de seleccionAdultSup se copian en posTratconsulSup
        for (let i = 0; i < this.seleccionAdultSup.length; i++) {
          this.posTratConsulSup.push(this.seleccionAdultSup[i]);
        }

        // todos los datos de seleccionAdultInf se copian en posTratConsulInf
        for (let i = 0; i < this.seleccionAdultInf.length; i++) {
          this.posTratConsulInf.push(this.seleccionAdultInf[i]);
        }

        this.posTratConsulSup = this.posTratConsulSup.unique();
        this.posTratConsulInf = this.posTratConsulInf.unique();

        this.seleccionAdultSup = []; // se vacia la variable para que desaparezcan los vistos y poder elegir otro tratamiento
        this.seleccionAdultInf = [];
      }

      if (this.blancGroup === 'cari_ceram_emax') {

        this.tratSup = true;   //  mostrar imagen de tratamiento
        this.tratInf = true;

        // todos los datos de seleccionAdultSup se copian en posTratconsulSup
        for (let i = 0; i < this.seleccionAdultSup.length; i++) {
          this.posTratConsulSup.push(this.seleccionAdultSup[i]);
        }

        // todos los datos de seleccionAdultInf se copian en posTratConsulInf
        for (let i = 0; i < this.seleccionAdultInf.length; i++) {
          this.posTratConsulInf.push(this.seleccionAdultInf[i]);
        }

        this.posTratConsulSup = this.posTratConsulSup.unique();
        this.posTratConsulInf = this.posTratConsulInf.unique();

        this.seleccionAdultSup = []; // se vacia la variable para que desaparezcan los vistos y poder elegir otro tratamiento
        this.seleccionAdultInf = [];
      }

      if (this.flagCase === true && this.blancGroup === 'blanc_case' && this.errorVacio === false) {
        this.finanCase = true;
      }

      this.blancGroup = 'none';   // para que no aparezca seleccionado el tratamiento en el cuadro de dialogo

    },
  },

};
</script>