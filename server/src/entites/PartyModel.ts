import { PrimaryKey, Property, Entity } from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class PartyModel {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ onUpdate: () => new Date() })
    createdAt: Date = new Date();

    @Field(() => String)
    @Property()
    updatedAt: Date = new Date();

    @Field(() => String)
    @Property()
    name: String;
}