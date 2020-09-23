import React from "react";
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";
import { Box, Flex, Spinner } from "@chakra-ui/core";
import { PartyQuery, PartyResponse, usePartyQuery } from "../../generated/graphql";
import { UseQueryResponse } from "urql/dist/types/hooks/useQuery";
import { RouteComponentProps, withRouter } from 'react-router';
import { toErrorMap } from "../../utils/toErrorMap";
import { SpotifyApiProps } from "../../utils/SpotifyApiPropos";


interface PartyProps extends SpotifyApiProps {
    id: string;

}

const Party = ({ match }: RouteComponentProps, PartyProps) => {

    const partyResponse: UseQueryResponse<PartyQuery> = usePartyQuery({
        variables: {
            id: parseInt(match.params.id)
        }
    });


    if (!partyResponse[0].fetching && partyResponse[0].data?.party.errors !== null ) {
        return (
            <Flex align='center' justifyContent='center'>
                Oops! something went wrong!
                {/* {toErrorMap(partyResponse[0].data.party.errors)} */}
            </Flex>
        )
    }


    const partyName = !partyResponse[0].fetching ?
        partyResponse[0].data?.party.party?.name :
        <Spinner color='Green' />;

    return (
        <Flex h='100%' pl='7%' pr='7%' alignItems='center' justifyContent='center' flexDirection='column'>
            <Box fontSize='50px' mt={5} pb={2}> {partyName}</Box>
            <QueueSongs />
            <Flex pb={5} justifyContent='space-between' align='center' w='100%'>
                <MembersList />
                <PartyControls />
            </Flex>
        </Flex>
    );
}

const PartyRouter  = withRouter(Party);
export {PartyRouter as Party};