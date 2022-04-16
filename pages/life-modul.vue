<template>
<div>
    <div ref="example-element">{{ propertyComputed }}</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      property: "Example property.",
      counter:0,
    };
  },
  computed: {
    propertyComputed() {
      return this.property;
    },
  },

  mounted() {
    console.log(
      `At this point, vm.$el has been created and el has been replaced.`
    );
    console.log(this.$el.textContent);
  },

  beforeMount() {
    console.log(`At this point, vm.$el has not been created yet.`);
  },

  beforeCreate() {
    console.log("At this point, events and lifecycle have been initialized.");
  },

  created() {
    // console.log(
    //   "At this point, this.property is now reactive and propertyComputed will update."
    // );
    // this.property = "Example property updated.";
    setInterval(() => {
      this.counter++;
    }, 1000);
  },

  beforeUpdate() {
    console.log(
      `At this point, Virtual DOM has not re-rendered or patched yet.`
    );
    // Logs the counter value every second, before the DOM updates.
    console.log(this.counter);
  },

  updated() {
    console.log(`At this point, Virtual DOM has re-rendered and patched.`);
    // Fired every second, should always be true
    console.log(+this.$refs["example-element"].textContent === this.counter);
  },
};
</script>