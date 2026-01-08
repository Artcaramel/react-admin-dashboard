import {
  Select as BaseSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  placeholder?: string;
  options: Option[];
  label?: string;
  width?: string;
  disabled?: boolean;
}

export function Select({
  placeholder = "Select",
  options,
  label,
  width = "w-[180px]",
  disabled = false,
}: SelectProps) {
  return (
    <BaseSelect disabled={disabled}>
      <SelectTrigger className={width}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </BaseSelect>
  );
}
