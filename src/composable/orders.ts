import orderDetailsInfoTypes from 'src/types/orderDetailsInfo';
import { ref } from 'vue';

const orderDetailsInfo = ref<orderDetailsInfoTypes>({
  judulPesanan: '',
  namaPemesan: '',
  metodePembayaran: '',
  namaPenerima: '',
  nomorWhatsapp: '',
  provinsi: '',
  kabupaten: '',
  kecamatan: '',
  kodePos: 0,
  alamatLengkap: '',
  dikirim: '',
});

export default orderDetailsInfo;
