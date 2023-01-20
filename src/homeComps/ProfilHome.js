import personInfos from "../datas/personDatas";
export default function ProfilHome(){
    return (
        <div id="profil-home">
        <h2 style={{ color:"#001D6E" }}>Profil</h2>
        <div id="profil-cont">
            <div id="profil-infos-cont">
                <h3 style={{ color:"#001D6E" }}>Kişisel Bilgiler</h3>
                <strong>Doğum Tarihim</strong><p>{personInfos.birthday}</p>
                <strong>İkametgahım</strong><p>{personInfos.location}</p>

                <strong>Eğitim Durumum</strong><p>{personInfos.school} {personInfos.job} 1995-</p>
                <p>{personInfos.schoolUniversite2} {personInfos.jobAnadolu} 2002-2003</p>
                <p>{personInfos.schoolLise}  1992-1995</p>
            </div>
            <div id="about-me-const">
                <h3 className="p-title" style={{ color:"#001D6E" }}>Hakkımda</h3>
                <p> 
                IT uzmanı olarak sistem kurulum, yönetim, bakım, destek ve acil durum işlemlerinin yerine getirilmesi, 
Sunucular için yedekleme sistemlerinin yönetilmesi, güvenliğin sağlanması ve
güncellemelerin yapılması, 
Sistem içinde bulunan network cihazlarının konfigürasyonlarının kontrolünün yapılmasını 
ve yedeklerinin alınması.
Yeni geliştirilen sistemlerin, server’ların testlerini yapmak, hayata geçirilmesini 
sağlamak, sistem işleyişlerini izlemek, sorunları gidermek ve gerekli tedariği yapmak.
Network alt yapısını CAT6 ve Fiber kablolarla başarıyla tamamladım, ek
olarak fabrika genelinde kullanılacak olan Dect telefonların kullanımı için gerekli 
kablolama projesini yönettim, baz istasyonlarının kurulumu yaptım.  
                </p>
                <p>
                Servis ve Bakım Birimi Planlama Uzmanı olarak CRM alt yapısını kullanarak iş akışının 
kısa-orta ve uzun vadede hazırlanması, planlanması ve yönlendirilmesi. Sahadan alınan 
veriler doğrultusunda Arıza Tespit Raporlarının oluşturulması. Vibrasyon ölçümlerinin 
yorumlanarak Kestirimci Bakım Raporlarının hazırlanması. Departmanın yaptığı işler ile
ilgili yönetimin talep ettiği raporların hazırlanması. Yurt içi ve yurt dışı yedek parça 
tedariğinin yapılarak müşterilere yedek parça ve bakım hizmeti tekliflerinin verilmesi.
Depoya ürün giriş ve çıkışlarının yapılarak, stok takibinin yapılması. 
                </p>                   
            </div>
        </div>
    </div>
    );
}
