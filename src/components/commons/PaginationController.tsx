import { Box } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";

export default function PaginationController({ itemCount, pagination }) {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" my={20}>
      <Pagination
        count={Math.floor(itemCount / pagination) + 1}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
