import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Zehra Exchange",
    chainId: "elgafar-1",
    createdDate: "2025-01-19T19:01:01.148Z",
    modifiedDate: "2025-01-19T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "stars19xddx2zdky6d9jlsrqqyavfycr6pytwmn799vvqsu7fzd4dp7k4q9etd9q",
            cw721: "stars15l5j0hf80ayj7yuhd6qjhlgwgmgy6apekwpe3k76lgltfhqge3cqemdnth",
            name: "Zehra Coin",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        },
        {
            exchange:
                "andr1cxkwfyny73axrqfuszt6l88wkuwd0f836qyyhh7u3h547t4hnnxq3gqk5m",
            cw20: "andr1h6pvvlg5yvsu5r6dgkjl5s4pwxry69j3q72gm09yqsfwsuv2fs6q2glj04",
            name: "Zehra Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
