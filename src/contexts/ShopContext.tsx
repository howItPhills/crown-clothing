import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { getCollectionsAndDocuments } from "../utils/firebase";

export type ShopMapType = {
  [key: string]: ShopItemType[];
};

export type ShopItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type ShopContextUpdaterType = Dispatch<SetStateAction<ShopMapType>>;

export const ShopContextValue = createContext<ShopMapType | null>(null);
export const ShopContextUpdater = createContext<ShopContextUpdaterType | null>(
  null,
);

export const ShopContextProvider = ({ children }: PropsWithChildren) => {
  const [shopItemsMap, setShopItemsMap] = useState<ShopMapType>({});

  // useEffect(() => {
  //   const getCollections = async () => {
  //     const map = await getCollectionsAndDocuments();
  //     setShopItemsMap(map);
  //   };
  //   getCollections();
  // }, []);

  return (
    <ShopContextUpdater.Provider value={setShopItemsMap}>
      <ShopContextValue.Provider value={shopItemsMap}>
        {children}
      </ShopContextValue.Provider>
    </ShopContextUpdater.Provider>
  );
};
