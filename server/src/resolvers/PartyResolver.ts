import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql'
import { PartyModel } from '../entities/PartyModel';
import { PartyService } from '../service/PartyService';
import Container from 'typedi';
import PartyResponse from './responses/PartyResponse';
import { logErrorGraphql } from '../utils/logErrorGraphql';

@Resolver()
export class PartyResolver {


    @Query(() => PartyResponse)
    async party(
        @Arg('id', () => Int) id: number
    ): Promise<PartyResponse> {
        const party : PartyModel | null = await Container.get<PartyService>(PartyService).findParty(id);
        if (party === null) {
            return logErrorGraphql('id', 'Cant find party with this id : ' + id);
        }
        return { party };
    }

    @Query(() => [PartyModel])
    async parties(): Promise<PartyModel[]> {
        return await Container.get<PartyService>(PartyService).findAllParties();
    }


    @Mutation(() => PartyResponse)
    async createParty(
        @Arg('name', () => String) name: String,
        @Arg('isPrivate', () => Boolean) isPrivate: boolean
    ): Promise<PartyResponse> {
        const party : PartyModel | null = await Container.get<PartyService>(PartyService).createParty(name, isPrivate);
        if (party === null) {
            return logErrorGraphql('name', 'someting went wrong while creating a party');
        }
        return { party };
    }

    @Mutation(() => PartyResponse)
    async updateParty(
        @Arg('id', () => Int) id: number,
        @Arg('name', () => String, { nullable: true }) name: String
    ): Promise<PartyResponse> {
        const party : PartyModel | null = await Container.get<PartyService>(PartyService).updateParty(id, name);
        if (party === null) {
            return logErrorGraphql('id', 'Cant find party with this id : ' + id);
        }
        return { party };
    }



    @Mutation(() => Boolean)
    async deleteParty(
        @Arg('id', () => Int) id: number): Promise<boolean> {
        return await Container.get<PartyService>(PartyService).deleteParty(id);
    }

}