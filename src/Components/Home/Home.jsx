import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import MainSlider from '../MainSlider'
import CategorySlider from '../CategorySlider'
import axios from 'axios'
import RecentProducts from '../RecentProducts'

export default function Home() {
 
  
  return <>
    <MainSlider />
    <CategorySlider />
    <RecentProducts />
  </>
}
