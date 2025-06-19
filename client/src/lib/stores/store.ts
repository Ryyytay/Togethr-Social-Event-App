import { createContext } from "react";
import CounterStore from "./counterStore";
import { UiStore } from "./uiStore";
import { AcitivityStore } from "./activityStore";

interface Store {
    counterStore: CounterStore
    uiStore: UiStore
    activityStore: AcitivityStore
}

export const store: Store = {
    counterStore: new CounterStore(),
    uiStore: new UiStore(),
    activityStore: new AcitivityStore()
}

export const StoreContext = createContext(store);