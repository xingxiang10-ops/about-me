import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';

type AnimeParams = Parameters<typeof animate>[1];

interface UseAnimeOptions {
  targets: string;
  params: AnimeParams;
  /** If true, animation only runs when triggered manually via replay() */
  manual?: boolean;
}

export function useAnime({ targets, params, manual = false }: UseAnimeOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  const runAnimation = useCallback(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(targets);
    if (elements.length === 0) return;

    animationRef.current = animate(elements as unknown as string, params);
  }, [targets, params]);

  useEffect(() => {
    if (!manual) {
      // Small delay to ensure DOM is painted
      const timer = setTimeout(runAnimation, 50);
      return () => clearTimeout(timer);
    }
  }, [manual, runAnimation]);

  const replay = useCallback(() => {
    runAnimation();
  }, [runAnimation]);

  return { containerRef, replay };
}

/**
 * Simple hook to animate a single ref element on mount
 */
export function useAnimateOnMount(params: Omit<AnimeParams, 'targets'>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const timer = setTimeout(() => {
      if (ref.current) {
        animate(ref.current, params as AnimeParams);
      }
    }, 50);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
