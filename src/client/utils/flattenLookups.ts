import produce from "immer";
import { sortBy } from "lodash-es";

const flattenLookups = (data: { [key: string]: any }) =>
  produce(data, (draft) => {
    for (const key in draft) {
      if (draft[key]?.displayName) {
        draft[key] = draft[key].displayName;
      } else if (Array.isArray(draft[key])) {
        draft[key] = JSON.stringify(
          sortBy(draft[key], `${key.slice(0, -1)}.name`)
        );
      }
    }
  });

export default flattenLookups;
