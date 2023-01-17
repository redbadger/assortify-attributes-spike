import produce from "immer";

const flattenLookups = (data: { [key: string]: any }) =>
  produce(data, (draft) => {
    for (const key in draft) {
      if (draft[key]?.displayName) {
        draft[key] = draft[key].displayName;
      } else if (Array.isArray(draft[key])) {
        draft[key] = JSON.stringify(draft[key]);
      }
    }
  });

export default flattenLookups;
