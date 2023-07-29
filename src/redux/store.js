import { configureStore } from "@reduxjs/toolkit";
import pcParts from "./features/pcParts/pcParts";

export const store = configureStore({
  reducer: { pcParts: pcParts },
});
