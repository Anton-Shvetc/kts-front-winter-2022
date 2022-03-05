import * as Router from "react-router-dom";

import rootStore from "../instance";

export const UseQueryParamsStoreInit = (): void => {
  const location = Router.useLocation();
  const history = Router.useHistory();

  rootStore.query.setHistory(history, location);
};
