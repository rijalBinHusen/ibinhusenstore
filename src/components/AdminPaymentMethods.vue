<template>
  <q-page class="q-pa-lg">
    <!-- Button dashboard -->
    <div class="row q-mb-md q-gutter-sm">
      <q-input
        outlined
        type="text"
        v-model="paymentMethodsState.name"
        label="Nama metode"
      ></q-input>

      <q-input
        outlined
        type="text"
        class="col-7"
        v-model="paymentMethodsState.description"
        label="Deskripsi"
      ></q-input>

      <q-btn
        color="primary"
        @click="createNewPaymentMethods"
        label="Kirim"
      ></q-btn>
    </div>
    <!-- Button -->
    <q-table
      v-if="rowsArray?.length"
      title="Metode pembayaran"
      :rows="rowsArray"
      :columns="headsArray"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <!-- name key slot -->
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <!-- description key slot -->
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <!-- Button action, either edit, or delete -->
          <q-td key="action" :props="props">
            <q-btn color="primary" label="Edit"></q-btn>
            <q-btn color="purple" label="Hapus"></q-btn>
            <!-- {{ props.row.action }} -->
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { QTableProps } from 'quasar';
import { MetodePembayaranTypes } from 'src/types/MetodePembayaran';
// import firebase function to get document
import { getDocuments } from 'src/firebase/Documents/getDocuments';
import { DocumentSnapshot } from '@firebase/firestore';
import { addDocument } from 'src/firebase/Documents/createDocument';

// columns data for qtable
const headsArray: QTableProps['columns'] = [
  {
    label: 'Nama metode',
    name: 'name',
    field: 'name',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Deskripsi',
    name: 'description',
    field: 'description',
    align: 'left',
    sortable: false,
  },
  { label: 'Action', name: 'action', field: 'action', sortable: false },
];

// variabel would content data for qtable
const rowsArray = ref<MetodePembayaranTypes[]>([]);

// function get all document from db
const getPaymentMethods = async () => {
  // waiting to geet documents
  const res = await getDocuments('paymentMethods');
  if (res) {
    // iterate the response
    res.forEach((doc: DocumentSnapshot) => {
      // extract data
      const docs = doc.data() as MetodePembayaranTypes;
      // push to rows array
      rowsArray.value.push({
        ...docs,
        id: doc.id,
      });
    });
  }
};

onMounted(async () => {
  await getPaymentMethods();
});

// function to post a new payment method
const createNewPaymentMethods = async () => {
  // if the form not empty send to firebase
  if (paymentMethodsState.value.name && paymentMethodsState.value.description) {
    const res = await addDocument('paymentMethods', paymentMethodsState.value);
    rowsArray.value.push({
      ...paymentMethodsState.value,
      id: res.id,
    });
  }
  paymentMethodsState.value.name = '';
  paymentMethodsState.value.description = '';
  return;
};

// function to edit payment methods
let paymentMethodsState = ref(<MetodePembayaranTypes>{
  name: '',
  description: '',
});
</script>
