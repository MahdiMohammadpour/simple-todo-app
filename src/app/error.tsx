"use client";

import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
