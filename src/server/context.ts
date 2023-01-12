import { YogaInitialContext } from "@graphql-yoga/node";

export interface Context extends YogaInitialContext {
  userid: string;
}

const userid = process.env.DEV_USER_ID;

const context = () => {
  return { userid };
};

export default context;
