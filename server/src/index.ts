import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { PartyPlaylist } from './entites/PartyPlaylist';

const main = async () => {
    const orm = await MikroORM.init({
        entities: [PartyPlaylist],
        dbName: 'spotyfParty',
        type: 'postgresql',
        debug: !__prod__
    });

};

main().catch((err) => {
    console.error(err);
});
