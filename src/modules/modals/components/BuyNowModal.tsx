import { usePlaceBidConstruct } from "@/lib/andrjs";
import useApp from "@/lib/app/hooks/useApp";
import { useGetTokenAuctionState } from "@/lib/graphql/hooks/auction";
import { useGetToken } from "@/lib/graphql/hooks/collection";
import { NumberInput } from "@/modules/common/ui";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { coins } from "@cosmjs/proto-signing";
import { FC, useState } from "react";
import { useExecuteModal } from "../hooks";
import { BuyNowModalProps } from "../types";
import { Msg } from "@andromedaprotocol/andromeda.js";
import { useGetTokenMarketplaceInfo } from "@/lib/graphql/hooks/marketplace";

const BuyNowModal: FC<BuyNowModalProps> = (props) => {
  const { contractAddress, tokenId, marketplaceAddress } = props;
  const { data: token } = useGetToken(contractAddress, tokenId);
   const { data: marketplaceState } = useGetTokenMarketplaceInfo(
     marketplaceAddress,
     contractAddress,
     tokenId
   );


  const { config } = useApp();
  const construct = usePlaceBidConstruct();

  const DENOM = marketplaceState?.latestSaleState.coin_denom ?? config?.coinDenom ?? "ujunox";

  // Execute place bid directly on auction
  const openExecute = useExecuteModal(marketplaceAddress);

  const onSubmit = () => {
    const msg = construct({ tokenAddress: contractAddress, tokenId: tokenId });
    const funds = coins(marketplaceState?.latestSaleState.price ?? 0 , DENOM);
    openExecute(msg, true, funds);
  };

  return (
    <Box>
      <Heading size="md" mb="6" fontWeight="bold">
        Place Bid
      </Heading>
      <Text textStyle="light" mb="4">
        You are about to buy <b>{token?.extension?.name}</b>.
       
      </Text>
      <Box>
        <FormControl>
          {/* <FormLabel>Price</FormLabel>
          <HStack>
            <Box w="full">
              
              
            </Box>
           
          </HStack> */}
          <Button onClick={onSubmit} w="full" mt="6" variant="solid">
            Buy Now
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default BuyNowModal;


