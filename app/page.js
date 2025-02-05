import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex items-center justify-center font-[family-name:var(--font-geist-sans)] w-screen h-screen bg-[#77ACA6]">
      <div className="relative h-[350px] w-[350px] border-l-4 border-b-4 border-t-4 rounded-l-lg border-[#194E66]">
          <Image
            src="/imagens/calculadora.png"
            alt="baner"
            fill
            className="object-cover rounded-l-lg"
          />
      </div>
      <div className=" h-[350px] w-[350px] border-r-4 border-b-4 border-t-4 border-[#194E66] rounded-r-lg flex flex-col justify-center items-center">
          <h1 className="underline italic text-[26px] font-semibold text-[#194E66] mb-6">Calculadora & NextJS</h1>

          <input type="number" className=" w-[200px] h-[35px] border-2 border-[#CD6040] rounded text-[#194E66] text-[20px] font-semibold focus:outline-none text-center"></input>
          <input type="number" className="w-[200px] h-[35px] border-2 border-[#CD6040] rounded text-[#194E66] text-[20px] font-semibold focus:outline-none text-center mt-1"></input>

          <input className="pointer-events-none w-[140px] h-[35px] border-b-2 border-[#CD6040] bg-[#77ACA6] text-[#CD6040] text-[22px] font-semibold focus:outline-none text-center mt-5"></input>
          <h2 className="text-[#CD6040] font-semibold text-[18px]">Resposta</h2>

          <div className="flex space-x-5 items-center mt-10">
            <button className="w-[60px] h-[60px] rounded-full bg-[#194E66] text-white items-center transform transition hover:scale-110 font-semibold" >Somar</button>
            <button className="w-[60px] h-[60px] rounded-full bg-[#CD6040] text-white items-center transform transition hover:scale-110 font-semibold" >Limpar</button>
          </div>
          
      </div>

    </div>
  );
}
