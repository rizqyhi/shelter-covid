import Head from 'next/head'
import { Box, Heading, Text, Select, Button } from '@chakra-ui/react'
import HomeIllustration from '../images/home.svg'

export default function Home() {
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

      <Select variant="filled" placeholder="Pilih Provinsi" mb="4">
        <option value="1">Yogyakarta</option>
        <option value="1">Jawa Tengah</option>
      </Select>

      <Select variant="filled" placeholder="Pilih Kota/Kabupaten" mb="4">
        <option value="">Kota Yogyakarta</option>
        <option value="">Sleman</option>
        <option value="">Bantul</option>
        <option value="">Kulonprogo</option>
        <option value="">Gunungkidul</option>
      </Select>

      <Button colorScheme="blue" size="lg" borderRadius="full" w="full">
        Cari Tempat Isolasi Terdekat
      </Button>
    </Box>
  )
}
