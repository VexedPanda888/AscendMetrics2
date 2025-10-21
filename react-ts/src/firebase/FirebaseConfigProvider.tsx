import type { ReactElement } from "react";
import { ui } from "./firebase.ts";
import { ConfigProvider } from "@firebase-ui/react";

type FirebaseConfigProviderProps = {
  children: ReactElement;
};

/**
 * A more descriptively named wrapper for the configuration and UI provider.
 * This comes from firebase UI - a respository with drop-in authentication components.
 *
 * @param props
 * @returns
 */
function FirebaseConfigProvider(props: FirebaseConfigProviderProps) {
  return <ConfigProvider ui={ui}>{props.children}</ConfigProvider>;
}

export default FirebaseConfigProvider;
