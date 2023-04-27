import Header from "../../components/Header/index";
import ListingCard from "../../components/Card/ListingCard/index";
import Map from "../../components/Map/index";
import {listingsData} from "../../data/data";

export default function Search({ searchParams }) {
  const { location, startDate, endDate, noOfGuests } = searchParams;

  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedStartDate = startDate ? new Date(startDate).toLocaleDateString("en-US", options) : "";
  const formattedEndDate = endDate ? new Date(endDate).toLocaleDateString("en-US", options) : "";
  const dateRange = formattedStartDate && formattedEndDate ? `${formattedStartDate} to ${formattedEndDate}` : "";

  return (
    <div>
      <Header
        placeholder={`${location} |  ${dateRange} | ${noOfGuests} ${
          +noOfGuests === 1 ? "guest" : "guests"
        }`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {dateRange} - for {noOfGuests}{" "}
            {+noOfGuests === 1 ? "guest" : "guests"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {listingsData.map((listing) => (
              <ListingCard key={listing.img} listing={listing} />
            ))}
          </div>
        </section>

        <section className="hidden lg:inline-flex">
          <Map />
        </section>
      </main>
    </div>
  );
}
