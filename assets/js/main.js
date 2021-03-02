feather.replace();

let loadFile = (event) => {
  let img = document.querySelector('#img');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  }
}

$(document).ready(function () {
  $("#check").on("click", function () {
    if ($(this).is(":checked")) {
      $("#password").attr("type", "text");
      $("#icon1").removeClass("d-none");
      $("#icon").addClass("d-none");
    } else {
      $("#password").attr("type", "password");
      $("#icon").removeClass("d-none");
      $("#icon1").addClass("d-none");
    }
  });

  $("#detail").tooltip();
  $("#tambah").tooltip();
  $("#hapus").tooltip();


  $("#dataTable").dataTable();



  const produk = document.querySelectorAll("#produk");
  let productName = document.getElementById("product-name");

  for (let i = 0; i < produk.length; i++) {
    let judul = produk[i].innerHTML;
    produk[i].onclick = function () {
      productName.innerHTML = judul;
    };
  }
  const deskripsi = new FroalaEditor('#deskripsi');

  $("#btn-nav").click(function (e) {
    e.preventDefault();
    $("#show").toggleClass('d-none');
    $("#hidden").toggleClass('d-none');
  });

  let card = document.querySelectorAll(".card");

  for (let i = 0; i < card.length; i++) {
    card[i].onmouseover = function () {
      card[i].classList.add("shadow-lg");
    };

    card[i].onmouseleave = function () {
      card[i].classList.remove("shadow-lg");
    };
  }

  // alamat
  $("#alamat").click(function (e) {
    e.preventDefault();
    $(this).addClass('text-blue');
    $(this).removeClass('text-white');
    $("#alamat-info").removeClass('d-none');

    $("#riwayat").addClass('text-white');
    $("#riwayatPesanan").addClass('d-none');

    $("#pesanan").addClass('text-white');
    $("#pesananSaya").addClass('d-none');
  });

  // riwayat
  $("#riwayat").click(function (e) {
    e.preventDefault();
    $(this).addClass('text-blue');
    $(this).removeClass('text-white');
    $("#riwayatPesanan").removeClass('d-none');


    $("#alamat").addClass('text-white');
    $("#alamat-info").addClass('d-none');


    $("#pesanan").addClass('text-white');
    $("#pesananSaya").addClass('d-none');
  });

  // pesanan
  $("#pesanan").click(function (e) {
    e.preventDefault();
    
    $(this).addClass('text-blue');
    $(this).removeClass('text-white');
    // console.log($("#pesananSaya"));
    $("#pesananSaya").removeClass('d-none');


    $("#alamat").addClass('text-white');
    $("#alamat-info").addClass('d-none');


    $("#riwayat").addClass('text-white');
    $("#riwayatPesanan").addClass('d-none');
  });

  // kontak
  $("#kontak").click(function (e) {
    e.preventDefault();
    
    $(this).addClass('text-blue');
    $(this).removeClass('text-white');
    $("#info-kontak").removeClass('d-none');


    $("#bank").addClass('text-white');
    $("#bank").removeClass('text-blue');
    $("#info-bank").addClass('d-none');
  });

  // bank
  $("#bank").click(function (e) {
    e.preventDefault();
    
    $(this).addClass('text-blue');
    $(this).removeClass('text-white');
    $("#info-bank").removeClass('d-none');


    $("#kontak").addClass('text-white');
    $("#info-kontak").addClass('d-none');
  });
});