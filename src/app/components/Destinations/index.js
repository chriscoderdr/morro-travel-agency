"use client";

import Destination from "./Destination";
import SearchBar from "../SearchBar";
import useData from "@/app/hooks/useData";
import { useMemo, useState } from "react";

const Destinations = () => {
  const url = useMemo(() => {
    return "/destinations.json";
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: destinations, loading, error } = useData("/destinations.json");

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredDestinations = destinations
    ? destinations.filter(
        (destination) =>
          destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          destination.location
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
      )
    : [];

  return (
    <div className="flex justify-center w-[1200px] flex-col mt-[100px]" id="destinations">
      <div className="flex justify-between">
        <div className="text-heading-desktop-1 font-gilda text-neutral900 whitespace-pre-line">
          {"Find your best\ndestination"}
        </div>
        <div className="pt-[33px]">
          <div className="text-neutral700 font-urbanist font-medium">
            We have more than 1000+ destinations you can choose.
          </div>
          <SearchBar onSearchChange={handleSearchChange} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-[40px]">
        {filteredDestinations?.length > 0 ? (
          filteredDestinations.map((destination) => (
            <Destination key={destination.id} destination={destination} />
          ))
        ) : (
          <div>No destinations found</div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
