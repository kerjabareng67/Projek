// pages/index.tsx atau app/page.tsx
import BlurText from "../components/BlurText";
import Carousel from "../components/Carousel"; 
import QuoteCard from "../components/QuoteCard";
import ChromaGrid from "../components/ChromaGrid";
import CircularGallery from "../components/CircularGallery";
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import RotatingText from '../components/RotatingText'


export default function Home() {
  const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Feriansyah Adi Saputra",
    subtitle: "Ketua Kelas",
    handle: "@feriansyah",
    borderColor: "#94a3b8", // slate-400
    gradient: "linear-gradient(145deg, #cbd5e1, #94a3b8)", // slate-200 → slate-400
    url: "https://github.com/feriansyah"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Arif Firmansyah",
    subtitle: "Wakil Ketua",
    handle: "@arifff",
    borderColor: "#94a3b8",
    gradient: "linear-gradient(145deg, #cbd5e1, #94a3b8)",
    url: "https://linkedin.com/in/arifff"
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Delyana Rahma",
    subtitle: "Sekretaris 1",
    handle: "@delyana",
    borderColor: "#94a3b8",
    gradient: "linear-gradient(145deg, #cbd5e1, #94a3b8)",
    url: "https://linkedin.com/in/delyana"
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Ahmad Dava",
    subtitle: "Sekretaris 2",
    handle: "@dava",
    borderColor: "#94a3b8",
    gradient: "linear-gradient(145deg, #cbd5e1, #94a3b8)",
    url: "https://linkedin.com/in/dava"
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Adinda Dwi Kristian",
    subtitle: "Bendahara 1",
    handle: "@dinda",
    borderColor: "#94a3b8",
    gradient: "linear-gradient(145deg, #cbd5e1, #94a3b8)",
    url: "https://linkedin.com/in/dinda"
  },
  {
    image: "https://i.pravatar.cc/300?img=6",
    title: "Charissa Putri",
    subtitle: "Bendahara 2",
    handle: "@charissa",
    borderColor: "#94a3b8",
    gradient: "linear-gradient(145deg, #cbd5e1, #94a3b8)",
    url: "https://linkedin.com/in/charissa"
  }
];
return (
  <>
    <div className="min-h-screen flex flex-col items-center justify-center p-6 ">
      {/* Teks animasi Blur */}
      <div className="flex items-center justify-center flex-wrap gap-2">
  <span className="text-4xl font-semibold text-slate-700 mb-8">Selamat datang di</span>
  <RotatingText
    texts={['SMA Negeri 1 Turen', 'Kelas Fearless']}
    mainClassName="px-2 sm:px-2 md:px-3 bg-slate-800 text-4xl text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-semibold mb-8"
    staggerFrom={"last"}
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-120%" }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
    transition={{ type: "spring", damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  />
</div>

      {/* Carousel */}
<div className="w-full max-w-7xl animate-fade-in-up">
  <Carousel autoPlay interval={3000}>
    {[
      <div key={1} className="relative h-96 w-full rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Jelajah Alam Bersama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Jelajah Alam Bersama</h3>
          <p className="text-gray-100 max-w-2xl">
            Kegiatan outbound di pegunungan sekitar Malang untuk mempererat kekompakan kelas.
          </p>
        </div>
      </div>,

      <div key={2} className="relative h-96 w-full rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Bakti Sosial Desa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Bakti Sosial Desa</h3>
          <p className="text-gray-100 max-w-2xl">
            Kunjungan ke desa binaan untuk berbagi ilmu dan membantu pembangunan fasilitas belajar.
          </p>
        </div>
      </div>,

      <div key={3} className="relative h-96 w-full rounded-xl overflow-hidden">
        <img
          src="../assets/react.svg"
          alt="Pameran Budaya Sekolah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Pameran Budaya Sekolah</h3>
          <p className="text-gray-100 max-w-2xl">
            Menampilkan kekayaan budaya Nusantara melalui tarian, pakaian adat, dan kuliner tradisional.
          </p>
        </div>
      </div>,
    ]}
  </Carousel>
</div>
        {/* Teks animasi Blur */}

      <BlurText
        text="Sambutan Ketua Kelas"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl mb-4 font-semibold font-sans text-slate-700 text-center mt-20"
      />
      <QuoteCard
        quote="SMA Negeri 1 Turen bukan sekadar sekolah melainkan tempat dimana kepribadian dibentuk, integritas dijunjung, kerja tim dikembangkan, keunggulan diraih, dan rasa hormat dipraktikkan."
        name="Feriansyah Adi Saputra"
        title="Ketua Kelas"
        imageUrl="./assets/sman1turen-1.svg" 
        closing="Mari jelajahi website ini, temukan peluang, dan jadilah bagian dari keluarga besar SMA Negeri 1 Turen."
      />

      <BlurText
        text="Kepengurusan Kelas"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl mb-10 font-semibold font-sans text-slate-700 text-center mt-10"
      />
      <div style={{ height: '850px', position: 'relative' }}>
      <ChromaGrid 
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
    </div>
    <BlurText
        text="Galeri Kelas"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl mb-1 font-semibold font-sans text-slate-700 text-center mt-10 justify-center"
      />
      <div style={{ height: '600px', position: 'relative',}}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<BlurText
        text="Prinsip-Prinsip Kelas"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl mb-1 font-semibold font-sans text-slate-700 text-center mt-20 justify-center"
      />
      <div className="w-full">
  <ScrollStack useWindowScroll={true}>
    <ScrollStackItem>
      <h2 className="text-2xl font-bold text-center">Menjaga Kebersamaan</h2>
      <p className="text-center mt-5">Kebersamaan adalah fondasi utama dalam membangun suasana kelas yang nyaman dan mendukung. Setiap siswa diharapkan saling membantu dalam belajar, menghargai perbedaan, dan bekerja sama dalam kegiatan kelas. Ketika ada perbedaan pendapat atau konflik, diselesaikan dengan cara yang dewasa dan terbuka. Dengan menjaga kebersamaan, kelas XII-F akan menjadi tempat tumbuh yang positif bagi semua anggotanya.</p>
    </ScrollStackItem>
    <ScrollStackItem>
      <h2 className="text-2xl font-bold text-center">Menjaga Kebersihan</h2>
      <p className="text-center mt-5">Kebersihan mencerminkan kedisiplinan dan rasa tanggung jawab. Seluruh siswa wajib menjaga kebersihan ruang kelas, mulai dari membuang sampah pada tempatnya hingga menjaga kerapian meja dan kursi. Jadwal piket dijalankan dengan konsisten dan adil, sebagai bentuk kontribusi terhadap kenyamanan bersama. Lingkungan yang bersih akan mendukung proses belajar yang lebih fokus dan menyenangkan.</p>
    </ScrollStackItem>
    <ScrollStackItem>
      <h2 className="text-2xl font-bold text-center">Selalu Menghormati dan Menghargai</h2>
      <p className="text-center mt-5">Sikap saling menghormati dan menghargai adalah kunci terciptanya hubungan yang harmonis. Siswa diharapkan bersikap sopan kepada guru, staf sekolah, dan teman sekelas. Menghargai pendapat orang lain, tidak merendahkan, dan menghindari tindakan yang menyakiti perasaan adalah bagian dari etika yang harus dijaga. Dengan saling menghormati, suasana kelas akan dipenuhi rasa aman, nyaman, dan saling percaya.</p>
    </ScrollStackItem>
  </ScrollStack>
</div>

  </>
);
}