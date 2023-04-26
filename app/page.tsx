import  {exploreData, cardsData}  from "../data/data.js"
import Banner from '../components/Banner/Banner'
import SmallCard from '../components/Card/SmallCard/SmallCard'
import MediumCard from '../components/Card/MediumCard/MediumCard'
import LargeCard from '../components/Card/LargeCard/LargeCard'
import Footer from '../components/Footer/Footer'

export default async function Home() {

  return (
    <div>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
