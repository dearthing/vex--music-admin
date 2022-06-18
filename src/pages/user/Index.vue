<template>
  <div class="page">
    <div class="q-pa-md">
      <div class="q-pa-md q-gutter-sm">
        <q-btn push color="white" text-color="primary"  label="Add" />
        <q-btn push color="white" text-color="red"  label="Delete" />

      </div>
      <q-table
          title="Treats"
          :rows="data"
          :columns="columns"
          separator="vertical"
          row-key="name"
          hide-pagination
      />
      <div class="row justify-center q-mt-md">
        <q-pagination
            v-model="pagination.page"
            color="grey-8"
            :max="pagesNumber"
            size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script>

import {computed, ref} from "vue";
import { search } from "../../api/user.js";

export default {
  name: "Index",
  setup() {

    const data = ref([]);

    const fetchData = () => {
      search({page : 0,size : 3}).then(res => {
        data.value = data.value.concat(res.data.content)
        pagination.value.page = res.data.number + 1
        pagination.value.rowsPerPage = res.data.size
        pagination.value.rowsNumber = res.data.rowsNumber;
      })
    }
    fetchData();


    const pagination= ref({
      sortBy: 'desc',
      descending: false,
      rowsNumber : 10,
      page: 2,
      rowsPerPage: 3
    })
    const columns = [
      {
        field: 'id',
        name: 'id',
        label: 'ID',
      },
      {
        name: 'username',
        label: 'USERNAME',
        field: 'username',
      },
      {
        name: 'nickname',
        label: 'NICKNAME',
        field: 'nickname',
      }
    ]
    const rows = []



    return {
      rows,
      columns,
      pagination,
      data,
      pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage))
    }
  },

}
</script>

<style scoped>

</style>