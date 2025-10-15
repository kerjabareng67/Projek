
import { useState } from 'react';
import TextType from '../../components/TextType';

export default function Retro() {
  const [activeTab, setActiveTab] = useState<string>('1.0');

  const tabs = [
    { id: '1.0', label: 'Revolusi 1.0' },
    { id: '2.0', label: 'Revolusi 2.0' },
    { id: '3.0', label: 'Revolusi 3.0' },
    { id: '4.0', label: 'Revolusi 4.0' },
  ];

  const getContent = () => {
    switch (activeTab) {
      case '1.0':
        return (
          <section className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up transition-all duration-300 ease-in-out
                    hover:scale-102 hover:shadow-md mb-20 mt-15">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-center">Era Revolusi Industri 1.0 (Abad ke-18)</h2>
            <p className = "text-xl text-center">
              Revolusi Industri 1.0 dimulai pada pertengahan abad ke-18 di Inggris dan menjadi titik balik besar dalam sejarah peradaban manusia. Era ini ditandai dengan penemuan mesin uap oleh James Watt, yang memungkinkan penggerakan mesin secara efisien tanpa bergantung pada tenaga manusia atau hewan. Perubahan ini menggeser sistem produksi dari metode manual menjadi mekanis, sehingga meningkatkan skala dan kecepatan produksi secara drastis. Industri tekstil menjadi sektor pertama yang mengalami transformasi besar, dengan munculnya alat-alat seperti Spinning Jenny dan Power Loom yang mempercepat proses pemintalan dan penenunan kain. Di sektor pertambangan, penggunaan mesin pompa dan tungku peleburan logam meningkatkan efisiensi dan hasil produksi. Dampak dari revolusi ini juga terlihat dalam perkembangan transportasi, dengan hadirnya kereta api dan kapal uap yang mempercepat distribusi barang dan mobilitas manusia. Secara sosial, revolusi ini mendorong urbanisasi besar-besaran, menciptakan kelas pekerja industri, dan melahirkan kapitalisme modern. Kota-kota industri seperti Manchester dan Birmingham tumbuh pesat, menjadi pusat produksi dan perdagangan. Revolusi Industri 1.0 tidak hanya mengubah cara manusia bekerja, tetapi juga membuka jalan bagi inovasi teknologi dan sistem ekonomi yang membentuk dunia modern seperti yang kita kenal sekarang.
            </p>
            <p className="mt-3 italic text-slate-600">Kata kunci: Mesin Uap, Mekanisasi, Pabrik.</p>
          </section>
        );
      case '2.0':
        return (
          <section className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up transition-all duration-300 ease-in-out
                    hover:scale-102 hover:shadow-md mb-20 mt-15">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-center"> Revolusi Industri 2.0 (Akhir Abad ke-19 - Awal Abad ke-20)</h2>
            <p className = "text-xl text-center">
              Revolusi Industri 2.0 berlangsung sekitar akhir abad ke-19 hingga awal abad ke-20 dan ditandai kemajuan teknologi yang lebih kompleks dibandingkan era sebelumnya. Penggunaan listrik menggantikan tenaga uap sebagai sumber energi utama, memungkinkan pengoperasian mesin yang lebih efisien dan fleksibel. Salah satu inovasi paling berpengaruh adalah penerapan sistem lini perakitan (assembly line) oleh Henry Ford dalam industri otomotif, yang merevolusi cara produksi barang secara massal dan menurunkan biaya produksi secara signifikan. Selain itu, perkembangan dalam bidang komunikasi juga mengalami lonjakan besar dengan ditemukannya telegraf dan telepon, yang mempercepat penyebaran informasi dan memperluas jangkauan interaksi antarwilayah. Revolusi ini turut mendorong pertumbuhan industri baja, kimia, dan listrik, serta memperkuat konektivitas global melalui jaringan transportasi dan komunikasi yang lebih maju. Secara sosial, Revolusi Industri 2.0 memperluas lapangan kerja di sektor industri dan mempercepat urbanisasi, sekaligus memunculkan tantangan baru seperti kondisi kerja yang menuntut dan kesenjangan sosial yang semakin nyata. Era ini menjadi fondasi bagi perkembangan teknologi modern dan sistem ekonomi global yang kita kenal.
            </p>
            <p className="mt-3 italic text-slate-600">Kata kunci: Listrik, Produksi Massal, Assembly Line.</p>
          </section>
        );
      case '3.0':
        return (
          <section className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up transition-all duration-300 ease-in-out
                    hover:scale-102 hover:shadow-md mb-20 mt-15">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-center"> Revolusi Industri 3.0 (1970-an - 2000-an)</h2>
            <p className = "text-xl text-center">
              Revolusi Industri 3.0, yang dimulai sekitar tahun 1970-an, dikenal sebagai era digital karena ditandai dengan masuknya teknologi komputer dan otomatisasi ke dalam dunia industri. Pada masa ini, tenaga manusia mulai digantikan oleh mesin yang dikendalikan secara digital, sehingga proses produksi menjadi lebih cepat, akurat, dan efisien. Penemuan mikroprosesor menjadi tonggak penting yang memungkinkan pengembangan komputer pribadi dan sistem kontrol otomatis. Robot industri mulai digunakan secara luas di pabrik-pabrik untuk melakukan tugas-tugas berulang dengan presisi tinggi, sementara sistem kontrol digital memungkinkan pengawasan dan pengaturan proses produksi secara real-time. Selain itu, integrasi teknologi informasi ke dalam manufaktur membuka jalan bagi konsep seperti Computer Integrated Manufacturing (CIM), yang menghubungkan desain produk, perencanaan produksi, dan distribusi dalam satu sistem terpadu. Era ini juga menjadi awal dari globalisasi industri, di mana perusahaan dapat mengelola rantai pasok lintas negara dengan bantuan teknologi digital. Secara keseluruhan, Revolusi Industri 3.0 mengubah wajah industri menjadi lebih cerdas dan terhubung, serta mempersiapkan fondasi bagi revolusi industri berikutnya yang berbasis kecerdasan buatan dan internet.
            </p>
            <p className="mt-3 italic text-slate-600">Kata kunci: Komputer, Otomatisasi, Robotika.</p>
          </section>
        );
      case '4.0':
        return (
          <section className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up transition-all duration-300 ease-in-out
                    hover:scale-102 hover:shadow-md mb-20 mt-15">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-center">Revolusi Industri 4.0 (Era Sekarang)</h2>
            <p className = "text-xl text-center">
              Revolusi Industri 4.0, atau yang dikenal sebagai “Industry 4.0”, merupakan era transformasi digital yang mengintegrasikan teknologi canggih ke dalam seluruh aspek industri. Berbeda dari revolusi sebelumnya, era ini tidak hanya mengandalkan otomatisasi, tetapi juga konektivitas dan kecerdasan buatan untuk menciptakan sistem produksi yang lebih cerdas dan adaptif. Teknologi seperti Internet of Things (IoT) memungkinkan perangkat dan mesin saling terhubung dan berkomunikasi secara real-time, sementara kecerdasan buatan (AI) digunakan untuk menganalisis data, mengoptimalkan proses, dan membuat keputusan secara mandiri. Big data dan cloud computing mendukung pengolahan serta penyimpanan data dalam skala besar, memungkinkan perusahaan untuk merespons perubahan pasar dengan cepat dan efisien. Selain itu, cyber-physical systems menggabungkan dunia fisik dan digital melalui sensor, aktuator, dan sistem kontrol yang saling terintegrasi. Hasilnya adalah proses produksi yang lebih fleksibel, efisien, dan personalisasi tinggi, di mana produk dapat disesuaikan dengan kebutuhan konsumen secara dinamis. Revolusi Industri 4.0 juga mendorong munculnya pabrik pintar (smart factory), logistik otomatis, dan model bisnis baru berbasis platform digital, menjadikan industri lebih kompetitif dan berkelanjutan di era globalisasi.
            </p>
            <p className="mt-3 italic text-slate-600">Kata kunci: IoT, AI, Smart Factory, Konektivitas.</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
          <TextType 
            text={["Selamat Datang", "Di Revolusi Industri", "Dari 1.0 Sampai 4.0"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="w-full flex justify-center text-4xl font-bold text-slate-800 text-center mb-10 mt-10" 
          />

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-slate-800 text-white shadow-sm'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-3xl mx-auto">
        {getContent()}
      </div>
      {/* Closing tag for container div */}
      </div>
    </div>
  );
}