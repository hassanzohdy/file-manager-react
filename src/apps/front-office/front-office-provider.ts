import { endpointEvents } from "@mongez/http";
import { AxiosResponse } from "axios";
import user from "user";
//

endpointEvents.onSuccess((response: AxiosResponse) => {
  if (response.data.data) {
    response.data = response.data.data;
  }

  if (response.data.user) {
    user.login(response.data.user);
  }
});
