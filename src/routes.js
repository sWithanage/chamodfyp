/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav.
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import GenerateImages from "layouts/generateImages";
import ArgonBox from "components/ArgonBox";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

const routes = [
  {
    type: "route",
    name: "Style Gan",
    key: "styleGan",
    route: "/generateImages/StyleGan",
    path: "/generateImages/:ganType",
    navbar: true,
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <GenerateImages />,
  },
  {
    type: "route",
    name: "Billing",
    key: "generateImages",
    route: "/generateImages/DcGan",
    path: "/generateImages/:ganType",
    navbar: true,
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <GenerateImages />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    path: "/login",
    navbar: false,
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    path: "/signup",
    navbar: false,
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
];

export default routes;
