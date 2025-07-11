"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <Typography variant="h2">
        Something went wrong in {error.message}!
      </Typography>
      <Button variant="outlined" color="error" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
