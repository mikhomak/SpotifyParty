import { Resolver, Query, Ctx, Arg, Int, Mutation } from 'type-graphql'
import { PartyModel } from '../entities/PartyModel';
import { SpotifyPartyContext } from '../types';

@Resolver()
export class PartyResolver {

    @Query(() => PartyModel, { nullable: true })
    party(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel | null> {
        return em.findOne(PartyModel, { id });
    }

    @Query(() => [PartyModel])
    parties(
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel[]> {
        return em.find(PartyModel, {});
    }


    @Mutation(() => PartyModel)
    async createParty(
        @Arg('name', () => String) name: String,
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel | null> {
        const party = em.create(PartyModel, { name });
        await em.persistAndFlush(party);
        return party;
    }

}