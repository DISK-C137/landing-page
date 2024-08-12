import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css'; // นำเข้า CSS ของ AOS

const app = createApp(App);

app.mount('#app');

AOS.init({
    duration: 1000, // ระยะเวลาแอนิเมชัน
    easing: 'ease-in-out', // รูปแบบการเปลี่ยนแปลง
  });