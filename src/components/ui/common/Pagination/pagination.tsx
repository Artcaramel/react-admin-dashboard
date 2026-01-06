import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  total: number;
  pageSize?: number;
  onChange: (page: number) => void;
}

export function Pagination({
  page,
  total,
  pageSize = 5,
  onChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages === 0) return null;

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => page > 1 && onChange(page - 1)}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNumber = idx + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                className="cursor-pointer"
                isActive={page === pageNumber}
                onClick={() => onChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => page < totalPages && onChange(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
}
