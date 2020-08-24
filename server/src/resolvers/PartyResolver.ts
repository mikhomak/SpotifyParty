import { Resolver, Query, Ctx, Arg, Int, Mutation } from 'type-graphql'
import { PartyModel } from '../entities/PartyModel';
import { SpotifyPartyContext } from '../types';

@Resolver()
export class PartyResolver {

    @Query(() => PartyModel, { nullable: true })
    async party(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel | null> {
        return await em.findOne(PartyModel, { id });
    }

    @Query(() => [PartyModel])
    async parties(
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel[]> {
        return await em.find(PartyModel, {});
    }


    @Mutation(() => PartyModel)
    async createParty(
        @Arg('name', () => String) name: String,
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel> {
        const party = em.create(PartyModel, { name });
        await em.persistAndFlush(party);
        return party;
    }

    @Mutation(() => PartyModel, { nullable: true })
    async updateParty(
        @Arg('id', () => Int) id: number,
        @Arg('name', () => String, { nullable: true }) name: String,
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<PartyModel | null> {
        const party = await em.findOne(PartyModel, { id });
        if (!party) {
            return null;
        }

        if (typeof name !== 'undefined') {
            party.name = name;
            await em.persistAndFlush(party);
        }
        return party;
    }



    @Mutation(() => Boolean)
    async deleteParty(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: SpotifyPartyContext
    ): Promise<boolean> {
        try {
            await em.nativeDelete(PartyModel, { id });
        } catch{
            return false;
        }
        return true;
    }

}