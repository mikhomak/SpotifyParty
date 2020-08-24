import PartyResponse from "../resolvers/responses/PartyResponse"


export const logErrorGraphql = (field: string, message: string): PartyResponse =>{
    return {
        errors: [
            {
                field: field,
                message: message
            }
        ]
    }
}