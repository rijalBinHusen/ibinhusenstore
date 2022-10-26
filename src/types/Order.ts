export interface OrdersTypes {
  id: string;
  tanggalOrder: string;
  judul: string;
  namaPemesan: string;
  totalPrice: number;
  dikirim: string;
}

export interface OrderDetailsTypes {
  idOrder: string;
  idUser: string;
  namaPenerima: string;
  nomorWhatsApp: string;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kodepos: number;
  alamatLengkap: string;
  ongkosKirim: number;
  kurir: string;
  isSent: boolean;
  metodePembayaran: string;
}
