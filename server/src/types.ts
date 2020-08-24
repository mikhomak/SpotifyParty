import { IDatabaseDriver, Connection, EntityManager } from "@mikro-orm/core";

export type SpotifyPartyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}