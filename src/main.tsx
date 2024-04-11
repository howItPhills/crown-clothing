import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage.tsx";
import { CategoriesMenu } from "./components/Content/HomepageMenu/CategoriesMenu.tsx";
import "./index.css";
import { ShopPage } from "./components/Content/ShopPage/ShopPage.tsx";
import { ContactsPage } from "./components/Content/ContactsPage.tsx";
import { SignInPage } from "./components/Content/SignInPage/SignInPage.tsx";
import { ProtectedSignInRoute } from "./protected-routes/ProtectedSignInRoute.tsx";
import { CheckoutPage } from "./components/Content/CheckoutPage/CheckoutPage.tsx";
import { CategoryPage } from "./components/Content/ShopPage/CategoryPage.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { CategoriesPreview } from "./components/Content/ShopPage/CategoriesPreview.tsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <CategoriesMenu />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
        children: [
          { path: "/shop", element: <CategoriesPreview /> },
          { path: "/shop/:categoryId", element: <CategoryPage /> },
        ],
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/signIn",
        element: (
          <ProtectedSignInRoute>
            <SignInPage />
          </ProtectedSignInRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </Provider>
  </React.StrictMode>,
);
