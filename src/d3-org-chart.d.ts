declare module 'd3-org-chart' {
  export class OrgChart {
    container(container: HTMLElement): this;
    data(data: any[]): this;
    nodeWidth(fn: (d?: any) => number): this;
    nodeHeight(fn: (d?: any) => number): this;
    nodeContent(fn: (d: any) => string): this;
    render(): this;
    fit(): this;
    // Add other methods as needed
  }
}