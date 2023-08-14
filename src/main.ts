import { initWaifu as initWaifuImpl } from "./lapp";
import { WaifuConfig } from "./lappconfig";

export function initWaifu(config: WaifuConfig) {
    const defaultConfig = {};
    Object.assign(defaultConfig, config);
    initWaifuImpl(defaultConfig);
}
