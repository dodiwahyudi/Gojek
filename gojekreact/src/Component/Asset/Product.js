import React, { Component } from 'react'
import Goride from "../Image/goride_icon_new.svg"
import Gocar from "../Image/gocar_icon_new.svg"
import Gosend from "../Image/gosend_icon_new.svg"
import Gobox from "../Image/gobox_icon_new.svg"
import Gofood1 from "../Image/gofood_icon_new.svg"
import Gofood2 from "../Image/icon-gff.svg"
import Gofood3 from "../Image/gomed_icon_new.svg"
import Kebharian1 from "../Image/gomassage_icon_new.svg"
import Kebharian2 from "../Image/goclean_icon_new.svg"
import Kebharian3 from "../Image/goauto_icon_new.svg"
import Kebharian4 from "../Image/goglam_icon_new.svg"

export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="row5 row text-dark justify-content-end">
          <div className="col-11">
            <h1 className="text-dark ">Layanan Kami</h1>
          </div>
        </div>
        <div className="row6 row justify-content-end">
          <div className="col-11 ">
            <h2>Transportasi & Logistik</h2>
            <p>Mau pergi atau ngirim barang? Pake Gojek aja, driver kami siap bantuin.</p>
          </div>
        </div>

        <div className="row7 row">
          <div className="descCol1 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
            <a href=" ">
            <div className="productImg row justify-content-center">
              <img src={Goride} alt=" "></img>
            </div>
            <div className="productDesc row justify-content-start">
                <p>Lebih dari 2 juta mitra driver siap mengantarmu dengan aman dan cepat</p>
            </div>
            </a>
          </div>
        <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
          <a href=" ">
          <div className="productImg row justify-content-center">
              <img src={Gocar} alt=" "></img>
          </div>
          <div className="productDesc row justify-content-start">
              <p> Ratusan mitra driver siap mengantarmu dengan aman dan nyaman </p>
          </div>
          </a>
        </div>
        <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
          <a href=" ">
          <div className="productImg row justify-content-center">
            <img src={Gosend} alt=" "></img>
          </div>
          <div className="productDesc row justify-content-start">
            <p>Layanan pengiriman cepat dan terpercaya untuk kebutuhan sehari-hari anda</p>
          </div>
          </a>
        </div>
        <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
          <a href=" ">
          <div className="productImg row justify-content-center">
              <img src={Gobox} alt=" "></img>
          </div>
          <div className="productDesc row justify-content-start">
              <p>Pindahan atau kirim barang besar kini lebih mudah dan nyaman</p>
          </div>
          </a>
        </div>
      </div>

      <div className="row6 row justify-content-end">
        <div className="col-11">
          <h2>Makanan & belanja</h2>
          <p>Kamu bisa pesen makanan dari berbagai macam restoran, pesen obat dari berbagai macam apotek, dan belanja dari berbagai macam toko lewat aplikasi Gojek.</p>
        </div>
      </div>
      <div className="row7 row">
      <div className="descCol1 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
        <a href=" ">
        <div className="productImg row justify-content-center">
          <img src={Gofood1} alt=" "></img>
        </div>
        <div className="productDesc row justify-content-start">
          <p>Layanan pesan  antar makanan terbesar se-Indonesia dan se-Asia Tenggara</p>
        </div>
        </a>
      </div>
      <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
        <a href=" ">
        <div className="productImg row justify-content-center">
          <img src={Gofood2} alt=" "></img>
        </div>
        <div className="productDesc row justify-content-start">
          <p>Nikmati berbagai macam kuliner terbaik. Mulai dari makana unik, jajanan hits, dll</p>
        </div>
        </a>
      </div>
      <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
        <a href=" ">
        <div className="productImg row justify-content-center">
          <img src={Gofood3} alt=" "></img>
        </div>
        <div className="productDesc row justify-content-start">
          <p>Gunakan Gomed untuk penuhi kebutuhan medis anda. Tebus resep obat atau pesan online</p>
        </div>
        </a>
      </div>
   </div>

   <div className="row6 row justify-content-end">
    <div className="col-11 ">
        <h2>Kebutuhan Harian</h2>
        <p>Ada kebutuhan sehari-hari yang mesti dilakuin? Kami punya berbagai layanan yang bisa menuhin kebutuhan harian kamu</p>
    </div>
  </div>
  <div className="row7 row">
    <div className="descCol1 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
      <a href=" ">
      <div className="productImg row justify-content-center">
          <img src={Kebharian1} alt=" "></img>
      </div>
      <div className="productDesc row justify-content-start">
        <p>Bikin seger badan dan rasakan pengalaman on demand kamu sendiri</p>
      </div>
      </a>
   </div>
    <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
      <a href=" ">
      <div className="productImg row justify-content-center">
          <img src={Kebharian2} alt=" "></img>
      </div>
      <div className="productDesc row justify-content-start">
          <p>Serahin urusan kebersihan kego-clean biar kamu bisa lakukan prioritas lain</p>
      </div>
      </a>
    </div>
    <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
      <a href=" ">
      <div className="productImg row justify-content-center">
        <img src={Kebharian3} alt=" "></img>
      </div>
      <div className="productDesc row justify-content-start">
        <p>Pesan goauto untuk jasa bengker panggilan mobil terdekat</p>
      </div>
      </a>
   </div>
   <div className="descCol2 col-sm-2 shadow p-3 mb-5 bg-white rounded border">
    <a href=" ">
      <div className="productImg row justify-content-center">
          <img src={Kebharian4} alt=" "></img>
      </div>
      <div className="productDesc row justify-content-start">
        <p>Goglam menyediakan layanan kecantikan terbaik</p>
      </div>
    </a>
    </div>
    </div>
  </div>
    )
  }
}
