"use client";

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  //Variaveis de estado
  const [numero_A, setNumero_A] =useState(0);
  const [numero_B, setNumero_B] = useState(0);
  const [resultado, setResultado] = useState(0);

  //Função Calcular
  function Calcular() {
    const numA = numero_A || 0;
    const numB = numero_B || 0;

    console.log(numA, numB);
    setResultado(numA + numB);
    console.log("Estou do Lado do Cliente...");
    //Chama a função do lado do servidor corretamente
  }

//Função Subtrair
function Subtrair() {
  const numA = numero_A || 0;
  const numB = numero_B || 0;

  console.log(numA, numB);
  setResultado(numA - numB);
  console.log("Estou do Lado do Cliente...");
  //Chama a função do lado do servidor corretamente
}

//Função Multiplicar
function Multiplicar () {
  const numA = numero_A || 0;
    const numB = numero_B || 0;

    console.log(numA, numB);
    setResultado(numA * numB);
    console.log("Estou do Lado do Cliente...");
    //Chama a função do lado do servidor corretamente
}

//Função Divisão
function Divisao () {
  const numA = numero_A || 0;
    const numB = numero_B || 0;

    console.log(numA, numB);
    setResultado(numA / numB);
    console.log("Estou do Lado do Cliente...");
    //Chama a função do lado do servidor corretamente
}

//Função Limpar
  function Limpar() {
    setResultado(0);
    setNumero_A(0);
    setNumero_B(0);
}  

  return (
    <div className=" flex items-center justify-center font-[family-name:var(--font-geist-sans)] w-screen h-screen bg-[#77ACA6]">
      <div className="relative h-[470px] w-[380px] border-l-4 border-b-4 border-t-4 rounded-l-lg border-[#194E66]">
          <Image
            src="/imagens/calculadora.png"
            alt="baner"
            fill
            className=" "
          />
      </div>
      <div className=" h-[470px] w-[300px] border-r-4 border-b-4 border-t-4 border-[#194E66] rounded-r-lg flex flex-col justify-center items-center">
          <h1 className="underline italic text-[26px] font-semibold text-[#194E66] mb-6">Calculadora & NextJS</h1>

          <input type="number" className=" w-[200px] h-[35px] border-2 border-[#CD6040] rounded text-[#194E66] text-[20px] font-semibold focus:outline-none text-center" value={numero_A} onChange={(e) => setNumero_A(parseFloat(e.target.value))}></input>
          <input type="number" className="w-[200px] h-[35px] border-2 border-[#CD6040] rounded text-[#194E66] text-[20px] font-semibold focus:outline-none text-center mt-1" value={numero_B} onChange={(e) => setNumero_B(parseFloat(e.target.value))}></input>

          <input className="pointer-events-none w-[140px] h-[35px] border-b-2 border-[#CD6040] bg-[#77ACA6] text-[#CD6040] text-[28px] font-semibold focus:outline-none text-center mt-5" value={resultado}></input>
          <h2 className="text-[#CD6040] font-semibold text-[18px]">Resposta</h2>

          <div className="flex space-x-6 items-center mt-5">
            <button className="w-[60px] h-[60px] rounded-full bg-[#194E66] text-white  transform transition hover:scale-110 font-semibold text-[36px] flex justify-center items-start" onClick={Calcular} >+</button>
            <button className="w-[60px] h-[60px] rounded-full bg-[#CD6040] text-white  transform transition hover:scale-110 font-semibold text-[36px] flex justify-center items-start" onClick={Subtrair} >-</button>
          </div>

          <div className="flex space-x-6 items-center mt-3">
            <button className="w-[60px] h-[60px] rounded-full bg-[#CD6040] text-white transform transition hover:scale-110 font-semibold text-[36px] flex justify-center items-start" onClick={Multiplicar} > x </button>
            <button className="w-[60px] h-[60px] rounded-full bg-[#194E66] text-white transform transition hover:scale-110 font-semibold text-[36px] flex justify-center items-start" onClick={Divisao} >÷ </button>
          </div>

          <button className="mt-4 w-[60px] h-[60px] rounded-full bg-[#f32e2e] text-white transform transition hover:scale-110 font-semibold text-[26px] flex justify-center items-center" onClick={Limpar}>AC</button>

      </div>

    </div>
  );
}
