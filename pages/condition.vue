<template>
  <div>
    <h1 v-if="num == 0">Angkanya 0</h1>
    <h1 v-else-if="num == 4">Angkanya 4</h1>
    <h1 v-else>Bukan ANgka 0</h1>

    <br />
    <p>Paragraf 1</p>
    <p>Paragraf 2</p>

    <div v-if="ok">
      <label>username</label>
      <input placeholder="Eneter username" />
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Eneter your email" />
    </div>
    <button @click="ok = !ok">Toggle OK</button>
    <h1 v-show="ok">ini pakai v-show</h1>

    <div class="list-task" v-if="check">
      <div class="item-task d-flex align-items-start border-bottom pt-3 pb-4">
        <input
          type="checkbox"
          name="status"
          id="task"
          class="me-2 mt-2"
          :checked="tasks[0].isDone"
        />
        <div class="d-flex flex-column">
          <div class="title-task mb-1">
            {{ tasks[0].title }}
          </div>
          <div class="description-task small text-muted">
            {{ tasks[0].description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 4,
      ok: true,
      check: true,
      tasks: [
        {
          title: "Task 1",
          description: "ini deskripsi",
          isDone: false,
        },
      ],
    };
  },
};
</script>
