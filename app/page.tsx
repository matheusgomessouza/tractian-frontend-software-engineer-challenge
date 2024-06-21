import Image from "next/image";

import tractianLogo from "../public/assets/tractian-logo.svg";
import buttonLogo from "../public/assets/gold.svg";
import thunderboltLogo from "../public/assets/thunderbolt.svg";
import exclamationLogo from "../public/assets/exclamation-circle.svg";
import locationLogo from "../public/assets/location.svg";

export default async function Home() {
  async function getCompaniesData() {
    const companies = await fetch("https://fake-api.tractian.com/companies");

    if (!companies.ok) {
      throw new Error("Failed to fetch data");
    }

    return companies.json();
  }

  async function getCompanyLocationsData(companyId: string) {
    const companyLocations = await fetch(
      `https://fake-api.tractian.com/companies/${companyId}/locations`
    );

    if (!companyLocations.ok) {
      throw new Error("Failed to fetch data");
    }

    return companyLocations.json();
  }

  async function getCompanyAssetsData(companyId: string) {
    const companyAssets = await fetch(`https://fake-api.tractian.com/companies/${companyId}/assets`);

    if (!companyAssets.ok) {
      throw new Error("Failed to fetch data");
    }

    return companyAssets.json();
  }

  const companiesData = await getCompaniesData();
  
  console.log(companiesData);

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
      <main className="flex h-screen flex-col bg-gray-200 p-2">
        <section className="bg-white w-full h-screen rounded-md p-4">
          <section className="flex justify-between mb-3">
            <section className="flex gap-2">
              <h2 className="text-black text-xl font-bold">Ativos</h2>
              <p className="text-gray-600">/ {"Apex Unit"}</p>
            </section>

            <section className="flex gap-2">
              <button className="py-2 px-4 h-8 border border-gray-200 rounded-md flex items-center justify-center gap-2">
                <Image alt="blue lightning symbol" src={thunderboltLogo} />
                <p className="text-gray-600 font-bold">Sensor de Energia</p>
              </button>
              <button className="py-2 px-4 h-8 border border-gray-200 rounded-md flex items-center justify-center gap-2">
                <Image alt="blue exclamation symbol" src={exclamationLogo} />
                <p className="text-gray-600 font-bold">Crítico</p>
              </button>
            </section>
          </section>
          <section className="flex h-[96%] w-full gap-2">
            <article className="border border-gray-200 rounded-sm w-2/5">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Buscar Ativo ou Local"
                className="w-full h-11 border-b border-gray-200 p-3"
              />
              <details className="text-gray-900 mt-3 px-4">
                <summary>
                  <div className="flex gap-1 justify-start items-center ">
                    <Image src={locationLogo} alt="marker symbol" />
                    <p>PRODUCTION AREA - RAW MATERIAL</p>
                  </div>
                </summary>
              </details>
            </article>
            <aside className="border border-gray-200 rounded-sm w-3/5">
              <header className="border-b border-gray-200 h-14 flex items-center px-4">
                <strong className="text-black">{"MOTOR RT COAL AF01"}</strong>
              </header>
            </aside>
          </section>
        </section>
      </main>
    </>
  );
}
