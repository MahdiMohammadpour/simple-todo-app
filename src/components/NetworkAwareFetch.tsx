"use client";

import type React from "react";
import { useState, useEffect, type ReactNode } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import useNetworkStatus from "@/utils/useNetworkStatus";

interface NetworkAwareFetchProps<T> {
  fetchFunction: () => Promise<T>;
  renderContent: (data: T) => ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  offlineComponent?: ReactNode;
  dependencies?: React.DependencyList;
}

function NetworkAwareFetch<T>({
  fetchFunction,
  renderContent,
  loadingComponent,
  errorComponent,
  offlineComponent,
  dependencies = [],
}: NetworkAwareFetchProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { isOnline } = useNetworkStatus();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isOnline) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchFunction();
        if (isMounted) {
          setData(result);
          // Store in localStorage for offline access
          try {
            localStorage.setItem(
              `network-aware-data-${fetchFunction.toString().slice(0, 100)}`,
              JSON.stringify(result)
            );
          } catch (e) {
            console.warn("Failed to cache data in localStorage:", e);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const loadCachedData = () => {
      try {
        const cachedData = localStorage.getItem(
          `network-aware-data-${fetchFunction.toString().slice(0, 100)}`
        );
        if (cachedData) {
          setData(JSON.parse(cachedData) as T);
        }
      } catch (e) {
        console.warn("Failed to load cached data:", e);
      }
    };

    if (!isOnline) {
      loadCachedData();
      setIsLoading(false);
    } else {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [isOnline, fetchFunction, dependencies]);

  if (isLoading) {
    return (
      loadingComponent || (
        <Box display="flex" justifyContent="center" p={3}>
          <CircularProgress />
        </Box>
      )
    );
  }

  if (!isOnline && !data) {
    return (
      offlineComponent || (
        <Alert severity="warning" sx={{ m: 2 }}>
          <Typography variant="body1">
            شما آفلاین هستید و داده‌ای برای نمایش وجود ندارد.
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => window.location.reload()}
          >
            تلاش مجدد
          </Button>
        </Alert>
      )
    );
  }

  if (error) {
    return (
      errorComponent || (
        <Alert severity="error" sx={{ m: 2 }}>
          <Typography variant="body1">
            خطا در دریافت اطلاعات: {error.message}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => window.location.reload()}
          >
            تلاش مجدد
          </Button>
        </Alert>
      )
    );
  }

  if (!data) {
    return (
      <Alert severity="info" sx={{ m: 2 }}>
        <Typography variant="body1">داده‌ای برای نمایش وجود ندارد.</Typography>
      </Alert>
    );
  }

  return <>{renderContent(data)}</>;
}

export default NetworkAwareFetch;
