/* eslint-disable no-unused-vars */
declare module '*.svelte' {
  interface ComponentOptions {
    target: HTMLElement;
    anchor?: HTMLElement | null;
    props?: {};
    hydrate?: boolean;
    intro?: boolean;
  }

  interface Component {
    new (options: ComponentOptions): any;
    // client-side methods
    $set(props: {}): void;
    $on(event: string, callback: (customEvent: CustomEvent) => void): void;
    $destroy(): void;

    // server-side methods
    render(props?: {}): {
      html: string;
      css: { code: string; map: string | null };
      head?: string;
    };
  }

  const component: Component;
  export default component;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
