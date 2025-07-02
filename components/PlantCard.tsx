"use client";

import { Plant } from "@/types/plant";

interface Props {
  plant: Plant;
}

export const PlantCard = ({ plant }: Props) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold">{plant.name}</h2>
      <p className="text-gray-600">{plant.type}</p>
      <p>Last Watered: {plant.lastWatered}</p>
      <p>Water Every: {plant.waterFrequency} days</p>
    </div>
  );
};
