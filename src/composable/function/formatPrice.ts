export default function (number: number) {
  return 'RP' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
