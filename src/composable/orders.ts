import orderDetailsInfoTypes from 'src/types/orderDetailsInfo';
import { ref } from 'vue';

export const orderDetailsInfo = ref<orderDetailsInfoTypes>({
  judulPesanan: '',
  namaPemesan: '',
  metodePembayaran: '',
  namaPenerima: '',
  nomorWhatsapp: '',
  dikirim: '',
  provinsi: '',
  kabupaten: '',
  kecamatan: '',
  kodePos: 0,
  alamatLengkap: '',
});

export const isPemesanComplete = () => {
  return (
    orderDetailsInfo.value.judulPesanan &&
    orderDetailsInfo.value.judulPesanan &&
    orderDetailsInfo.value.metodePembayaran
  );
};

export const isPenerimaComplete = () => {
  return (
    orderDetailsInfo.value.namaPenerima &&
    orderDetailsInfo.value.nomorWhatsapp &&
    orderDetailsInfo.value.dikirim
  );
};

export const isAlamatComplete = () => {
  return (
    orderDetailsInfo.value.provinsi &&
    orderDetailsInfo.value.kabupaten &&
    orderDetailsInfo.value.kecamatan &&
    orderDetailsInfo.value.kodePos &&
    orderDetailsInfo.value.alamatLengkap
  );
};
