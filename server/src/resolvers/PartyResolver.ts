import { Resolver, Query, Ctx, Arg, Int, Mutation } from 'type-graphql'
import { PartyModel } from '../entities/PartyModel';
import { SpotifyPartyContext } from '../types';
import { PartyService } from '../service/PartyService';
import Container from 'typedi';
import PartyResponse from './responses/PartyResponse';

@Resolver()
export class PartyResolver {


    @Query(() => PartyResponse)
    async party(
        @Arg('id', () => Int) id: number
    ): Promise<PartyResponse> {
        const party = await Container.get<PartyService>(PartyService).findParty(id);
        if (party === null) {
            return {
                errors: [
                    {
                        field: 'name',
                        message: 'Something went wrong while creating party'
                    }
                ]
            }
        }
        return { party };
    }

    @Query(() => [PartyModel])
    async parties(): Promise<PartyModel[]> {
        return await Container.get<PartyService>(PartyService).findAllParties();
    }


    @Mutation(() => PartyResponse)
    async createParty(
        @Arg('name', () => String) name: String
    ): Promise<PartyResponse> {
        const party = await Container.get<PartyService>(PartyService).createParty(name);
        if (party === null) {
            return {
                errors: [
                    {
                        field: 'name',
                        message: 'Something went wrong while creating party'
                    }
                ]
            }
        }
        return { party };
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