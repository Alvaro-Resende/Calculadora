"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Variáveis de estado
  const [numero_A, setNumero_A] = useState(0);
  const [numero_B, setNumero_B] = useState(0);
  const [resultado, setResultado] = useState(0);

  // Funções de operação
  function Calcular() { setResultado((numero_A || 0) + (numero_B || 0)); }
  function Subtrair() { setResultado((numero_A || 0) - (numero_B || 0)); }
  function Multiplicar() { setResultado((numero_A || 0) * (numero_B || 0)); }
  function Divisao() { setResultado((numero_A || 0) / (numero_B || 0)); }
  function Limpar() {
    setResultado(0);
    setNumero_A(0);
    setNumero_B(0);
  }

  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)] w-screen h-screen bg-[#77ACA6] p-4">
      <div className="relative flex flex-col md:flex-row md:border-4 md:border-[#194E66] md:rounded-lg md:overflow-hidden w-full max-w-2xl">
        <div className="relative md:w-1/2 h-64 md:h-auto hidden md:block">
          <Image src="/imagens/calculadora.png" alt="banner" fill className="" />
        </div>
        <div className="flex flex-col justify-center items-center p-6 bg-[#77ACA6] w-full md:w-1/2">
          <h1 className="underline italic text-2xl font-semibold text-[#194E66] mb-4">Calculadora & NextJS</h1>
          <input type="number" className="w-full max-w-[200px] h-[35px] border-2 border-[#CD6040] rounded text-[#194E66] text-lg font-semibold focus:outline-none text-center" value={numero_A} onChange={(e) => setNumero_A(parseFloat(e.target.value) || 0)} />
          <input type="number" className="w-full max-w-[200px] h-[35px] border-2 border-[#CD6040] rounded text-[#194E66] text-lg font-semibold focus:outline-none text-center mt-2" value={numero_B} onChange={(e) => setNumero_B(parseFloat(e.target.value) || 0)} />
          <input className="pointer-events-none w-full max-w-[140px] h-[35px] border-b-2 border-[#CD6040] bg-transparent text-[#CD6040] text-xl font-semibold focus:outline-none text-center mt-4" value={resultado} />
          <h2 className="text-[#CD6040] font-semibold text-lg">Resposta</h2>
          <div className="flex space-x-4 mt-4">
            <button className="w-12 h-12 rounded-full bg-[#194E66] text-white text-xl flex justify-center items-center transform transition hover:scale-110" onClick={Calcular}>+</button>
            <button className="w-12 h-12 rounded-full bg-[#CD6040] text-white text-xl flex justify-center items-center transform transition hover:scale-110" onClick={Subtrair}>-</button>
          </div>
          <div className="flex space-x-4 mt-3">
            <button className="w-12 h-12 rounded-full bg-[#CD6040] text-white text-xl flex justify-center items-center transform transition hover:scale-110" onClick={Multiplicar}>×</button>
            <button className="w-12 h-12 rounded-full bg-[#194E66] text-white text-xl flex justify-center items-center transform transition hover:scale-110" onClick={Divisao}>÷</button>
          </div>
          <button className="mt-4 w-12 h-12 rounded-full bg-[#f32e2e] text-white text-lg flex justify-center items-center transform transition hover:scale-110" onClick={Limpar}>AC</button>
        </div>
      </div>
    </div>
  );
}
