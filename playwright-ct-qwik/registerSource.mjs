// @ts-check
// This file is injected into the registry as text, no dependencies are allowed.

/** @typedef {import('@playwright/experimental-ct-core/types/component').Component} Component */
/** @typedef {import('@playwright/experimental-ct-core/types/component').JsxComponent} JsxComponent */
/** @typedef {import('@playwright/experimental-ct-core/types/component').ObjectComponent} ObjectComponent */
/** @typedef {() => import('@builder.io/qwik').QwikJSX.Element} FrameworkComponent */

/** @type {Map<string, () => Promise<FrameworkComponent>>} */
const __pwLoaderRegistry = new Map();

/**
 * @param {{[key: string]: () => Promise<FrameworkComponent>}} components
 */
export function pwRegister(components) {
  for (const [name, value] of Object.entries(components))
    __pwLoaderRegistry.set(name, value);
}

window.playwrightMount = async (component, rootElement, hooksConfig) => {
  throw new Error('Not implemented');
};

window.playwrightUpdate = async (rootElement, component) => {
  throw new Error('Not implemented');
};

window.playwrightUnmount = async (rootElement) => {
  throw new Error('Not implemented');
};
