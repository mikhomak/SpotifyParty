import { Party } from './entites/Party';
import {__prod__} from './constants';
import { MikroORM } from '@mikro-orm/core';

export default {
    entities: [Party],
    dbName: 'spotyfParty',
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];