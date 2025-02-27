<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCV1OBdLkFW45AY_4SOeu0klSMjHW1gWSU",
    authDomain: "blackwold-pix.firebaseapp.com",
    databaseURL: "https://blackwold-pix-default-rtdb.firebaseio.com",
    projectId: "blackwold-pix",
    storageBucket: "blackwold-pix.firebasestorage.app",
    messagingSenderId: "237686054157",
    appId: "1:237686054157:web:ecadd43268603d2337a444",
    measurementId: "G-K4LE9ZK9TN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
