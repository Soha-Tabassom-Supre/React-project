
import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

export default function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.log(error);
        setError("Unable to load technologies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  if (loading) {
    return (
      <section
        id="technologies"
        className="px-6 py-20 text-center"
      >
        <p className="text-gray-600">
          Loading technologies...
        </p>
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
    <section
      id="technologies"
      className="bg-gray-50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

    
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore popular technologies and choose the tools
            that fit your development stack.
          </p>
        </div>

    
        <div className="grid gap-8 lg:grid-cols-3">

        
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={handleAddToStack}
              />
            ))}
          </div>

        
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Your Stack
              </h3>

              <span className="text-sm font-medium text-gray-500">
                {stack.length}{" "}
                {stack.length === 1
                  ? "Technology"
                  : "Technologies"}
              </span>
            </div>

        
            {stack.length === 0 ? (
              <div className="mt-8 rounded-xl bg-gray-50 p-6 text-center">
                <p className="text-sm text-gray-500">
                  Your stack is empty.
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Add technologies to build your stack.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                  >
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      className="h-9 w-9 object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {technology.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {technology.category}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-lg text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
