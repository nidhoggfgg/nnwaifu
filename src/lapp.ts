import * as PIXI from 'pixi.js';
import { WaifuConfig } from './lappconfig';

export function initWaifu(config: WaifuConfig) {
    const app = new PIXI.Application({
        width: 300,
        height: 300,
    });
}