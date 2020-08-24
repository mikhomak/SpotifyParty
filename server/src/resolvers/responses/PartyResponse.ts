import { PartyModel } from "../../entities/PartyModel";
import { Field, ObjectType } from "type-graphql";
import FieldError from "./FieldError";

@ObjectType()
export default class PartyResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => PartyModel, { nullable: true })
  party?: PartyModel;
}