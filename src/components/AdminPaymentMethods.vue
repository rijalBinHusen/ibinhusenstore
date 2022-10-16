<template>
    <q-page class="q-pa-lg">
        <!-- Button dashboard -->
        <div class="row q-mb-md q-gutter-sm">

            <q-input outlined type="text" v-model="name" label="Nama metode" ></q-input>

            <q-input outlined type="text" class="col-7" v-model="deskripsi" label="Deskripsi" ></q-input>

            <q-btn color="primary" label="Kirim"></q-btn>
        </div>
        <!-- Button -->
        <q-table
            title="Metode pembayaran"
            :rows="rowsArray"
            :columns="headsArray"
            row-key="name"
        >
            <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="name" :props="props">
                {{ props.row.name }}
                </q-td>
                <q-td key="description" :props="props">
                {{ props.row.description }}
                </q-td>
                <q-td key="action" :props="props">
                <q-btn color="primary" label="Edit"></q-btn>
                <q-btn color="purple" label="Hapus"></q-btn>
                {{ props.row.action }}
                </q-td>
            </q-tr>
            </template>
        </q-table>
        </q-page>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const headsArray = [
          { label: 'Nama metode', name: 'name', field:'name', align: 'left' },
          { label: 'Deskripsi', name: 'description', field: 'description', align: 'left' },
          { label: 'Action', name: 'action', field: 'action'}        
        ]

        const rowsArray = [
          { name: 'Cash on delivery', description: 'Hanya mendukung beberapa wilayah', action: 1 },
          { name: 'Transfer bank', description: 'Hanya mendukung bank BCA', action: 1},
          { name: 'Payment gateway', description: 'Menggunakan pembayaran gerbang pihak ketiga (Biaya admin 2500)', action: 1},
          { name: 'Checkout lewat shopee', description: 'Pembelian dilakukan melalui toko kami yang beradad di shopee', action: 1}
          ]


          const name = ref('')
            const deskripsi = ref('')
</script>