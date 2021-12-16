import _ from "lodash";
import { READ_EVENTS } from "../actions";

export default (e = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // idをキーに持つオブジェクトに整形
      return _.mapKeys(action.response.data, "id");
    default:
      return e;
  }
};
