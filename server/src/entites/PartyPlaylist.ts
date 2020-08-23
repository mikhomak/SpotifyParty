import { PrimaryKey, Property, Entity } from "@mikro-orm/core";

@Entity()
export class PartyPlaylist  {
    @PrimaryKey()
    id!: number;

    @Property({ onUpdate: () => new Date() })
    createdAt: Date = new Date();

    @Property()
    updatedAt: Date = new Date();
}