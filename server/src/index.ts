import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import mikroOrmConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);

};

main().catch((err) => {
    console.error(err);
});
