import { Button } from "@/components/ui/common/Button";
// import MarkdocButton from "@/documents/elements/markdowns/button.mdx";

export function ButtonView() {
  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* 
      <div className="mt-4 markdoc_container">
        <MarkdocButton />
      </div> */}
    </div>
  );
}
