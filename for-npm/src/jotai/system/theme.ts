import { atomWithStorage } from "jotai/utils";
import jotaiStorage from "../util/storage";

export const themeState = atomWithStorage(
  "theme",
  "dark",
  jotaiStorage.local(),
);
