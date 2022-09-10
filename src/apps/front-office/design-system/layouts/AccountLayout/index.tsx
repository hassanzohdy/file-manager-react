import { BasicComponentProps } from "app/utils/types";
import BaseLayout from "../BaseLayout";

export default function AccountLayout({ children }: BasicComponentProps) {
  return (
    <>
      <BaseLayout>
        <aside>Account Sidebar</aside>
        {children}
      </BaseLayout>
    </>
  );
}
