import { PartyModel } from './entites/PartyModel';
import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [PartyModel],
    dbName: 'spotyfParty',
    type: 'postgresql',
    user: 'postgres',
    password: 'postgres',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];