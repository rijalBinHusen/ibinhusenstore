import { OrderDetailsTypes, OrdersTypes } from 'src/types/Order';
import { ref } from 'vue';

export const orders = ref({} as OrdersTypes);

export const orderDetailsInfo = ref({} as OrderDetailsTypes);

export const isPemesanComplete = () => {
  return orders.value.judul && orderDetailsInfo.value.metodePembayaran;
};

export const isPenerimaComplete = () => {
  return (
    orderDetailsInfo.value.namaPenerima &&
    orderDetailsInfo.value.nomorWhatsApp &&
    orders.value.dikirim
  );
};

export const isAlamatComplete = () => {
  return (
    orderDetailsInfo.value.provinsi &&
    orderDetailsInfo.value.kabupaten &&
    orderDetailsInfo.value.kecamatan &&
    orderDetailsInfo.value.kodepos &&
    orderDetailsInfo.value.alamatLengkap
  );
};
