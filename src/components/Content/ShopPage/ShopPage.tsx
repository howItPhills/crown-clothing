import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useShopStateUpdater } from "../../../store/shop/shop-dispatch-hook";

export const ShopPage = () => {
  const { fetchShopItems } = useShopStateUpdater();

  useEffect(() => {
    fetchShopItems();
  }, [fetchShopItems]);

  return <Outlet />;
};
