<template>
    <q-page class="q-pa-lg">
        <h4>Buat produk baru</h4>
        <!-- Form input -->
        <div class="row q-gutter-sm">
            <q-input outlined v-model="name" label="Nama produk"></q-input>
            <q-input outlined v-model="category" label="Kategory"></q-input>
            <q-input outlined v-model="price" label="Harga"></q-input>
            <q-input outlined v-model="weight" label="berat"></q-input>
        </div>
        <!-- Form input -->
        <!-- Description -->
        <div class="q-my-md">
            <label for="">Deskripsi produk:</label>
            <q-editor 
            v-model="description"
            min-height="5rem">
            </q-editor>
        </div>
        <!-- Image uploader -->
        <div class="row q-gutter-sm">
            <q-uploader
            url="http://localhost:4444/upload"
            label="Gambar produk"
            style="max-width: 250px"
            ></q-uploader>

            <q-uploader
            url="http://localhost:4444/upload"
            label="Gambar produk"
            style="max-width: 250px"
            ></q-uploader>
        </div>
        <!-- Image uploader -->

        <!-- Button submit -->
        <div class="row q-mt-md">
            <q-btn color="primary" label="Buat produk"></q-btn>
        </div>
        <!-- Button sumbit -->
    </q-page>
</template>

<script lang="ts" setup>

    import { ref } from 'vue'
    const name = ref('')
    const category = ref('')
    const price = ref('')
    const weight = ref('')
    // const images = ref([])
    const description = ref('Tulis deskripsi produk')
            
</script>