<template>
  <div class="bg-theme-chinook min-h-screen">
    <div class="flex flex-row justify-end items-center px-2 py-2 gap-2 flex-wrap">
      <form-select v-model="localParams._sort" :options="sortOptions" required-value input-id="list-sore-select"
                   label="Sort by"/>
      <form-select v-model="localParams._order" :options="orderOptions" required-value input-id="list-order-select"
                   label="Order"/>
      <form-select v-model="localParams.userId" :options="users" input-id="list-user-select" label="User"/>
      <form-input v-model="localParams.q" input-id="list-search-input" label="Search"/>
    </div>

    <div v-if="posts.length"
         class=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-2">
      <template v-for="post in posts" :key="post.id">
        <post-item :post="post" :users-array="users" show-more-icon clickable @comments="showComments"/>
      </template>
    </div>
    <div v-else class="h-screen w-full flex flex-row items-center justify-center">
      <span class="animate-bounce text-2xl">No items.</span>
    </div>

    <pagination-component v-if="posts.length && showPagination" v-model="localParams._page"/>

    <modal-component :show-modal="modalActive" @closeModal="modalActive=false">
      <template #body>
        <comments-list :post-id="selectedPostIdForPreview"/>
      </template>
    </modal-component>
  </div>
</template>


<script>
import PostItem from "@/components/PostItem";
import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import PaginationComponent from "@/components/ui/PaginationComponent";
import ModalComponent from "@/components/ui/ModalComponent";
import CommentsList from "@/components/CommentsList";
import debounce from "lodash.debounce"

export default {
  components: {CommentsList, ModalComponent, PaginationComponent, FormSelect, FormInput, PostItem},

  data() {
    return {
      posts: [],
      users: [],

      localParams: {
        q: '',
        userId: null,
        _page: 1,
        _limit: 20,
        _sort: 'id',
        _order: 'asc'
      },

      sortOptions: [{id: 'id', name: 'ID'}, {id: 'userId', name: 'User ID'}, {id: 'title', name: 'Title'}, {
        id: 'body',
        name: 'Body'
      }],
      orderOptions: [{id: 'asc', name: 'ASC'}, {id: 'desc', name: 'DESC'}],

      modalActive: false,

      selectedPostIdForPreview: null
    }
  },

  async created() {
    try {
      await this.getPosts()
      this.users = this.$store.getters.getUsers
    } catch (e) {
      this.$toast.error('Something went wrong')
    }
  },

  computed: {
    showPagination() {
      return !this.localParams.q && !this.localParams.userId
    }
  },

  methods: {
    async getPosts() {
      try {
        const resPosts = await this.axios.get(`https://jsonplaceholder.typicode.com/posts`, {params: this.localParams})
        this.posts = resPosts.data
      } catch (e) {
        this.$toast.error('Something went wrong')
      }
    },

    debouncedGetPosts: debounce(async function () {
      await this.getPosts()
    }, 300),

    showComments(id) {
      this.selectedPostIdForPreview = id
      this.modalActive = true
    }
  },

  watch: {
    localParams: {
      deep: true,
      handler() {
        this.debouncedGetPosts()
      }
    },

    "localParams.q"() {
      this.localParams._page = 1
    },

    "localParams.userId"() {
      this.localParams._page = 1
    }
  }
}
</script>