import React from "react";
import Router from "next/router";

const WithSuperAdminAuth = (WrappedComponent) => {
  const SuperAdminComponent = ({ isSuperAdmin, ...props }) => {
    if (!isSuperAdmin) {
      if (typeof window !== "undefined") {
        Router.push("/"); // Redirect to the homepage if user is not a superadmin
      }
      return null;
    }
    return <WrappedComponent {...props} />;
  };

  SuperAdminComponent.getInitialProps = async (ctx) => {
    const isSuperAdmin = "hello"; // Replace with your own logic to check if user is a superadmin
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, isSuperAdmin };
  };

  return SuperAdminComponent;
};

export default WithSuperAdminAuth;
