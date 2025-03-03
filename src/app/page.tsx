//i18n
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Typography variant="h1">{t("welcome")}</Typography>
      <Link href="/home">Home</Link>
    </>
  );
}
