# React Authentication With Phyton and Jwt

## Feature Login

    Todo:
    1.  package Install
        - cd react-auth : npm i react-router-dom axios bootstrap
    2.  components/Navbar.jsx
        - functional Navbar
    3.  Login.jsx
        - functional Login
        - deklarasi hooks
        - pasang handleLogin
        - pasang setLoading untuk button
        - inisialisasi  user dan token  agar lebih dipanggil
    4.  components/Home.jsx
        - functional Home
        - import dan pasang Navbar & Footer
    4.  components/Footer.jsx
        - functional component footer
    5.  main.jsx
        - pasang bootstrap
    6.  index.css
        - pasang bootstra
    7.  App.jsx
        - import dan pasang Login dan Home
    8.  jalankan app : cd frontend/npm run dev

## Feature Register

    Todo:
    1.  Register
        - copas code dari Login kemudian modifikasi form
        - deklarasi hooks register
        - animation loading
        - pasang use navigate
        - handleChangeInput
        - handleRegister
        - import dan pasang Navbar & Footer
    2.  App.js
        - import dan pasang path Register
    3.  pengujian pada browser:
        - klik menu register
          akan diarahkan kehalaman : http://localhost:5173/register
        - lakukan pengisian form register dan klik button egister
        - jika setup yang kita lakukan berhasil akan diarahkan kehalaman homepage

## isLoggedIn & menampilkan nama user yang login

    Todo:
    1.  Navbar
        - memasang hooks
        - useEffect untuk mengechek jikasudah login apa belum
        - pasang logig isLoggedIn pada menu (profile dam username)
        - menampilkan data user yang login dengan mencetak namanya : {user.name}
    2.  pengujian pada browser:
        - klik menu login
          akan diarahkan kehalaman : http://localhost:5173/login
        - lakukan pengisian form login dengan username dan password yang terdaftar dan klik button login
        - jika setup yang kita lakukan berhasil akan diarahkan kehalaman homepage
