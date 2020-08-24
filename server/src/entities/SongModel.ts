import { PrimaryKey, Property, Entity } from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class SongModel {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property()
    name!: String;

    @Field(() => String)
    @Property()
    artist!: String;

    @Field(() => String)
    @Property()
    url!: String;

    @Field(() => String)
    @Property()
    imageUrl: String;

    @Field(() => Int)
    @Property()
    downVotes: number = 0;

    @Field(() => Int)
    @Property()
    upVotes: number = 0;

    @Field(() => String)
    @Property({ type: 'date' })
    createdAt: Date = new Date();

    @Field(() => String)
    @Property({ type: 'date', onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}