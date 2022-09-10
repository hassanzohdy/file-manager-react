import { BasicComponentProps } from "app/utils/types";
import Footer from "../Footer";
import Header from "../Header";

export default function BaseLayout({ children }: BasicComponentProps) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}
