import { plants } from "@/data/plant";
import { PlantCard } from "@/components/PlantCard";

export default function PlantsPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Plants</h1>
      <div className="grid gap-4">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </main>
  );
}
