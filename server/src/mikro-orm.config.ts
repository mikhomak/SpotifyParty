import { PartyPlaylist } from './entites/PartyPlaylist';
import {__prod__} from './constants';
import { MikroORM } from '@mikro-orm/core';

export default {
    entities: [PartyPlaylist],
    dbName: 'spotyfParty',
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];