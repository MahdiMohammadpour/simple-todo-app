"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import type React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ResponsiveModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ContactModal({
  open,
  onClose,
  title,
  children,
}: ResponsiveModalProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // For SwipeableDrawer on mobile
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      {isMobile ? (
        <SwipeableDrawer
          open={open}
          onClose={onClose}
          onOpen={() => {}}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="bottom"
          swipeAreaWidth={0}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              maxHeight: "90vh",
            },
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              // bgcolor: "background.paper",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                p: 2,
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Grid container size={"grow"} sx={{ alignItems: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: 14, sm: 18 },
                    width: "80%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid>
                <IconButton size="large" onClick={onClose}>
                  <IoCloseCircleOutline />
                </IconButton>
              </Grid>
            </Box>
          </Box>

          <Box sx={{ p: 2, overflow: "auto" }}>{children}</Box>
        </SwipeableDrawer>
      ) : (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius:5,
            },
          }}
        >
          <DialogTitle >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={800}
                sx={{
                  fontSize: { xs: 14, sm: 18 },
                  width: "80%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Typography>
              <IconButton size="large" onClick={onClose}>
                <IoCloseCircleOutline />
              </IconButton>
            </Box>
          </DialogTitle>

          <DialogContent >{children}</DialogContent>
        </Dialog>
      )}
    </>
  );
}
