<template>
  <div class="py-4">
    <div class="container">
      <!-- <div class="form">
        <form v-on:submit.prevent="submitForm">
          <div class="field">
            <label class="label">Nama:</label>
            <input class="input" type="text" placeholder="Masukkan nama anda" v-model="form.name"/>
          </div>
          <div class="field">
            <label class="label">Pesan:</label>
            <input class="textarea"  placeholder="Masukkan pesan" v-model="form.message"/>
          </div>
          <div class="field">
            <label class="label">Priotitas:</label>
            <select class="input" v-model="form.priority">
              <option value="">Tidak ada prioritas</option>
              <option value="low">Rendah</option>
              <option value="high">Tinggi</option>
            </select>
          </div>
          <div class="field">
            
            <input type="checkbox"  v-model="form.message"/>
            <label class="label">Anda telah menyetujui</label>
          </div>

          <div class="field control">
            <button class="button is-primary" type="submit">Submit</button>
          </div>
        </form>
      </div> -->

      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>

        <div class="d-flex align-items-center ms-auto">
          <div>
            <select v-model="kategori">
              <option value="">Sort by Category</option>
              <option value="kategori1">kategori 1</option>
              <option value="kategori2">kategori 2</option>
            </select>
          </div>
  
          <div>
            <select v-model="sortTitle" @change="sort">
              <option value="">Sort by Title</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div>
            
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              v-model="searchQuery"
            />
          </div>

          <div class="d-flex align-items-center justify-content-end w-100">
            <!-- <button
              class="btn btn-outline-secondary py-1 px-3"
              @click="tampil()"
            >
              Show/Hide
            </button> -->

          <button class="btn btn-outline-primary py-1 px-3 me-4" @click="shuffle">
          Shuffle!
          </button>
          </div>
          


          

          <div class="d-flex align-items-center justify-content-end w-100">
            <span class="me-2">View As</span>
            <button
              class="btn btn-outline-secondary py-1 px-3"
              @click="isGrid = !isGrid"
            >
              {{ isGrid ? "Grid" : "List" }}
            </button>
          </div>
        </div>
      </div>
<div class="list-task row">
      <transition-group name="tasks" tag="div" class="list-task row">
      <!-- <CardItem
      v-for="task in resultQuery"
      :task="task"
      :key="task.id"
      :isGrid="isGrid"
      /> -->
      
        <CardItem
          v-for="(tasks) in resultQuery"
          :key="tasks.id"
          :task="tasks"
          :isGrid="isGrid"
        />
      
      </transition-group>
</div>
      

      <div class="action py-2">
        <a
          href="#"
          class="add-button"
          v-if="!isCreating"
          @click="isCreating = !isCreating"
          >Add Task</a
        >
        
        <div class="add-card" v-else>
          
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <form v-on:submit.prevent="create">
              <input
                class="form-control border-0 mb-2"
                placeholder="Title"
                type="text"
                v-model="form.title"
              />
              <textarea
                class="form-control border-0 small"
                placeholder="Description"
                rows="3"
                v-model="form.description"
              ></textarea>
            
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button
              class="btn btn-outline-secondary"
              @click="isCreating = !isCreating"
            >
              Cancel
            </button>
          </div>
          </form>
          </div>
          </div>
          
        </div>
      </div>

      
    </div>
  </div>
</template>
<script>
import "@/components/Card/CardItem.vue";

export default {
  data() {
    return {
      // Daftar task
      form: {
        name: "",
        message: "",
        priority: "",
        agreement: "",
        title: "",
        description: "",
      },


      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "ini deskripsi",
          isDone: false,

          category: "kategori1",
        },
        {
          id: 2,
          title: "Task 2",
          description: "ini deskripsi 2",
          isDone: false,

          category: "kategori1",
        },
        {
          id: 3,
          title: "Task 3",
          description: " ini deskripsi 3",
          isDone: false,

          category: "kategori2",
        },
      ],

      sortTitle:"",
      kategori: "",
      searchQuery: "",
      ok: "true",
      isCreating: false,
      isGrid: false,
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else if (this.kategori) {
        return this.tasks.filter((item) => {
          return this.kategori == item.category;
        });
      } else {
        console.log(this.tasks);
        return this.tasks;
      }
    },
  },

  methods: {
    // tampil(){
    //   this.tasks.forEach(Element => {
    //     Element.isDone = !Element.isDone;
    //   })
    // },
    searchCategory(item) {},
    submitForm() {
      console.log(this.form);
    },
    shuffle() {
        this.tasks = _.shuffle(this.tasks);
    },

    create(){
      this.tasks.push({
        id : Math.floor(Math.random() * 10),
        title: this.form.title,
        description: this.form.description,
        isDone: false,
        category:'default',
        
      });
      
    },
    sort() {
      if (this.sortTitle) {
        this.tasks = _.orderBy(this.tasks, ["title"], [this.sortTitle]);
      }
    },
    
  },
};
</script>


<style>
.red {
  color: blue;
}
.tasks-move {
transition: .4s;
}
</style>