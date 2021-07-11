import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Heading, Text, Select, Button } from '@chakra-ui/react'
import HomeIllustration from '../images/home.svg'

export default function Home() {
  const router = useRouter()
  const [province, setProvince] = useState(null)
  const [city, setCity] = useState(null)

  const searchNearestLocations = e => {
    router.push({
      pathname: '/locations',
      query: { province, city }
    })
  }

  return (
    <Box p="6">
      <Head>
        <title>Informasi Shelter Isolasi Covid-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box py="6">
        <HomeIllustration style={{margin: '0 auto'}} />
      </Box>

      <Heading as="h1" fontSize="2xl" mb="4">
        Temukan Tempat <Text as="span" color="blue.500">Isolasi COVID-19</Text><br />
        di dekatmu
      </Heading>

      <Text mb="8" color="gray.400">
        Temukan shelter untuk Isolasi Mandiri bagi pasien positif COVID-19 (dengan gejala ringan dan sedang).
      </Text>

      <Select variant="filled" placeholder="Pilih Provinsi" mb="4" onChange={e => setProvince(e.target.value)}>
        <option value="1">Yogyakarta</option>
        <option value="2">Jawa Tengah</option>
      </Select>

      <Select variant="filled" placeholder="Pilih Kota/Kabupaten" mb="4" onChange={e => setCity(e.target.value)}>
        <option value="1">Kota Yogyakarta</option>
        <option value="2">Sleman</option>
        <option value="3">Bantul</option>
        <option value="4">Kulonprogo</option>
        <option value="5">Gunungkidul</option>
      </Select>

      <Button colorScheme="blue" size="lg" borderRadius="full" w="full" onClick={searchNearestLocations}>
        Cari Tempat Isolasi Terdekat
      </Button>
    </Box>
  )
}
