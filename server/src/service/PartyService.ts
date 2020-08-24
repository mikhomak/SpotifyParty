import { PartyModel } from '../entities/PartyModel';
import { Service } from "typedi";
import { DAO } from '../index';


@Service()
export class PartyService {

    async findAllParties(): Promise<PartyModel[]> {
        return await DAO.partyRepository.findAll();
    }

    async findParty(id: number): Promise<PartyModel | null> {
        return await DAO.partyRepository.findOneOrFail({ id })
            .catch((err) => {
                console.log(err);
                return null;
            })
    }

    async createParty(name: String): Promise<PartyModel | null> {
        try {
            const party = DAO.partyRepository.create({ name: name });
            await DAO.partyRepository.persistAndFlush(party);
            return party;
        } catch (error) {
            console.log(console.error());
            return null;
        }

    }
}