<template>
    <q-page class="q-pa-lg">
        <!-- Button dashboard -->
        <div class="row q-mb-md q-gutter-lg">
            <q-select
            v-model="typeIsSent"
            :options="orderOptions"
            option-value="isSent"
            option-label="isSentLabel"
            option-disable="inactive"
            emit-value
            map-options
            outlined
            label="Type pesanan"
            >
            </q-select>

            <q-input outlined type="number" v-model="totalRecord" label="Jumlah" ></q-input>

            <q-btn color="primary" label="Cari record"></q-btn>
        </div>
        <!-- Button -->
        <q-table
            title="Datar pesanan"
            :rows="rowsArray"
            :columns="headsArray"
            row-key="name"
        >
            <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="id" :props="props">
                <a href="#" @click.prevent="detailsOrder = true">{{ props.row.id }}</a>
                </q-td>
                <q-td key="tanggalOrder" :props="props">
                {{ props.row.tanggalOrder }}
                </q-td>
                <q-td key="namaPemesan" :props="props">
                {{ props.row.namaPemesan }}
                </q-td>
                <q-td key="dikirim" :props="props">
                {{ props.row.dikirim }}
                </q-td>
                <q-td key="totalPrice" :props="props">
                {{ props.row.totalPrice }}
                </q-td>
            </q-tr>
            </template>
        </q-table>
    </q-page>
    <q-dialog  v-model="detailsOrder">
        <q-card class="col">
        <q-card-section>
            <div class="text-h6">Details order</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-list bordered separator>

            <q-item clickable v-ripple>
                <q-item-section>
                <q-item-label>Id order</q-item-label>
                <q-item-label caption>029384019384093294809348</q-item-label>
                </q-item-section>
            </q-item>

            
            <q-item clickable v-ripple>
                <q-item-section>
                <q-item-label>Judul</q-item-label>
                <q-item-label caption>Ini adalah judul</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>
                <q-item-label>Nama pemesan</q-item-label>
                <q-item-label caption>Nama pemesan</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Total harga</q-item-label>
                <q-item-label caption>Rp 500</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Nama penerima</q-item-label>
                <q-item-label caption>Nama penerima</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Nomor whatsapp</q-item-label>
                <q-item-label caption>Nomor whatsapp</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Provinsi</q-item-label>
                <q-item-label caption>Provinsi</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Kabupaten</q-item-label>
                <q-item-label caption>Kabupaten</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Kecamatan</q-item-label>
                <q-item-label caption>Kecamatan</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Kodepos</q-item-label>
                <q-item-label caption>Kodepos</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Alamat lengkap</q-item-label>
                <q-item-label caption>Alamat lengkap</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Kurir</q-item-label>
                <q-item-label caption>Kurir</q-item-label>
            </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label>Metode pembayaran</q-item-label>
                <q-item-label caption>Metode pembayaran</q-item-label>
            </q-item-section>
            </q-item>

        </q-list>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
        </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const headsArray = [
          { label: 'Nomor order', name: 'id', field:'id', align: 'left', format: (val: string) => `<a href='#'>${val}</a>` },
          { label: 'Order', name: 'tanggalOrder', field: 'tanggalOrder', align: 'left', sortable: true},
          { label: 'Nama pemesan', name: 'namaPemesan', field: 'namaPemesan', align: 'left'},
          { label: 'Dikirim sebelum', name: 'dikirim', field: 'dikirim' },
          { label: 'Total bayar', name: 'totalPrice', field: 'totalPrice', format: (val: string) => `Rp.${val}`}          
        ]

        const rowsArray = [
          {'id':1,'idUser':'3686297868','tanggalOrder':'7/1/2022','judul':'RGC Resources Inc.','namaPemesan':'lelks0','namaPenerima':'cwhitfeld0','nomorWhatsApp':'670-122-6806','dikirim':'10/13/2021','provinsi':'Horní Bečva','kabupaten':'Impendle','kecamatan':'Washington','kodepos':26,'alamatLengkap':'4342 Mcguire Lane','totalPrice':1264,'ongkosKirim':5349,'kurir':'Duobam','metodePembayaran':1},
          {'id':2,'idUser':'6823155981','tanggalOrder':'5/29/2022','judul':'Quidel Corporation','namaPemesan':'lguille1','namaPenerima':'hjerg1','nomorWhatsApp':'161-613-0642','dikirim':'2/19/2022','provinsi':'Paris 12','kabupaten':'Kauswagan','kecamatan':'Sātkania','kodepos':91,'alamatLengkap':'78 Mendota Junction','totalPrice':1657,'ongkosKirim':6851,'kurir':'Alphazap','metodePembayaran':3},
          {'id':3,'idUser':'5823028709','tanggalOrder':'3/3/2022','judul':'CNOOC Limited','namaPemesan':'mmcclifferty2','namaPenerima':'cfryd2','nomorWhatsApp':'261-848-1800','dikirim':'12/19/2021','provinsi':'Ramon’','kabupaten':'Khānaqāh','kecamatan':'Romanovo','kodepos':80,'alamatLengkap':'5167 Paget Pass','totalPrice':1723,'ongkosKirim':5138,'kurir':'Asoka','metodePembayaran':3},
          {'id':4,'idUser':'0833353373','tanggalOrder':'12/8/2021','judul':'Teradata Corporation','namaPemesan':'tmudie3','namaPenerima':'tperdue3','nomorWhatsApp':'315-787-8148','dikirim':'6/4/2022','provinsi':'San Luis','kabupaten':'Wilmington','kecamatan':'Dasht-e Qal‘ah','kodepos':38,'alamatLengkap':'6 Colorado Lane','totalPrice':1054,'ongkosKirim':5449,'kurir':'Alpha','metodePembayaran':1},
        ]

        const orderOptions = [
              { isSent: true, isSentLabel: 'Sudah dikirim' },
              { isSent: false, isSentLabel: 'Belum dikirim' }
            ]
            const typeIsSent = ref(false)
            const totalRecord = ref(10)
            const detailsOrder = ref(false)
</script>