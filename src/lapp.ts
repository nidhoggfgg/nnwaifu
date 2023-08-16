import { Application } from 'pixi.js';
import { WaifuConfig } from './lappconfig';
import { LAppDelegate } from './lappdelegate';

export function initWaifu(config: WaifuConfig) {
    const app = new Application({
        width: 300,
        height: 300,
    });
    const instance = LAppDelegate.new();
}