import { Select } from "@/components/ui/common/Select";

export function SelectView() {
  return (
    <div className="space-y-6">
      <section className="space-y-1">
        <span className="font-semibold">Normal</span>
        <Select
          label="Fruits"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Pineapple", value: "pineapple" },
          ]}
        />
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Select Placeholder</span>
        <Select
          placeholder="Select an animal"
          options={[
            { label: "Dog", value: "dog" },
            { label: "Cat", value: "cat" },
            { label: "Rabbit", value: "rabbit" },
          ]}
        />
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Disabled</span>
        <Select
          placeholder="Disabled"
          disabled
          options={[{ label: "Option 1", value: "option1" }]}
        />
      </section>
    </div>
  );
}
