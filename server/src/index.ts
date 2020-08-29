import "reflect-metadata";
import { MikroORM, EntityRepository, EntityManager } from '@mikro-orm/core';
import { __prod__ } from './constants';
import mikroOrmConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql'
import { PartyResolver } from './resolvers/PartyResolver';
import { PartyModel } from "./entities/PartyModel";
import cors from 'cors';

export const DAO = {} as {
    orm: MikroORM,
    em: EntityManager,
    partyRepository: EntityRepository<PartyModel>
};


const main = async () => {
    // Setting up database
    DAO.orm = await MikroORM.init(mikroOrmConfig);
    await DAO.orm.getMigrator().up();
    DAO.em = DAO.orm.em;
    DAO.partyRepository = DAO.orm.em.getRepository(PartyModel);

    const app = express();

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PartyResolver],
            validate: false
        }),
        context: () => ({ em: DAO.orm.em })
    });

    apolloServer.applyMiddleware({ app, cors: false });




    app.listen(3700, () => {
        console.log("server started on port 3700");
    });
};




main().catch((err) => {
    console.error(err);
});

