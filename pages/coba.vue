<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom">
        <h5 class="red">Task</h5>
      </div>
      <div class="list-task">
        <div
          class="item-task d-flex align-items-center border-bottom pt-3 pb-4"
        >
          <input type="checkbox" name="status" id="task" class="me-2" />
          <div class="title-task">Tugas 1</div>
        </div>
      </div>
      <div class="action py-2">
        <a href="#" class="add-button">Add Task</a>
      </div>
      <h5>pembelajaran {{ msg }}</h5>
      {{ msg }}
      <div>{{ topic }}</div>
      <span v-once> {{ msg }}</span>
      <p>Menggunakan kurung kurawal: {{ rawHtml }}</p>
      <p>Menggunakan v-Html directive: <span v-html="rawHtml"></span></p>
      <div>
        <button v-bind:disabled="isButtonDisabled">Button</button>
        {{ number + 1 }}
        {{ ok ? "Yes" : "No" }}
        {{ msg.split("").reverse().join("") }}
        <div v-bind:id="'list-' + id">lalalala</div>

        <p v-if="seen">v-if Terlihat</p>

        <a v-bind:href="url">argumen</a>
        <a v-on:click="doSomething">onclick </a>
        <a v-bind:[attributeName]="url">attributeName</a>
        <hr />
        <!-- full syntax -->
        <a v-bind:href="url"> ... </a>
        <!-- shorthand -->
        <a :href="url"> ... </a>
        <!-- shorthand dengan argumen dinamis (2.6.0+) -->
        <a :[attributeName]="url"> ... </a>
        <hr />
        <!-- full syntax -->
        <a v-on:click="doSomething"> ... </a>
        <!-- shorthand -->
        <a @click="doSomething"> ... </a>
        <!-- shorthand dengan argumen dinamis (2.6.0+) -->
        <a @[event]="doSomething"> ... </a>
      </div>
      <div v-bind:class="{ active: isActive }">hhhhhh</div>
      <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
      >daad</div>
      <div class="static active">dddd</div>
    <hr>
    <div v-bind:class="[activeClass, errorClass]">activeClass</div>
    <div class="active text-danger">text danger</div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">toggle list</div>
    <div v-bind:class="[{ active: isActive }, errorClass]">errorClass</div>

    <hr>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">binding</div>
    <div v-bind:style="styleObject">styleObject</div>
    <div v-bind:style="[baseStyles, overridingStyles]">arraysintax</div>
    <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">multiplevalues</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "rabu-sore",
      pro: "rabu yang cerah",
      rawHtml:
        '<div class="action py-2"><a href="#" class="add-button"> add task raw a</a></div>',
      isButtonDisabled: true,
      number: 10,
      ok: false,
      id: 11,
      seen: false,
      url: "https://drive.google.com/file/d/1C27TXbH6Ur-C5x3-dwtLw-OpajPgKIfD/view",
      attributeName: "href",
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,

      classObject:{
          active: true,
          "text-success": true,
      },
      styleObject: {
        color: 'blue',
        fontSize: '13px'
        }

      
      

    };
  },

  methods: {
    doSomething() {
      alert("sekarang hari rabu");
    },
  },
};
</script>
<style>
.red {
  color: blue;
}
.active{
    background: yellow;
}
</style>