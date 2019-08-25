import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
      <footer>
        <div className="menuFooter">
          <div className="row">
            <div className="footerImg col-md-4">
              <img src="https://d1j87w3j7cc3a6.cloudfront.net/media/gojek/media/images/gojek-white-text.svg" alt=" "></img>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="font-weight-bold">Tentang Gojek</li>
                <li>Pusat Media</li>
                <li>Tentang Kami</li>
                <li>Blog</li>
                <li>Karir</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="font-weight-bold">Bantuan</li>
                <li>Kontak Kami</li>
                <li>Kebijakan Privasi</li>
                <li>Syarat & Ketentuan</li>
                <li>Pusat Bantuan</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-weight-bold">Ikuti Kami</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div className="unduh flex-column d-flex align-items-md-center col-md-2">
              <p className="font-weight-bold">Unduh</p>
              <a href=" ">
              <img src="https://lelogama.go-jek.com/cache/c5/0b/c50ba49bc9d41657404189fafe60cefc.jpg" alt=" "></img>
              </a>
              <br></br>
              <a href=" ">
              <img src="https://lelogama.go-jek.com/cache/79/34/79349ff69dd80242d75601fa3f1f94a0.jpg" alt=" "></img>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <ul>
                <li className="font-weight-bold">Transportasi & Logistik</li>
                <li>GoRide</li>
                <li>GoCar</li>
                <li>GoSend</li>
                <li>GoBox</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="font-weight-bold">Makan & Belanja</li>
                <li>GoFood</li>
                <li>GoFoodFestival</li>
                <li>GoMed</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="font-weight-bold">Pembayaran</li>
                <li>GoPay</li>
                <li>GoBills</li>
                <li>GoPoint</li>
                <li>PayLater</li>
                <li>GoPulsa</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="font-weight-bold">Kebutuhan Harian</li>
                <li>GoMassage</li>
                <li>GoClean</li>
                <li>GoAuto</li>
                <li>GoGlam</li>
                <li>GoLaundry</li>
                <li>GoFix</li>
              </ul>
            </div>
            <div className="col-md-4">
            </div>
            </div>
            <div className="row">
              <div className="copRight col-md-12 text-center">
                <p>© 2019 Gojek Gojek adalah merek milik PT Aplikasi Karya Anak Bangsa.<br></br> Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.</p> 
              </div>
            </div>
          </div>  
      </footer>
      </div>
    )
  }
}
