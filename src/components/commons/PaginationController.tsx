import { Box } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";

export default function PaginationController({
  itemCount,
  pagination,
  handleChange,
  page = 1,
}) {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" my={20}>
      <Pagination
        page={page}
        count={Math.ceil(itemCount / pagination)}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
