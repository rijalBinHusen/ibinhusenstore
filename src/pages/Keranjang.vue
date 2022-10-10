<template>
  <div class="row justify-center" style="margin: 20px 0 0 auto">
    <div class="col-10">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Keranjang" />
      </q-breadcrumbs>
      <!-- ==== Header Product lists -->
      <div class="row" style="margin-top: 20px">
        <div class="col-5 text-subtitle1 text-weight-bold">Produk</div>
        <div class="col-2 text-subtitle1 text-weight-bold">Jumlah</div>
        <div class="col-2 text-subtitle1 text-weight-bold">Harga</div>
        <div class="col-2 text-subtitle1 text-weight-bold">Opsi</div>
      </div>
      <hr />
      <!-- Lists of product -->
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="row"
        style="margin-top: 10px"
      >
        <div class="col-5">
          <ProdukMiniCard :name="product.name" :price="product.price" />
        </div>
        <div class="col-2">
          <div class="row">
            <q-btn
              size="sm"
              color="negative"
              label="-"
              @click="total(-1, index)"
            />

            <input
              disabled
              class="text-black text-weight-bold"
              :value="product.total"
              type="text"
              style="width: 40px; margin: 0 2px 0 2px"
            />

            <q-btn
              @click="total(1, index)"
              size="sm"
              color="primary"
              label="+"
            />
          </div>
        </div>
        <div class="col-2">
          {{ formatPrice(product.price * product.total) }}
        </div>
        <div class="col-2">
          <q-btn color="negative" label="Hapus" @click="hapus(index)" />
        </div>
      </div>
      <div class="row justify-center" style="margin-top: 30px">
        <p class="text-h6">
          Total harga:
          {{
            formatPrice(
              products.reduce((n, { total, price }) => n + total * price, 0)
            )
          }}
        </p>
        <div style="margin-left: 20px">
          <q-btn
            :to="{ path: `order/${new Date().getTime()}/pemesan` }"
            color="primary"
            label="Buat pesanan"
          />
        </div>
      </div>
      <hr
        class="justify-center"
        style="margin: 20px auto 40px auto; max-width: 1000px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProdukMiniCard from '../components/ProdukMiniCard.vue';
import formatPrice from '../composable/function/formatPrice';

export default defineComponent({
  components: { ProdukMiniCard },
  setup() {
    const products = ref([
      {
        id: 'asd1293uasdads1',
        name: 'Cookies kacang @250gr',
        price: 25000,
        img: 'cookies5',
        total: 0,
      },
      {
        id: 'asd1293uasdads1',
        name: 'Cookies letter @250gr',
        price: 25000,
        img: 'cookies6',
        total: 0,
      },
      {
        id: 'asd1293uasdads1',
        name: 'Butter cookies @250gr',
        price: 25000,
        img: 'cookies7',
        total: 0,
      },
      {
        id: 'asd1293uasdads1',
        name: 'Cookies kacang @250gr',
        price: 25000,
        img: 'cookies5',
        total: 0,
      },
      {
        id: 'asd1293uasdads1',
        name: 'Cookies letter @250gr',
        price: 25000,
        img: 'cookies6',
        total: 0,
      },
      {
        id: 'asd1293uasdads1',
        name: 'Butter cookies @250gr',
        price: 25000,
        img: 'cookies7',
        total: 0,
      },
    ]);

    const total = (number: number, index: number) => {
      products.value[index].total += number;
    };

    const hapus = (index: number) => {
      products.value.splice(index, 1);
    };

    return { products, total, formatPrice, hapus };
  },
});
</script>
