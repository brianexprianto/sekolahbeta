<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>

        <div class="d-flex align-items-center ms-auto">
          <!-- <div>
            <b-dropdown id="dropdown-1" text="category">
              <b-dropdown-item
              v-for="(item, i) in resultCategory"
              :key="i"
              @click="cat = item"> {{ item }} </b-dropdown-item>
            </b-dropdown>

            <select name="category" v-model="category">
            
            </select>

          </div> -->
          <div>
            <select v-model="kategori">
            <option value="kategori1">kategori 1</option>
            <option value="kategori2">kategori 2 </option>
  
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
            
            <button
              class="btn btn-outline-secondary py-1 px-3"
              @click="tampil()"
            >
              Show/Hide
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
        <CardItem
          v-for="(tasks, i) in resultQuery"
          :key="i"
          :task="tasks"
          :isGrid="isGrid"
        />
      </div>
      

      <!-- <div class="list-task row">
        <CardItem :task="tasks[0]" :isGrid="isGrid" />
        <CardItem :task="tasks[1]" :isGrid="isGrid" />
        <CardItem :task="tasks[2]" :isGrid="isGrid" />
      </div> -->
        <!-- digantikan props task -->

        <!-- <div
          :class="[
            'item-task d-flex align-items-start border-bottom pt-3 pb-4',
            isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12',
          ]"
        >
          <input
            type="checkbox"
            name="status"
            id="task"
            class="me-2 mt-2"
            :checked="tasks[0].isDone"
            v-model="tasks[0].isDone"
          />
          <div
            :class="[
              'd-flex flex-column',
              tasks[0].isDone ? 'text-decoration-line-through fst-italic' : '',
            ]"
          >
            <div class="title-task mb-1">{{ tasks[0].title }}</div>
            <div class="description-task small text-muted">
              {{ tasks[0].description }}
            </div>
          </div>
        </div>
        <div
          :class="[
            'item-task d-flex align-items-start border-bottom pt-3 pb-4',
            isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12',
          ]"
        >
          <input
            type="checkbox"
            name="status"
            id="task"
            class="me-2 mt-2"
            :checked="tasks[1].isDone"
            v-model="tasks[1].isDone"
          />
          <div
            :class="[
              'd-flex flex-column',
              tasks[1].isDone ? 'text-decoration-line-through fst-italic' : '',
            ]"
          >
            <div class="title-task mb-1">{{ tasks[1].title }}</div>
            <div class="description-task small text-muted">
              {{ tasks[1].description }}
            </div>
          </div>
        </div>
        <div
          :class="[
            'item-task d-flex align-items-start border-bottom pt-3 pb-4',
            isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12',
          ]"
        >
          <input
            type="checkbox"
            name="status"
            id="task"
            class="me-2 mt-2"
            :checked="tasks[2].isDone"
            v-model="tasks[2].isDone"
          />
          <div
            :class="[
              'd-flex flex-column',
              tasks[2].isDone ? 'text-decoration-line-through fst-italic' : '',
            ]"
          >
            <div class="title-task mb-1">{{ tasks[2].title }}</div>
            <div class="description-task small text-muted">
              {{ tasks[2].description }}
            </div>
          </div>
        </div>-->
      

      <!-- <div
        class="
          title
          border-bottom
          d-flex
          align-items-center
          justify-content-between
          py-2
        "
      >
        <h5>Task</h5>
        <div class="d-flex align-items-center">
          <span class="me-2">View As</span>
          <button
            class="btn btn-outline-secondary py-1 px-3"
            @click="isGrid = !isGrid"
          >
            {{ isGrid ? "Grid" : "List" }}
          </button>
        </div>
      </div> -->

      <div class="action py-2">
        <!-- /* Jika isCreating == false maka tombol Add Task tidak akan tampil */
/* isCreating = !isCreating berfungsi sebagai switcher toggle */ -->
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
              <input
                class="form-control border-0 mb-2"
                placeholder="Title"
                type="text"
              />
              <textarea
                class="form-control border-0 small"
                placeholder="Description"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button
              class="btn btn-outline-secondary"
              @click="isCreating = !isCreating"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div class="action py-2">
        <a href="#" class="add-button">Add Task</a>
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
      tasks: [
        {
          title: "Task 1",
          description: "ini deskripsi",
          isDone: false,
          
          category: "kategori1",
        },
        {
          title: "Task 2",
          description: "ini deskripsi 2",
          isDone: false,
          
          category: "kategori1",
        },
        {
          title: "Task 3",
          description: " ini deskripsi 3",
          isDone: false,
          
          category: "kategori2",
        },
      ],

      kategori:"",
      searchQuery: '',
      ok:'true',
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
      } else if  (this.kategori) {
        return this.tasks.filter((item) => {
          return this.kategori == item.category;
          
        });
      }
      else {
        console.log(this.tasks);
        return this.tasks;
      }
    },
    

  },

  methods:{
    tampil(){
      this.tasks.forEach(Element => {
        Element.isDone = !Element.isDone;
      })
    },
    searchCategory(item){

    }
  },
};


</script>


<style>

.red {
  color: blue;
}


</style>