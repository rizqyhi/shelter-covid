import Head from 'next/head'
import HomeIllustration from '../images/home.svg'

export default function Home() {
  return (
    <main className="p-6">
      <Head>
        <title>Informasi Shelter Isolasi Covid-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-8">
        <HomeIllustration className="mx-auto" />
      </div>

      <h1 className="mb-4 text-2xl font-bold">
        Temukan Tempat <span className="text-blue-500">Isolasi COVID-19</span><br />
        di dekatmu
      </h1>

      <p className="mb-8 text-gray-400">
        Temukan shelter untuk Isolasi Mandiri bagi pasien positif COVID-19 (dengan gejala ringan dan sedang).
      </p>

      <select className="w-full py-3 px-4 bg-gray-100 rounded-xl mb-4">
        <option value="1">Yogyakarta</option>
        <option value="1">Jawa Tengah</option>
      </select>

      <select className="w-full py-3 px-4 bg-gray-100 rounded-xl mb-4">
        <option value="">Kota Yogyakarta</option>
        <option value="">Sleman</option>
        <option value="">Bantul</option>
        <option value="">Kulonprogo</option>
        <option value="">Gunungkidul</option>
      </select>

      <button className="w-full py-3 px-4 bg-blue-500 text-white text-center font-bold rounded-full">Cari Tempat Isolasi Terdekat</button>
    </main>
  )
}
