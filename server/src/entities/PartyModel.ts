import { PrimaryKey, Property, Entity } from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class PartyModel {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ type: 'date' })
    createdAt: Date = new Date();

    @Field(() => String)
    @Property({ type: 'date', onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    @Field(() => String)
    @Property()
    name: String;

    @Field(() => Boolean)
    @Property({ type: 'boolean', nullable: true})
    isPrivate: boolean = false;

    @Field(() => Int)
    @PrimaryKey({type : 'number'})
    currentUsersAmount: number = 0;

}