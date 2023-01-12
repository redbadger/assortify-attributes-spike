import { YogaInitialContext } from "@graphql-yoga/node";
import { PrismaClient } from "@prisma/client";
import prisma from "./prismaClient.js";

export interface Context extends YogaInitialContext {
  userid: string;
  prisma: PrismaClient;
}

const userid = process.env.DEV_USER_ID;

const context = () => {
  return { userid, prisma };
};

export default context;
