import Image from "next/image";

import tractianLogo from "../../public/assets/tractian-logo.svg";
import buttonLogo from "../../public/assets/gold.svg";
import thunderboltLogo from "../../public/assets/gold.svg";
import exclamationLogo from "../../public/assets/gold.svg";

export default async function Home() {
  return (
    <>
      <header className="w-full bg-blue-950 h-12 flex items-center justify-between px-4">
        <Image alt="Tractian logo" src={tractianLogo} />
        <div className="gap-2 flex">
          <button
            type="button"
            className="bg-blue-500 font-bold rounded-sm flex items-center gap-2 justify-evenly px-2"
          >
            <Image alt="Three gold bars icon in white color" src={buttonLogo} />
            Apex Unit
          </button>
          <button className="bg-blue-900 font-bold rounded-sm flex items-center gap-2 justify-evenly px-2">
            <Image alt="Three gold bars icon in white color" src={buttonLogo} />
            Tobias Unit
          </button>
          <button className="bg-blue-900 font-bold rounded-sm flex items-center gap-2 justify-evenly px-2">
            <Image alt="Three gold bars icon in white color" src={buttonLogo} />
            Jaguar Unit
          </button>
        </div>
      </header>
      <main className="flex min-h-screen flex-col bg-gray-200 p-2">
        <section className="bg-white w-full h-screen rounded-md p-4 justify-between">
          <section className="flex gap-2">
            <h2 className="text-black text-xl font-bold">Ativos</h2>
            <p className="text-gray-600">/ {"Apex Unit"}</p>
          </section>

          <section className="flex justify-between">
            <button>
              <Image alt="" src={thunderboltLogo} />
              Sensor de Energia
            </button>
            <button>
              <Image alt="" src={exclamationLogo} />
              Crítico
            </button>
          </section>
        </section>
      </main>
    </>
  );
}
