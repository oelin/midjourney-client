declare module 'midjourney-client' {
  interface MidjourneyOptions {
    [key: string]: any;
  }
  export default function midjourney(prompt: string, inputs?: MidjourneyOptions): Promise<string[]>;
}
