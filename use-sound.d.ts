// declare module 'use-sound' {
//   export default function useSound(
//     src: string | string[],
//     options?: {
//       volume?: number;
//       playbackRate?: number;
//     }
//   ): [() => void, { sound: HTMLAudioElement | null }];
// }

declare module 'use-sound' {
  type UseSoundOptions = {
    volume?: number;
    playbackRate?: number;
    onplay?: () => void;
    onend?: () => void;
    onpause?: () => void;
    format?: string[];
  };

  type SoundControls = {
    pause: () => void;
    sound: HTMLAudioElement | null;
  };

  type UseSoundFunction = (
    src: string | string[],
    options?: UseSoundOptions
  ) => [() => void, SoundControls];

  const useSound: UseSoundFunction;

  interface HTMLAudioElement {
    unload: () => void;
    play: () => void;
  }

  export default useSound;
}
