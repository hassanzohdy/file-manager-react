import { forwardRef } from "react";

const BaseForm = forwardRef(function BaseForm({ props }: any, ref: any) {
  return <form {...props} ref={ref} />;
});

export default BaseForm;
