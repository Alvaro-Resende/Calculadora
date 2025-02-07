"use client";

import React from 'react'
import { useState } from "react";


export default function Home() {

const [peso, setpeso] = useState("");
const [altura, setaltura] = useState ("");
const [imc, setimc] = useState ("0.00");

function calcular () {setimc((peso / (altura*altura)).toFixed(2))}

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-[800px] p-5 border-8 border-[#FDE5B6] flex flex-col justify-center items-center bg-[#1E5537]'>
            
            <h1 className='text-white font-semibold text-[34px] italic text-center'> Calculando <br></br> Seu IMC </h1>
            
            <div className='flex flex-col sm:flex-row gap-16 justify-center items-center mt-10'>
                
                <div className='flex flex-col items-center'>
                    <input type='number' placeholder='0.00' className=" w-full max-w-[140px] h-[35px] border-b-2 border-white bg-transparent text-white font-semibold focus:outline-none text-center" value={peso} onChange={(e) => setpeso(parseFloat(e.target.value))}/>
                    <h2 className="text-white font-semibold text-lg">Digite seu Peso</h2>
                </div>

                <div className='flex flex-col items-center'>
                    <input type='number'placeholder='0.00' className=" w-full max-w-[140px] h-[35px] border-b-2 border-white bg-transparent text-white font-semibold focus:outline-none text-center" value={altura} onChange={(e) => setaltura(parseFloat(e.target.value))}/>
                    <h2 className="text-white font-semibold text-lg">Digite sua Altura</h2>
                </div>
                
                <button className='w-[120px] h-[50px] rounded-full  bg-[#FF0000] text-white text-center font-semibold text-[20px] transform transition hover:scale-110' onClick={calcular}>Calcular </button>
            </div>   

            <div className='w-[250px] h-[140px] bg-white border-white border-4 rounded-full mt-8 mb-4 flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <input className="pointer-events-none max-w-[130px] h-[35px] bg-transparent text-[#FF0000] text-[38px] font-semibold focus:outline-none text-center" value={imc}/>
                    <div className='flex w-[240px] justify-end p-2'>
                        <h2 className="text-[#1E5537] font-bold text-[26px] text-end italic transform rotate-[-20deg] ">SEU IMC</h2>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}
