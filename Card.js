import React from 'react'
import img1 from "../Images/kpopmerch1.avif";
import img2 from "../Images/kpopmerch2.jpg";
import img3 from "../Images/kpopmerch3.jpg"
import img4 from "../Images/kpopmerch4.jpg";
import img5 from "../Images/kpopmerch5.jpg"
import img6 from "../Images/kpopmerch6.jpg"
import img7 from "../Images/kpopmerch7.jpg"
import img8  from "../Images/kpopmerch8.jpg"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>KPOP T-SHIRT</h2>
        <h2>Price : $100</h2>
        <h2>Band : GENERAL</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>BTS ARMY KIT</h2>
        <h2>Price : $780</h2>
        <h2>Band: BTS </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>MONSTER HOODIE</h2>
        <h2>Price : $50</h2>
        <h2>Band : EXO</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>SET HOODIIE</h2>
        <h2>Price : $75</h2>
        <h2>Band : EXO</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>PHOTOCARDS</h2>
        <h2>Price : $500</h2>
        <h2>Band: EXO</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>PHOTOFRAME</h2>
        <h2>Price : $200</h2>
        <h2>Band : EXO </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>SCHOOL STATIONARY KIT</h2>
        <h2>Price : $20</h2>
        <h2>Band : TXT</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>STAY HOODIE</h2>
        <h2>Price : $350</h2>
        <h2>Band : STRAY KIDS</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
