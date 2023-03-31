import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import RemoteLoading from "remote/Loading";
import dynamic from 'next/dynamic';


const RemoteLoading = dynamic(() => import('remote/Loading'), {
    ssr: false,
  });

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div>NEXT JS MF</div>
     <RemoteLoading />
    </>
  )
}
