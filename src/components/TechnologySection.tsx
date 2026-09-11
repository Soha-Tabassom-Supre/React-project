
import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

export default function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch(() => {
        setError("Unable to load technologies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section
        id="technologies"
        className="px-6 py-20 text-center"
      >
        <p className="text-gray-600">Loading technologies...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="technologies"
        className="px-6 py-20 text-center"
      >
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section id="technologies" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore popular technologies and choose the tools that fit
            your development stack.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

