<template>
  <q-page class="q-pa-lg">
    <!-- Button dashboard -->
    <div class="row q-mb-md q-gutter-sm">
      <q-input
        outlined
        type="text"
        v-model="paymentMethodForm.name"
        label="Nama metode"
      ></q-input>

      <q-input
        outlined
        type="text"
        class="col-7"
        v-model="paymentMethodForm.description"
        label="Deskripsi"
      ></q-input>

      <q-btn
        color="primary"
        @click="handleSubmit"
        :label="paymentMethodForm.id ? 'Update' : 'Kirim'"
      ></q-btn>
    </div>
    <!-- Button -->
    <q-table
      v-if="paymentMethodsState?.length"
      title="Metode pembayaran"
      :rows="paymentMethodsState"
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
            <q-btn color="primary" @click="editPaymentMethod(props.row.id)" label="Edit"></q-btn>
            <q-btn color="purple" @click="removePaymentMethod(props.row.id)" label="Hapus"></q-btn>
            <!-- {{ props.row.action }} -->
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { QTableProps, useQuasar } from 'quasar';
import { MetodePembayaranTypes } from 'src/types/MetodePembayaran';
// import firebase function to get document
import { getDocuments } from 'src/firebase/Documents/getDocuments';
import { DocumentSnapshot } from '@firebase/firestore';
import { addDocument, writeDocument, removeDocument } from 'src/firebase/Documents/createDocument';

const nameDocument = <string>'paymentMethods';
const $q = useQuasar()

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

// variabel would contain data for qtable
const paymentMethodsState = ref(<MetodePembayaranTypes[]>[]);

// function get all document from db
const getPaymentMethods = async () => {
  // waiting to geet documents
  const res = await getDocuments(nameDocument);
  if (res) {
    // iterate the response
    res.forEach((doc: DocumentSnapshot) => {
      // extract data
      const docs = doc.data() as MetodePembayaranTypes;
      // push to rows array
      paymentMethodsState.value.push({
        ...docs,
        id: doc.id,
      });
    });
  }
};

onMounted(async () => {
  await getPaymentMethods();
});

// function to post a new payment method or update record
const handleSubmit = async () => {
  const { name, description } = paymentMethodForm.value
  // if the form not empty send to firebase
  if ( name && description ) {
    // if update record
    if(paymentMethodForm.value.id) {
      // send to firebase
      await writeDocument(nameDocument, paymentMethodForm.value.id, { name, description } as MetodePembayaranTypes)
      // mapping the state
      paymentMethodsState.value = paymentMethodsState.value.map((rec) => {
        // if the id record same, replace it
        if(rec.id === paymentMethodForm.value.id) {
          return { id: paymentMethodForm.value.id, name, description }
        }
          return rec
      })
    }
    else {
      // if create new record
      // post to firebase and wait the process
      const res = await addDocument(nameDocument, { name, description } as MetodePembayaranTypes);
      // push new data to state
      paymentMethodsState.value.push({
        name,
        description,
        id: res.id,
      });
    }
  }

  paymentMethodForm.value.name = '';
  paymentMethodForm.value.description = '';
  return;
};

// function to edit payment methods
const editPaymentMethod = (id: string) => {
  // find the record from state
  let rec = paymentMethodsState.value.find((rec) => rec.id === id)
  if(rec) {
    // fill the payment method form
    paymentMethodForm.value = { ...rec };
  }
}

// function to remove payment method
const removePaymentMethod = async (id: string) => {
  // launch confirm dialog
  $q.dialog({
        title: 'Apakah anda yakin?',
        message: 'Record akan dihapus',
        cancel: true,
        persistent: true
      }).onCancel(() => {
        // console.log('>>>> Cancel')
        return
      })
      
    await removeDocument(nameDocument, id)
    paymentMethodsState.value = paymentMethodsState.value.filter((rec) => rec.id !== id)
}

let paymentMethodForm = ref(<MetodePembayaranTypes>{
  name: '',
  description: '',
});
</script>
