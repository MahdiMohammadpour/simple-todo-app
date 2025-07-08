import { Button } from "@mui/material";
import { useState } from "react";
import ContactModal from "./ContactModal";
import ContactOptions from "./ContactOptions";
import { useTranslations } from "next-intl";

export default function Contact() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
   const translate = useTranslations("buttons");
  return (
    <>
      <Button color="secondary" variant="contained" sx={{p:2,px:6}} onClick={() => setContactModalOpen(true)}>
      {translate("contact")}
      </Button>
      {contactModalOpen && (
        <ContactModal
          title="contact"
          open={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        >
          <ContactOptions />
        </ContactModal>
      )}
    </>
  );
}
